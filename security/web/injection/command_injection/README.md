# Command Injection

Command injection is when a user of an application can submit text values with code that will be executed on the backend server.

## Red Team

If commands are run with `cmd` or `sh` on the backend, then it allows a user to append instructions by separating each instruction with a semi-colon `;`.

```txt
https://example.com/calculation?input=foo;id
```

`id` displays user and group info for the caller of the process.

## Blue Team

```go
// Good
// The arg is only passed to `commandtorun` (care must still be taken to ensure
// that `commandtorun` itself doesn't allow for command injection)
out, _ := exec.Command("/usr/bin/commandtorun", inputArg).CombinedOutput()

// Bad
// arg can be any number of commands passed to `sh`
out, _ := exec.Command("sh", "echo.sh " + arg).CombinedOutput()
```
