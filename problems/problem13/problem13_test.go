package problem13

import "testing"

func TestSolve13(t *testing.T) {
    expected := 1
    actual := Solve(1)
    if actual != expected {
        t.Fatalf("Expected %d; received %d", expected, actual)
    }
}