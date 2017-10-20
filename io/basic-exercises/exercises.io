# Each - metaprogramming
List myEach := method(_method,
  for(i, 0, size - 1, _method(at(i)))
)

# We can also namespace our own Enum methods
Enum := Object clone

# Reduce
Enum reduce := method(_list, _method,
  result := _list at(0)
  for(i, 1, _list size - 1, result := _method(result, _list at(i)))
  result
)

# Unique
Enum unique := method(_list,
  seen := list()
  result := list()

  _list foreach(i, el,
    (seen contains(el)) ifFalse(
      result append(el)
      seen append(el)
    )
  )

  result
)

# Flatten
List flatten := method(
  result := list()

  foreach(i, el,
    (el type == List type) ifTrue(
      result := result union(el flatten)
    ) ifFalse (
      result append(el)
    )
  )

  result
)

fizzBuzz := method(max,
  result := list()
  for(num, 1, max,
    if(num % 15 == 0) then(
      result append("FizzBuzz")
    ) elseif(num % 3 == 0) then(
      result append("Fizz")
    ) elseif(num % 5 == 0) then(
      result append("Buzz")
    ) else(
      result append(num)
    )
  )

  result
)


# Fibonacci
fibonacci := method(n,
  result := list(1, 1)

  if(n < 3, return result slice(2 - n))

  for(i, 2, n - 1,
    result append(result at(i - 1) + result at(i - 2))
  )

  result
)


# Merge Sort
mergeSort := method(_list,
  (_list size < 2) ifTrue(return _list)

  mid := (_list size / 2) floor

  left := _list slice(0, mid)
  right := _list slice(mid, _list size)

  merge(mergeSort(left), mergeSort(right))
)

merge := method(left, right,
  result := list()

  while(left isEmpty not and right isEmpty not,
    (left first < right first) ifTrue(
      result append(left removeAt(0))
    ) ifFalse (
      result append(right removeAt(0))
    )
  )

  result union(left union(right))
)
