# Horizontal Privilege Escalation

Horizontal privilege escalation is when a user can assume the role of other users with the same level of privileged access.

## Red Team

If you notice something like a user ID being used to retrieve resources try changing the ID to see if you can view resources as another user.

```bash
curl https://example.com/user_1000/profile
curl https://example.com/user_1001/profile
# etc.
```

## Blue Team

Valid authentication techniques are numerous and vary greatly, but the important part is to ensure that every single request (that needs authentication) is authenticated.
