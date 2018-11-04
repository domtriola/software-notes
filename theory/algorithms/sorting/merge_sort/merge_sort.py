def merge_sort(items):
    if len(items) < 2:
        return items

    center = len(items) // 2
    left = items[:center]
    right = items[center:]

    return merge(merge_sort(left), merge_sort(right))

def merge(left, right):
    merged = []

    while left and right:
        if left[0] < right[0]:
            merged.append(left.pop(0))
        else:
            merged.append(right.pop(0))

    return merged + left + right

merge_sort([4, 3, 2, 1])
