package problem1

func Solve(x int) int {
	sum := 0
	for i := 3; i < x; i++ {
		if i%3 == 0 || i%5 == 0 {
			sum += i
		}
	}
	return sum
}
