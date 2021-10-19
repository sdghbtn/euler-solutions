package problem3

import "math"

func Solve(x int) int {
	c := x
	prime := 2

	// divide original number by 2 as many times as possible to eliminate
	// prime number 2 and all evens
	for c%2 == 0 {
		c /= 2
	}

	// all occurrences of 2 are eliminated; start with the next prime, 3
	// limit is sqrt of x because that is the largest possible factor
	// iterate by 2 to traverse odd numbers since we have eliminated all evens
	for i := 3; i <= int(math.Sqrt(float64(x))); i += 2 {
		for c%i == 0 {
			if i > prime {
				prime = i
			}
			c /= i
		}
	}

	if c > prime {
		prime = c
	}

	return prime
}
