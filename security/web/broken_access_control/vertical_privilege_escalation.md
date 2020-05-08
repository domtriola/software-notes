# Vertical Privilege Escalation

Vertical privilege escalation is when a user can assume the role of other users with a greater level of privileged access.

## Red Team

Try manipulating any values that hint at access privilege.

```bash
# If you notice:
curl https://example.com/user/profile/123456
# Try:
curl https://example.com/admin/profile/123456
```

## Blue Team

Valid authorization techniques are numerous and vary greatly, but the important part is to ensure that every single request (that needs authorization) is authorized.
