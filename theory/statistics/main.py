from theory.statistics.mean import mean
from theory.statistics.mode import min_mode
from theory.statistics.median import median
from theory.statistics.standard_deviation import standard_deviation
from theory.statistics.weighted_mean import weighted_mean
from theory.statistics.quartiles import quartiles
from theory.statistics.interquartile_range import interquartile_range

number_set = [1, 1, 2, 3, 5, 8, 13, 21]
number_set_weights = [1, 1, 1, 1, 1, 10, 10, 10]

print('mean: {}'.format(mean(number_set)))
print('min_mode: {}'.format(min_mode(number_set)))
print('median: {}'.format(median(number_set)))
print('standard_deviation: {}'.format(standard_deviation(number_set)))
print('weighted_mean: {}'.format(weighted_mean(number_set, number_set_weights)))
print('quartiles: {}'.format(quartiles(number_set)))
print('interquartile_range: {}'.format(interquartile_range(number_set)))
