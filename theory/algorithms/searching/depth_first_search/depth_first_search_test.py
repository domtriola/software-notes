import unittest

from theory.algorithms.searching.node import Node
from theory.algorithms.searching.depth_first_search.depth_first_search \
  import depth_first_search

root = Node(value=7)
root.left = Node(value=4)
root.left.left = Node(value=3)
root.left.right = Node(value=5)
root.right = Node(value=8)
root.right.left = Node(value=6)
root.right.right = Node(value=9)

#        7
#      /   \
#    4      8
#   / \    / \
#  3   5  6   9

class TestDepthFirstSearch(unittest.TestCase):
    def test_it_finds_the_target(self):
        found = depth_first_search(root, 5)
        self.assertEqual(found.value, 5)

        found = depth_first_search(root, 7)
        self.assertEqual(found.value, 7)

        found = depth_first_search(root, 8)
        self.assertEqual(found.value, 8)

        found = depth_first_search(root, 6)
        self.assertEqual(found.value, 6)

    def test_it_returns_none_if_not_found(self):
        found = depth_first_search(root, 10)
        self.assertIsNone(found)

if __name__ == '__main__':
    unittest.main()
