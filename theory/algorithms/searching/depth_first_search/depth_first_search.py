def depth_first_search(root, target):
    """
    Depth first search for a binary tree.

    Expects a node to have 'value', 'left' and 'right' attributes
    The left and right attributes are either nodes or None
    """
    if root and root.value == target:
        return root

    queue = []
    if root.left:
        queue.append(root.left)
    if root.right:
        queue.append(root.right)

    for node in queue:
        found_node = depth_first_search(node, target)

        if found_node and found_node.value == target:
            return found_node

    return None
