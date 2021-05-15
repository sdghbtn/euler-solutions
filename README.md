# euler-solutions
Solutions to Project Euler problems.

These problems were originally solved in TypeScript. That work has been preserved on the `lang/typescript` branch.

I am now solving these problems in Go. The aim here is to write idomatic Go code and not necessarily to pursue the most mathematically elegant solution. Because of the nature of project Euler problems, I am sure I will end up needing to write code that is a bit more obscure as the problems become more mathematically challenging.

Because my math skills are wanting, my initial solutions will be naive approaches and will be followed up with mathematically appropriate solutions where I am able or learn of better approaches.

## Generate a Problem Template
`make gen-problem problem=<problem number>`

Problem templates can be found at `templating/problem`. This command will generate a new template in `problems/problem<problem number>` with:
- a problem file (for building the necessary function for the problem)
- a solution file (for running and measuring the solution against the provided requirements from Project Euler)
- a test file (for running the provided test inputs from Project Euler)

Additionally, the contents of the problem instructions will be fetched from the Project Euler website and put into a markdown file in this directory.

## Generate a Helper Function
`make gen-help name=<help name>`

Help templates can be found at `templating/help`. This command will generate a new template in `helps/<help name>` with:
- a help file (for building the necessary help function)

## Running a solution
`make solve problem=<problem number>`

In order to run a solution, the problem solution func must be added to `problemmap` in `problems/problems.go`.

This command will run the solution for the problem and output the solution as well as the function execution time to the console.