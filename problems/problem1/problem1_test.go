package problem1

import "testing"

func TestSolve1(t *testing.T) {
	expected := 23
	actual := Solve(10)
	if actual != expected {
		t.Fatalf("Expected %d; received %d", expected, actual)
	}
}
