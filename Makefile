MAIN=main.go

solve:
	go run $(MAIN) solve $(problem)

gen-problem:
	go run $(MAIN) generate-problem $(problem)

gen-help:
	go run $(MAIN) generate-help $(name)

test:
	go test ./...