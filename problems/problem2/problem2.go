package problem2

func Solve(x int) int {
	seq := []int{1, 2}
	var y int
	sum := 2
	for y <= x {
		yy := seq[len(seq)-2:]
		y = yy[0] + yy[1]
		if y > x {
			break
		}
		seq = append(seq, y)
		if y%2 == 0 {
			sum += y
		}
	}
	return sum
}
