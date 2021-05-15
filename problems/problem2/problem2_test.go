package problem2

import "testing"

func TestSolve2(t *testing.T) {
	expected := 44
	actual := Solve(89)
	if actual != expected {
		t.Fatalf("Expected %d; received %d", expected, actual)
	}
}
