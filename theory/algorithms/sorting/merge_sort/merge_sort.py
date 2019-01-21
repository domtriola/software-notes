def merge_sort(items):
    if len(items) < 2:
        return items

    center = len(items) // 2
    left = items[:center]
    right = items[center:]

    return merge(merge_sort(left), merge_sort(right))

def merge(left, right):
    merged = []

    left_i = 0
    right_i = 0
    while left_i < len(left) and right_i < len(right):
        left_val = left[left_i]
        right_val = right[right_i]
        if left_val < right_val:
            merged.append(left_val)
            left_i += 1
        else:
            merged.append(right_val)
            right_i += 1

    for array, i in [(left, left_i), (right, right_i)]:
        while i < len(array):
            merged.append(array[i])
            i += 1

    return merged

merge_sort([4, 3, 2, 1])
