# Notes from https://effectivepython.com/

class ToDictMixin(object):
    def to_dict(self):
        return self._traverse_dict(self.__dict__)

    def _traverse_dict(self, instance_dict):
        output = {}
        for key, value in instance_dict.items():
            output[key] = self._traverse(key, value)
        return output

    def _traverse(self, key, value):
        if isinstance(value, ToDictMixin):
            return value.to_dict()
        elif isinstance(value, dict):
            return self._traverse_dict(value)
        elif isinstance(value, list):
            return [self._traverse(key, i) for i in value]
        return value

class PrettifyMixin(object):
    """
    Print the attributes of a class in a human-readible format
    Requires that the class has to_dict implemented
    """
    def to_dict(self):
        raise NotImplementedError

    def pretty_print(self):
        instance_dict = self.to_dict()
        self._print_dict(instance_dict)

    def _print_dict(self, instance_dict, tab_level=None, output=None):
        if tab_level is None:
            tab_level = 0
        if output is None:
            output = ''
        spaces = ' ' * tab_level * 2

        print(spaces + '{')
        for key, value in instance_dict.items():
            self._print_key_value(key, value, tab_level=tab_level + 1)
        print(spaces + '}')

    def _print_key_value(self, key, value, tab_level):
        spaces = ' ' * tab_level * 2
        if isinstance(value, dict):
            print(spaces + '{key}:'.format(key=key))
            self._print_dict(value, tab_level=tab_level + 1)
        else:
            if value is None:
                value = 'None'
            print(spaces + '{key}: {value}'.format(key=key, value=value))

class BinaryTreeNode(ToDictMixin, PrettifyMixin):
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

tree = BinaryTreeNode(
    1,
    left=BinaryTreeNode(2, right=BinaryTreeNode(3)),
    right=BinaryTreeNode(4, left=BinaryTreeNode(5), right=BinaryTreeNode(6))
)

print(tree.to_dict())
tree.pretty_print()
