# TLS Misconfigurations

## Red Team

If TLS verifications are skipped, then a man-in-the-middle attack is possible.

## Blue Team

As of 2020, you should be using TLS 1.2 or later (TLS 1.3 is supported in current versions of most major browsers).

Do not use insecure settings in a production application.

```go
// Good
cfg := &tls.Config{
  // InsecureSkipVerify: false, <- default is false
}

// Bad
cfg := &tls.Config{
  InsecureSkipVerify: true,
}
```
