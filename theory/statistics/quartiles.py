from theory.statistics.median import median

def quartiles(nums):
    nums = sorted(nums)
    mid = len(nums) // 2
    left = nums[0:mid]
    if len(nums) % 2 == 0:
        right = nums[mid:]
    else:
        right = nums[mid + 1:]

    return (median(left), median(nums), median(right))
