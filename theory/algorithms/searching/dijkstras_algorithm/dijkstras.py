import math

# Rough draft dijkstras algorithm implementation

def fastest_path(graph, start, fin):
    costs = _initialize_costs(graph, start, fin)
    processed = []
    node = _lowest_cost_node(costs, processed)
    while node is not None:
        node_cost = costs[node]['distance']
        for edge in graph[node]:
            target, weight = edge
            next_cost = node_cost + weight
            if next_cost < costs[target]['distance']:
                costs[target]['distance'] = next_cost
                costs[target]['parent'] = node
        processed.append(node)
        node = _lowest_cost_node(costs, processed)
    return _get_path(costs, start, fin)

def _initialize_costs(graph, start, fin):
    costs = {
        fin: {
            'parent': None,
            'distance': math.inf
        }
    }
    for node, weight in graph[start]:
        costs[node] = {
            'parent': start,
            'distance': weight
        }
    return costs

# Better to use a heap to maintain the lowest cost node
def _lowest_cost_node(costs, processed):
    min_cost = math.inf
    min_node = None
    for node, data in costs.items():
        if data['distance'] < min_cost and node not in processed:
            min_cost = data['distance']
            min_node = node
    return min_node

def _get_path(costs, start, fin):
    result = []
    node = fin
    while node != start:
        result.append(node)
        node = costs[node]['parent']
    result.append(start)
    return ' -> '.join(reversed(result))

graph = {
    'A': [('B', 6), ('C', 2)],
    'B': [('D', 1)],
    'C': [('B', 3), ('D', 5)],
    'D': [],
}

#       B
#    6/ |  \1
#  A   3|    D
#   2\  |  /5
#       C

print(fastest_path(graph, 'A', 'D'))
# A -> C -> B -> D
