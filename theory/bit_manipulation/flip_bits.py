def flip_bits(n, size):
    """
    Flips all of the bits of a binary number of a specified size.
    :type n: int,>=0
    :type size: int,>=0
    """
    mask = (1 << size) - 1
    return n ^ mask
