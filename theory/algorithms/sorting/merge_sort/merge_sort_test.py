import unittest
from random import shuffle

from theory.algorithms.sorting.util import create_consecutive_list
from theory.algorithms.sorting.merge_sort.merge_sort import merge_sort

class TestMergeSort(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestMergeSort, self).__init__(*args, **kwargs)
        self.maxDiff = None

    def test_it_sorts_small_arrays(self):
        items = [3, 2, 1]
        self.assertEqual(merge_sort(items), [1, 2, 3])

        items = [1, 2, 3]
        self.assertEqual(merge_sort(items), [1, 2, 3])

        items = [2, 3, 1]
        self.assertEqual(merge_sort(items), [1, 2, 3])

        items = create_consecutive_list(9)
        for i in range(20):
            shuffle(items)
            self.assertEqual(merge_sort(items), create_consecutive_list(9))

    def test_it_sorts_large_arrays(self):
        items = create_consecutive_list(1000)
        shuffle(items)
        self.assertEqual(merge_sort(items), create_consecutive_list(1000))


if __name__ == '__main__':
    unittest.main()
