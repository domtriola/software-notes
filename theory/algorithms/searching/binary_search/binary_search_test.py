import unittest

from theory.algorithms.sorting.util import create_consecutive_list
from theory.algorithms.searching.binary_search.binary_search import binary_search

class TestBinarySearch(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestBinarySearch, self).__init__(*args, **kwargs)
        self.maxDiff = None

    def test_it_searches_small_arrays(self):
        items = [1]
        self.assertEqual(binary_search(items, 1), 0)

        items = [1, 2]
        self.assertEqual(binary_search(items, 2), 1)

        items = [1, 2, 3]
        self.assertEqual(binary_search(items, 1), 0)

        items = [1, 2, 3]
        self.assertEqual(binary_search(items, 2), 1)

        items = [1, 2, 3]
        self.assertEqual(binary_search(items, 3), 2)

    def test_it_searches_large_arrays(self):
        items = create_consecutive_list(1000)
        self.assertEqual(binary_search(items, 978), 978)

    def test_it_handles_missing_item(self):
        items = [1, 2, 4]
        self.assertEqual(binary_search(items, 3), None)


if __name__ == '__main__':
    unittest.main()
