def breadth_first_search(root, target):
    """
    Breadth first search for a binary tree.

    Expects a node to have 'value', 'left' and 'right' attributes
    """
    queue = [root]

    while len(queue) > 0:
        node = queue.pop(0)

        if node.value == target:
            return node

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

    return None
