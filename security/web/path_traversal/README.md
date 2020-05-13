# Path (Directory) Traversal

Path traversal is possible when an application does not have restrictions on the path of files it serves.

## Red Team

```txt
https://example.com/file=../etc/sensitive_file
```

## Blue Team

To prevent this vulnerability the requested filepath should be canonicalized and validated as an authorized filepath.

```go
// Good
workingDir, _ := os.Getwd()
appDir := workingDir
path := filepath.Clean(workingDir + "/" + filename)

// validate that path is in the whitelisted directory
if filepath.Dir(path) != appDir {
  log.Fatalln("Not authorized")
}

data, _ := ioutil.ReadFile(path)


// Bad
workingDir, _ := os.Getwd()
path := filepath.Clean(workingDir + "/" + filename)
data, _ := ioutil.ReadFile(path)
```

For full example:

```bash
cd <code_path>/software-notes/security/web/path_traversal/app
go run path_traversal.go

# Bad...
# Hello!

# password="Whoops!"

# ----------------------------
# Good...
# Hello!

# 2020/05/07 17:12:51 Not authorized
# exit status 1
```
