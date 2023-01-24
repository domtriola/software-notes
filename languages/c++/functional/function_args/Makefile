PROGRAM   = main
CXX       = g++
CXXFLAGS  = -g -std=c++14 -Wall

$(PROGRAM): main.o
	$(CXX) -o $(PROGRAM) main.o

.PHONY: run clean

run: $(PROGRAM)
	./$(PROGRAM)

clean:
	-rm *.o $(PROGRAM)
