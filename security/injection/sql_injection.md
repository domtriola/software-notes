# SQL Injection

[tldr](https://xkcd.com/327/)

SQL injection is when a user of an application can submit text values with SQL code that will be executed on the backend server.

## Red Team

SQL injection can be attempted anywhere that input data might be used in a database query. A common place to try it is in form data.

```sql
-- Example query on backend
SELECT * FROM users WHERE email = 'user@example.com' and password_hash = 'abc123';

-- With injected string for user email:
-- "admin@example.com'; -- "
SELECT * FROM users WHERE email = 'admin@example.com'; -- ' and password_hash = 'abc123';
```

An easy way to test the waters is to add a single `'` to your input string. If SQL injection is possible adding an apostrophe will usually cause a misformatted SQL statement, which will probably throw a server error.

## Blue Team

SQL injection can be prevented by sanitizing all data that comes from outside (and inside) your application or by using [prepared statements](https://en.wikipedia.org/wiki/Prepared_statement). Prepared statements usually look something like:

```go
// Good
// using a prepared statement
db.Query("SELECT * FROM users WHERE email = ? and password_hash = ?", email, hash)

// Bad
// email and/or hash can be used to create arbitrary SQL statements
db.Query("SELECT * FROM users WHERE email = " + email + "and password_hash = " + hash)
```
