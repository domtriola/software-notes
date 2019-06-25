The default go path is `$HOME/go`, but the folder structure here is set up such that the GOPATH should be `$THIS_REPO_LOCATION/languages/go`. I did this to consolidate all Go notes for this repo into one location, but typically you would have separate repos for each package and manage dependencies within each package. See https://github.com/Masterminds/glide#how-it-works for project structure example.

To run examples:
* `export $GOPATH=/<repolocation>/languages/go`
* `glide install`
* `go run path/to/program.go`
