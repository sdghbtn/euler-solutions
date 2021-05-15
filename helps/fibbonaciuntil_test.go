package helps

import (
	"reflect"
	"testing"
)

func TestFibbonaciUntil(t *testing.T) {
	expected := []int{1, 2, 3, 5, 8, 13, 21, 34, 55, 89}
	actual := FibbonaciUntil(90)
	if !reflect.DeepEqual(expected, actual) {
		t.Fatalf("Expected %d; received %d", expected, actual)
	}
}
