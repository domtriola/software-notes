# Go Examples

The default go path is `$HOME/go`. If we didn't initialize this as a go module we would have to update the go path to be `$THIS_REPO_LOCATION/languages/go`. But go modules allow the project to be at a different path without modifying the default go path. The `go.mod` file was created with `go mod init github.com/software-notes/languages/go`.

To run examples:

* `go run path/to/program.go`
