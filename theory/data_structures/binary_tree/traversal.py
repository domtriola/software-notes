class Node():
    def __init__(self, data=None, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def visit(node):
    print(node.data)

def in_order(node):
    if node:
        in_order(node.left)
        visit(node)
        in_order(node.right)

def pre_order(node):
    if node:
        visit(node)
        pre_order(node.left)
        pre_order(node.right)

def post_order(node):
    if node:
        post_order(node.left)
        post_order(node.right)
        visit(node)


one = Node(data=1)
two = Node(data=2)
three = Node(data=3)
four = Node(data=4)
five = Node(data=5)
six = Node(data=6)

#        4
#      /  \
#     1    3
#    /    / \
#   5    2   6
four.left = one
four.right = three
one.left = five
three.left = two
three.right = six

print('In Order:')
in_order(four)
print('\nPre Order:')
pre_order(four)
print('\nPost Order:')
post_order(four)
