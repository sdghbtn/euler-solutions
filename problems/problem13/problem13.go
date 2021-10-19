package problem13

import (
	"bufio"
	"fmt"
	"math/big"
	"os"
	"strconv"
)

func Solve(x int) int {
	file, err := os.Open("/Users/shodgesio/sandbox/personal/learning/euler-solutions/problems/problem13/number.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	sum := new(big.Int)
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		n, ok := new(big.Int).SetString(scanner.Text(), 0)
		if !ok {
			panic("not ok")
		}
		sum = sum.Add(sum, n)
	}

	if err := scanner.Err(); err != nil {
		panic(err)
	}

	firstTen, err := strconv.Atoi(sum.Text(10)[:10])
	if err != nil {
		panic(err)
	}
	fmt.Println(firstTen)

	result := 0
	remainder := 0
	for firstTen != 0 {
		remainder = firstTen % 10
		result += remainder
		firstTen = firstTen / 10
	}
	fmt.Println(result)
	return 1
}