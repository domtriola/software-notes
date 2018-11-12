import random

def quick_sort(items):
    if len(items) < 2:
        return items

    # Shallow copy, if we don't want to mutate the input list
    # items = items[:]

    pivot = items.pop(0)
    left = []
    right = []

    for item in items:
        if item <= pivot:
            left.append(item)
        else:
            right.append(item)

    return quick_sort(left) + [pivot] + quick_sort(right)


def quick_sort_in_place(items, start=0, length=None):
    if length is None:
        length = len(items)

    if length < 2:
        return items

    # Chose pivot randomly to mitigate against pathological data sets
    pivot_index = random.randint(start, start + length - 1)
    pivot = items[pivot_index]

    # Move pivot and starting position to beginning of array
    items[start], items[pivot_index] = items[pivot_index], items[start]
    pivot_index = start

    index = pivot_index + 1
    while index < start + length:
        item = items[index]
        if item < pivot:
            # Replace current item with the item just right of pivot
            items[index] = items[pivot_index + 1]
            # Replace that recently moved item's position with the pivot
            # (shuffling it one place to the right to make room for the current
            # index item)
            items[pivot_index + 1] = pivot
            # Replace the pivot's position with the current index item
            items[pivot_index] = item
            # Update the pivot index
            pivot_index += 1

        index += 1

    # Sort both sections left and right of pivot
    left_length = pivot_index - start
    right_length = length - (left_length + 1)
    quick_sort_in_place(items, start, left_length)
    quick_sort_in_place(items, pivot_index + 1, right_length)

    return items

# Example for the swapping mechanism in quick_sort_in_place:
# pivot_index (p) = 1
# index       (i) = 3
# larger_item (r) = 2 (p + 1)
#     p  r  i
# [1, 3, 4, 2] <- starting position
#
#     p     r
# [1, 3, 4, 4] <- move item right of pivot to current index
#
#        p  r
# [1, 3, 3, 4] <- move pivot one to the right
#
#     i  p  r
# [1, 2, 3, 4] <- put current item where pivot was

# Edge case:
# pivot_index = 0
# index       = 1
#  p  i
# [2, 1] <- starting position
# [2, 1] <- item right of pivot is the current index item, so it is replaced by itself
# [2, 2] <- move pivot over
# [1, 2] <- move current item to pivot position


# Good visualization of a different implementation - moving the pivot to the end,
# and making it be the last swap, rather than constantly shifting it:
# https://www.hackerrank.com/challenges/quicksort3/problem
