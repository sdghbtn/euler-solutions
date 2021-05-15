package helps

func FibbonaciUntil(x int) []int {
	seq := []int{1, 2}
	var y int
	for y <= x {
		yy := seq[len(seq)-2:]
		y = yy[0] + yy[1]
		if y > x {
			break
		}
		seq = append(seq, y)
	}
	return seq
}
