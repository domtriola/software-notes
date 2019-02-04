def median(nums):
    if len(nums) == 0:
        return nums[0]
    mid = len(nums) // 2
    if len(nums) % 2 == 0:
        return (nums[mid - 1] + nums[mid]) / 2
    else:
        return nums[mid]

def interquartile_range(nums):
    nums = sorted(nums)
    mid = len(nums) // 2
    left = nums[0:mid]
    if len(nums) % 2 == 0:
        right = nums[mid:]
    else:
        right = nums[mid + 1:]

    return median(right) - median(left)
