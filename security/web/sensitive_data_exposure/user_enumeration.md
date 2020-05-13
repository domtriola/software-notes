# User Enumeration

User enumeration is when an application validates for unauthenticated users whether or not a queried user exists.

This can be obvious, like a clear message stating so, or more subtle, like different response times for existing vs non-existing users.

## Red Team

One common example of user enumeration is when a site explains that an email address or user name does or doesn't exist. Try resetting your password as any email address and see how it responds.

Another approach is to check the response times for various login attempts. Sometimes applications will see if a user exists before trying to hash the password. If the user doesn't exist and the app returns before hashing the password it will have a much faster response time than if the user did exist.

## Blue Team

Always send ambiguous responses to unauthenticated users. For example, on a password reset prompt, rather than saying "Email not found", or "Email sent", say something like "An email will be sent if the email address exists within our system".

Ensure the response time is the same for login attempts by existing an non-existing users.
