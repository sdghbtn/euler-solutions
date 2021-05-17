package problem7

func Solve(x int) int {
	var res int
	src := make(chan int)
	go generate(src)
	for i := 0; i < x; i++ {
		prime := <-src
		res = prime
		dst := make(chan int)
		go filter(src, dst, prime)
		src = dst
	}
	return res
}

func generate(ch chan<- int) {
	for i := 2; ; i++ {
		ch <- i
	}
}

func filter(src <-chan int, dst chan<- int, prime int) {
	for i := range src {
		if i%prime != 0 {
			dst <- i
		}
	}
}
