def depth_first_search(root, target):
    """
    Depth first search for a binary tree.

    Expects a node to have 'value', 'left' and 'right' attributes
    The left and right attributes are either nodes or None
    """
    if not root:
        return None

    if root.value == target:
        return root

    for node in [root.left, root.right]:
        found = depth_first_search(node, target)

        if found:
            return found

    return None
