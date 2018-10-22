# Merge Sort

Recursively separates array in half until all pieces are single or zero element arrays, then merges the arrays into sorted arrays.

Stable time complexity. Space complexity is linear, because it constructs one branch at a time (behaving like a DFS), so it only takes up the space of one branch. Stable ordering.

* Time: O(n log n)
* Space: O(n)
