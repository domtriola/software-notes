# Quick Sort

Selects a pivot, shuffles items to left and right of pivot according to sort, then recursively sorts the left and right sections.

Fast for best and average case time complexity, but slow for worst case. Choose pivot randomly to mitigate against pathological datasets. Unstable ordering if done in place.

**Best and Average Case**
* Time: O(n log n)
* Space: O(log n)

**Worst Case**
* Time: O(n^2)
* Space: O(n)
