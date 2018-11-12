import unittest
from random import shuffle

from theory.algorithms.sorting.util import create_consecutive_list
from theory.algorithms.sorting.selection_sort.selection_sort import selection_sort

class TestSelectionSort(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestSelectionSort, self).__init__(*args, **kwargs)
        self.maxDiff = None

    def test_it_sorts_small_arrays(self):
        items = [3, 2, 1]
        self.assertEqual(selection_sort(items), [1, 2, 3])

        items = [1, 2, 3]
        self.assertEqual(selection_sort(items), [1, 2, 3])

        items = [2, 3, 1]
        self.assertEqual(selection_sort(items), [1, 2, 3])

        for i in range(20):
            items = create_consecutive_list(9)
            shuffle(items)
            self.assertEqual(selection_sort(items), create_consecutive_list(9))

    def test_it_sorts_large_arrays(self):
        items = create_consecutive_list(1000)
        shuffle(items)
        self.assertEqual(selection_sort(items), create_consecutive_list(1000))


if __name__ == '__main__':
    unittest.main()
