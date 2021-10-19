package problem3

import "testing"

func TestSolve3(t *testing.T) {
	expected := 29
	actual := Solve(13195)
	if actual != expected {
		t.Fatalf("Expected %d; received %d", expected, actual)
	}
}
