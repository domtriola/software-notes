class Node(object):
    def __init__(self, data=None, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

class Heap(object):
    def __init__(self, root=None):
        self.root = root

    def insert(self, data):
        # Insert node into heap
        pass

    def extract(self):
        # Pop and return root node
        pass
