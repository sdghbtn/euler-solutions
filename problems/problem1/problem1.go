package problem1

func Solve(x int) int {
	var multiplesOfThreeOrFive []int
	for i := 0; i < x; i++ {
		if i%3 == 0 || i%5 == 0 {
			multiplesOfThreeOrFive = append(multiplesOfThreeOrFive, i)
		}
	}
	var sum int
	for _, y := range multiplesOfThreeOrFive {
		sum += y
	}
	return sum
}
