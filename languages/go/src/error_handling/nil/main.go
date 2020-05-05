package main

import (
	"errors"
	"fmt"
)

// Return useful values instead of nil whenever possible

func concat(lists ...[]int) (result []int, err error) {
	if len(lists) == 0 {
		// NOTE: Returning an empty slice, rather than nil
		return []int{}, errors.New("Not enough lists supplied to concat")
	}

	for _, list := range lists {
		result = append(result, list...)
	}

	return result, nil
}

func main() {
	expectedInput := [][]int{[]int{1, 2, 3}, []int{4, 5, 6}}
	emptyInput := [][]int{}

	normalResult, _ := concat(expectedInput...)
	fmt.Printf("concated lists: %v\n", normalResult)

	// NOTE: We don't even have to care about the error if we know we'll always get
	// a valid output. Now we can safely try to iterate over the output without
	// worrying about crashing, even if there was an error returned by concat.
	// (In practice this is not recommended and we should still care about the
	// error to avoid unexpected bugs)
	nothingConcated, _ := concat(emptyInput...)
	fmt.Printf("concated lists: %v\n", nothingConcated)
}
