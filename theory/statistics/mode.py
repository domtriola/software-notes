import math
from collections import defaultdict

def min_mode(nums, n):
    counts = defaultdict(int)
    for num in nums:
        counts[num] += 1

    max_count = max(counts.values())
    min_mode = math.inf
    for num, count in counts.items():
        if count == max_count and num < min_mode:
            min_mode = num

    return min_mode
