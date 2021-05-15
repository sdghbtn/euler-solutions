package problem2

func Solve(x int) int {
	y := 2
	z := 3
	sum := 2
	for z < x {
		if z%2 == 0 {
			sum += z
		}
		y, z = z, y+z
	}
	return sum
}
