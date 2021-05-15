package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/shodgesio/euler-solutions/problems"
	"github.com/shodgesio/euler-solutions/templating"
)

func main() {
	if len(os.Args) < 3 {
		fmt.Println("No argument provided for command.")
		os.Exit(1)
	}
	switch os.Args[1] {
	case "solve":
		x := parseProblemNumber()
		problems.Run(x)
		return
	case "generate-problem":
		x := parseProblemNumber()
		templating.GenerateProblemTemplate(x)
		return
	case "generate-help":
		helpname := os.Args[2]
		templating.GenerateHelpTemplate(helpname)
		return
	}
}

func parseProblemNumber() int {
	problem := os.Args[2]
	x, err := strconv.Atoi(problem)
	if err != nil {
		fmt.Println("Enter a valid problem number to run the solution.")
		os.Exit(1)
	}
	return x
}
