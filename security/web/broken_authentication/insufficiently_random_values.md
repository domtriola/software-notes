# Insufficiently Random Values

Insufficiently random values can create security vulnerabilities if they are used in places where it is assumed an attacker would not be able to predict the next value.

## Red Team

Gather many values from an application and see if you can extrapolate a pattern. E.g. the easiest pattern to recognize would be if each new value was simply the last value + 1.

## Blue Team

Use only cryptographically secure random number generators where guessability is a security concern.

```go
// Good
import "crypto/rand"

// Bad
import "math/rand"
```
