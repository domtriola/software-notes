# Contract: len(nums) == len(weights)
def weighted_mean(nums, weights):
    if len(nums) != len(weights):
        raise ValueError('The length of nums and weights must be the same')

    return sum([num * weight for num, weight in zip(nums, weights)]) / sum(weights)
