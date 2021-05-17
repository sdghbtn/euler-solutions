package problem7

import "testing"

func TestSolve7(t *testing.T) {
	expected := 13
	actual := Solve(6)
	if actual != expected {
		t.Fatalf("Expected %d; received %d", expected, actual)
	}
}
