import unittest
from random import shuffle

from theory.algorithms.sorting.util import create_consecutive_list
from theory.algorithms.sorting.quick_sort.quick_sort import quick_sort
from theory.algorithms.sorting.quick_sort.quick_sort import quick_sort_in_place

class TestQuickSort(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestQuickSort, self).__init__(*args, **kwargs)
        self.maxDiff = None

    def test_it_sorts_small_arrays(self):
        items = [3, 2, 1]
        self.assertEqual(quick_sort(items), [1, 2, 3])

        items = [1, 2, 3]
        self.assertEqual(quick_sort(items), [1, 2, 3])

        items = [2, 3, 1]
        self.assertEqual(quick_sort(items), [1, 2, 3])

        for i in range(20):
            items = create_consecutive_list(9)
            shuffle(items)
            self.assertEqual(quick_sort(items), create_consecutive_list(9))

    def test_it_sorts_large_arrays(self):
        items = create_consecutive_list(1000)
        shuffle(items)
        self.assertEqual(quick_sort(items), create_consecutive_list(1000))


class TestQuickSortInPlace(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestQuickSortInPlace, self).__init__(*args, **kwargs)
        self.maxDiff = None

    def test_it_sorts_small_arrays(self):
        items = [3, 2, 1]
        self.assertEqual(quick_sort_in_place(items), [1, 2, 3])

        items = [1, 2, 3]
        self.assertEqual(quick_sort_in_place(items), [1, 2, 3])

        items = [2, 3, 1]
        self.assertEqual(quick_sort_in_place(items), [1, 2, 3])

        for i in range(20):
            items = create_consecutive_list(9)
            shuffle(items)
            self.assertEqual(quick_sort_in_place(items), create_consecutive_list(9))

    def test_it_sorts_large_arrays(self):
        items = create_consecutive_list(1000)
        shuffle(items)
        self.assertEqual(quick_sort_in_place(items), create_consecutive_list(1000))


if __name__ == '__main__':
    unittest.main()
