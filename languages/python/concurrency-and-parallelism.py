# Overview
#################

# Notes from https://effectivepython.com/

# Concurrency in Python can make tasks appear to run in parallel, but the GIL
# prevents true parallelism. Python subprocesses are nice alternative to shell
# scripts. Python threads can still help with blocking IO calls even if they
# don't help speed up CPU bound computation.


# Processes
#################

import subprocess
import time

proc = subprocess.Popen(
    ['echo', 'Hello from the child!'],
    stdout=subprocess.PIPE)
out, err = proc.communicate()
print(out.decode('utf-8'))


# proc1 = subprocess.Popen(['sleep', '0.00001'])
# while proc1.poll() is None:
#     print('Working...')
# print('Exit status', proc1.poll())

def run_sleep(period):
    proc = subprocess.Popen(['sleep', str(period)])
    return proc

start = time.time()
procs = []
for _ in range(10):
    proc = run_sleep(0.1)
    procs.append(proc)
for proc in procs:
    proc.communicate()
end = time.time()
print('Finished in {} seconds'.format(round(end - start, 4)))
# Finished in 0.1255 seconds
# (This would be > 1 second if ran sequentially)


# Threads
################

import select
import socket
import threading

def slow_systemcall():
    select.select([socket.socket()], [], [], 0.1)

start = time.time()
for _ in range(5):
    slow_systemcall()
end = time.time()
print('Took {} seconds'.format(round(end - start, 4)))

start = time.time()
threads = []
for _ in range(5):
    thread = threading.Thread(target=slow_systemcall)
    thread.start()
    threads.append(thread)
for _ in range(5):
    print('Doing other work...')
for thread in threads:
    thread.join()
end = time.time()
print('Took {} seconds'.format(round(end - start, 4)))


# Mutex
#############

# Threads can still cause mutation of shared state even though it may sound
# like the GIL would prevent it

def run_threads(func, how_many, counter):
    threads = []
    for i in range(5):
        thread = threading.Thread(target=func, args=[0, how_many, counter])
        threads.append(thread)
        thread.start()
    for thread in threads:
        thread.join()

class Counter(object):
    def __init__(self):
        self.count = 0
    def increment(self, offset):
        self.count += offset

def worker(sensor_idx, how_many, counter):
    for _ in range(how_many):
        # Read from sensor...
        counter.increment(1)

how_many = 10 ** 5
counter = Counter()
run_threads(worker, how_many, counter)
print('Counter should be {}, found {}'.format(5 * how_many, counter.count))
# Counter should be 500000, found 353102

class LockingCounter(object):
    def __init__(self):
        self.lock = threading.Lock()
        self.count = 0
    def increment(self, offset):
        with self.lock:
            self.count += offset

locking_counter = LockingCounter()
run_threads(worker, how_many, locking_counter)
print('Counter should be {}, found {}'.format(5 * how_many, locking_counter.count))
# Counter should be 500000, found 500000
