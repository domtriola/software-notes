# Say you want to plant some veggies in your garden and you want the largest
# variety possible in the smallest area possible. You have some groups of plants
# that can be grouped together. Write an algorithm to choose which groups to
# plant

# Assume these groups have to be planted together
# A: corn, beans, squash
# B: beets, brussel sprouts
# C: beets, asparagus, lettuce
# D: borage, strawberries
# E: beans, corn, broccoli, celery

# And you can fit up to 3 groups in your garden
# Which should you choose to maximize diversity?

# beans, corn, broccoli, celery, beets, asparagus, lettuce, borage, strawberries

groups = {
    'a': set(['corn', 'beans', 'squash']),
    'b': set(['beets', 'brussel sprouts']),
    'c': set(['beets', 'asparagus', 'lettuce']),
    'd': set(['borage', 'strawberries']),
    'e': set(['beans', 'corn', 'broccoli', 'celery']),
}

def plan_garden(groups):
    chosen_groups = set()
    chosen_plants = set()
    for _ in range(3):
        group = find_max_unchosen(groups, chosen_groups, chosen_plants)
        chosen_groups.add(group)
        chosen_plants = chosen_plants | groups[group]
    return chosen_groups

def find_max_unchosen(groups, chosen_groups, chosen_plants):
    best_group = None
    new_plant_count = 0
    for key, plants in groups.items():
        if key in chosen_groups:
            continue
        new_plants = plants - chosen_plants
        if len(new_plants) > new_plant_count:
            best_group = key
            new_plant_count = len(new_plants)
    return best_group

print(plan_garden(groups))
# => {'e', 'c', 'd'}
