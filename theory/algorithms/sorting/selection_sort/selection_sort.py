def selection_sort(items):
    sorted = []
    i = 0
    times = len(items)
    for i in range(times):
        smallest_index = find_smallest_index(items)
        smallest = items.pop(smallest_index)
        sorted.append(smallest)

    return sorted

def find_smallest_index(items):
    smallest = items[0]
    smallest_index = 0
    for index, item in enumerate(items[1:], start=1):
        if item < smallest:
            smallest = item
            smallest_index = index

    return smallest_index
