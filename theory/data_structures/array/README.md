# Array

Arrays are a data structure for holding an ordered collection of items.

Relative to linked lists, arrays are better at reads of a specified index and worse at insertion and deletion. Arrays might also require more unused space to be held.

* read: O(1)

## Static Arrays

Static arrays have a fixed size that is determined upon initialization.

* find: O(n)
* insert: O(1)
* delete: O(n)

## Dynamic Arrays

Dynamic arrays can resize themselves as elements are added or removed.

* find: O(n)
* insert: O(1)
* pop: O(1)
* push: O(1) (amortized)
* shift: O(n)
* unshift: O(n)

## Dynamic Array w/ Ring Buffer

Dynamic arrays don't have to shift all elements if they use a ring buffer. A ring buffer keeps track of the start of the array and allows the array elements to wrap. It adjusts itself accordingly as elements are added or removed from the beginning of the array.

* find: O(n)
* insert: O(1)
* pop: O(1)
* push: O(1) (amortized)
* shift: O(1)
* unshift: O(1) (amortized)

## Sorted Array

* find: O(log n) using binary search
* insert: O(n)
* delete: O(n)
