# Session Fixation

Session fixation is when an attacker may gain access to a user's account by convincing them to log in to an application with a specific session key provided by the attacker.

## Red Team

```bash
# Attacker notices session key at login prompt
https://example.com/login?session_key=Ue8H3LgZoW98q1n

# Attacker sends a convincing email to one of the application's users prompting
# them to login with the session key above.

# User logs in at https://example.com/login?session_key=Ue8H3LgZoW98q1n which
# validates the session for the attacker. Now they can just visit that same
# URL and be authenticated as the User.
```

## Blue Team

Best practices:

* Don't assign session tokens before authentication
* Create new session tokens after authentication

Further mitigations (do not prevent the attack, but they make it harder to perform):

* Set session tokens in cookies, not GET or POST parameters
* Destroy old sessions on logout
* Accept only server generated session IDs
* Time-out sessions after X minutes
* Validate consistent info throughout session visits
  * IP addresses
    * This approach has some major convenience drawbacks for users that might have frequently changing IPs
    * Won't work if attacker and victim share an IP address
  * User-agent
    * Very good indicator of suspicious behavior, but also very easy to spoof

```go
// Good
// After authentication a new session is created and the old session will not
// work for authentication.
func HTTPHandler(w http.ResponseWriter, r *http.Request) {
  sess := getSession(r)

  authenticate(r, sess)
  createSession(w)
}

// Bad
// A session is created before authentication and used to authenticate.
func HTTPHandler(w http.ResponseWriter, r *http.Request) {
  sess := getSession(r)
  if sess == nil {
    sess := createSession(w)
  }

  authenticate(r, sess)
}
```
