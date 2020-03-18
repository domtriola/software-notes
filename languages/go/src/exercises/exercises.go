package main

import "fmt"
import "strconv"

func main() {
	fmt.Printf("Running basic exercise tests...\n")

	fmt.Printf("-------------------------------\n")
	fmt.Printf("ForEach:\n")
	forEach([]string{"a", "b", "c"}, func(el string) {
		fmt.Println(el)
	})

	fmt.Printf("-------------------------------\n")
	fmt.Printf("Reduce:\n")
	sum := reduce([]int{1, 2, 3, 4}, func(accum int, num int) int {
		return accum + num
	}, 10)
	fmt.Printf("sum: %d\n", sum)
	product := reduce([]int{1, 2, 3, 4}, func(accum int, num int) int {
		return accum * num
	}, 1)
	fmt.Printf("product: %d\n", product)

	fmt.Printf("-------------------------------\n")
	fmt.Printf("Unique:\n")
	uniques := unique([]string{"1", "2", "1", "1", "2", "3", "4", "5", "3"})
	fmt.Printf("uniques: %v\n", uniques)

	fmt.Printf("-------------------------------\n")
	fmt.Printf("Flatten:\n")
	flat := flatten([]interface{}{0, []interface{}{1, 2, 3}, []interface{}{4, 5, []interface{}{6}}})
	fmt.Printf("flat: %v\n", flat)

	fmt.Printf("-------------------------------\n")
	fmt.Printf("FizzBuzz:\n")
	fizzBuzz(16)

	fmt.Printf("-------------------------------\n")
	fmt.Printf("Fibonacci:\n")
	fmt.Printf("%d\n", fibonacci(1))
	fmt.Printf("%d\n", fibonacci(2))
	fmt.Printf("%d\n", fibonacci(3))
	fmt.Printf("%d\n", fibonacci(4))
	fmt.Printf("%d\n", fibonacci(5))
	fmt.Printf("%d\n", fibonacci(6))

	fmt.Printf("-------------------------------\n")
	fmt.Printf("MergeSort:\n")
	sorted := mergeSort([]int{9, 4, 1, 3, 2, 6, 5, 8, 6, 4, 2, 1, 4})
	fmt.Printf("sorted: %v\n", sorted)
}

// Each
func forEach(arr []string, f func(el string)) {
	for _, el := range arr {
		f(el)
	}
}

// Reduce
func reduce(arr []int, f func(accum int, num int) int, seed int) int {
	result := seed

	for i := 0; i < len(arr); i++ {
		result = f(result, arr[i])
	}

	return result
}

// Unique
func unique(arr []string) []string {
	seen := map[string]bool{}
	result := []string{}

	for _, el := range arr {
		_, ok := seen[el]
		if !ok {
			result = append(result, el)
			seen[el] = true
		}
	}

	return result
}

// Flatten
func flatten(arr []interface{}) []int {
	result := []int{}

	for _, el := range arr {
		e, ok := el.(int)
		if !ok {
			n := flatten(el.([]interface{}))
			result = append(result, n...)
		} else {
			result = append(result, e)
		}
	}

	return result
}

// Fizz-Buzz
func fizzBuzz(max int) {
	result := make([]string, max)
	for i := 1; i <= max; i++ {
		switch {
		case i%15 == 0:
			result[i-1] = "FizzBuzz"
		case i%3 == 0:
			result[i-1] = "Fizz"
		case i%5 == 0:
			result[i-1] = "Buzz"
		default:
			result[i-1] = strconv.Itoa(i)
		}
	}

	for _, val := range result {
		fmt.Printf("%s\n", val)
	}
}

// Fibonacci
func fibonacci(num int) (fib int) {
	if num < 2 {
		return 1
	}

	return fibonacci(num-2) + fibonacci(num-1)
}

// Merge Sort
func mergeSort(arr []int) []int {
	if len(arr) < 2 {
		return arr
	}

	mid := len(arr) / 2
	left := arr[:mid]
	right := arr[mid:]

	return merge(mergeSort(left), mergeSort(right))
}

func merge(a []int, b []int) []int {
	result := []int{}
	ai := 0
	bi := 0

	for ai < len(a) && bi < len(b) {
		if a[ai] < b[bi] {
			result = append(result, a[ai])
			ai++
		} else {
			result = append(result, b[bi])
			bi++
		}
	}

	result = append(result, a[ai:]...)
	result = append(result, b[bi:]...)
	return result
}
