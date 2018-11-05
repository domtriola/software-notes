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
