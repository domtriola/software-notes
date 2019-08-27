from theory.statistics.mean import mean

def standard_deviation(nums):
    n = len(nums)
    u = mean(nums)
    return (sum([(n - u) ** 2 for n in nums]) / n) ** 0.5
