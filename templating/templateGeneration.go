package templating

import (
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
)

func GenerateProblemTemplate(problem int) {
	destdir := getProblemDestDir(problem)
	genDir(destdir)
	genFile(genContents("problem", problem), destdir, fmt.Sprintf("problem%d.go", problem))
	genFile(genContents("solve", problem), destdir, fmt.Sprintf("problem%d_solve.go", problem))
	genFile(genContents("test", problem), destdir, fmt.Sprintf("problem%d_test.go", problem))

	problemInstructions := getProblemInstructions(problem)
	instructionTemplateReplacement := genContents("instruction.md", problem)
	instructionContents := append(instructionTemplateReplacement, problemInstructions[:]...)
	genFile(instructionContents, destdir, fmt.Sprintf("problem%d.md", problem))
}

func GenerateHelpTemplate(helpname string) {
	destdir := getHelpDestDir(helpname)

	genFile(genHelpContents(helpname), destdir, fmt.Sprintf("%s.go", strings.ToLower(helpname)))
}

func getProblemDestDir(problem int) string {
	curdir, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	return filepath.Join(curdir, "problems", fmt.Sprintf("problem%d", problem))
}

func getHelpDestDir(helpname string) string {
	curdir, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	return filepath.Join(curdir, "helps")
}

func genDir(destdir string) {
	_, err := os.Stat(destdir)
	if !errors.Is(err, os.ErrNotExist) {
		fmt.Println("Solution for provided problem number already exists.")
		os.Exit(1)
	}
	fmt.Printf("\nNew directory: %s", destdir)
	err = os.MkdirAll(destdir, 0700)
	if err != nil {
		panic(err)
	}
}

func genFile(contents []byte, destdir string, fname string) {
	destFilePath := filepath.Join(destdir, fname)
	file, err := os.Create(destFilePath)
	if err != nil {
		panic(err)
	}
	file.Write(contents)
	fmt.Printf("\nNew file: \"%s\"", destFilePath)
}

func getTemplateContents(fname string) ([]byte, error) {
	curdir, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	contents, err := os.ReadFile(filepath.Join(curdir, "templating/problem", fname))
	if err != nil {
		return nil, err
	}
	return contents, nil
}

func genContents(fname string, problem int) []byte {
	contents, err := getTemplateContents(fname)
	if err != nil {
		panic(err)
	}

	p := strconv.Itoa(problem)

	r := strings.NewReplacer("{{problemnumber}}", p)
	return []byte(r.Replace(string(contents)))
}

func getHelpTemplateContents(fname string) ([]byte, error) {
	curdir, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	contents, err := os.ReadFile(filepath.Join(curdir, "templating/help", fname))
	if err != nil {
		return nil, err
	}
	return contents, nil
}

func genHelpContents(helpname string) []byte {
	contents, err := getHelpTemplateContents("help")
	if err != nil {
		panic(err)
	}

	r := strings.NewReplacer("{{helpname}}", helpname)
	return []byte(r.Replace(string(contents)))
}

func getProblemInstructions(problem int) []byte {
	res, err := http.Get(fmt.Sprintf("https://projecteuler.net/minimal=%d", problem))
	if err != nil {
		panic(err)
	}
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	return body
}
