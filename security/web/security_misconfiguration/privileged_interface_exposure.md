# Privileged Interface Exposure

Privileged interface exposure can happen when an application configuration is set that has unknown and unintended side-effects. For example, maybe there's a debug configuration that provides an admin tool for developers. Maybe a configuration like that is enabled by default for convience in Dev and Stage, but it wasn't changed when the Prod deploy went out.

## Red Team

Sometimes there may be noticeable debug logs or comments that hint at privileged interface access or locations. Look for parameters like `user_type` that, if tampered with, might provide access to resources not intended for public view/use.

## Blue Team

Make all default configuration options the secure state. Debug logs should be off by default and admin tools/interfaces should be disabled by default. Don't mention any privileged resources in public facing comments.
