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
