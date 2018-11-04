def binary_search(items, target):
    if not items or len(items) == 1 and items[0] != target:
        return None

    guess = len(items) // 2

    if items[guess] == target:
        return guess
    elif target < items[guess]:
        return binary_search(items[:guess], target)
    else:
        found = binary_search(items[guess:], target)
        return guess + found if found else None
