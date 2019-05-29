# GraphQL

## What

GraphQL is a query language that allows you to assemble API queries using a defined type system.

## Why

### Less endpoints

REST APIs will require many endpoints to fetch data for complex use-cases. With GraphQL, you query one endpoint, and let the GraphQL service handle all of the data conglomeration.

### More concise

GraphQL let's you ask for what you want and it returns what you asked for (and only what you asked for).

### Better versioning

REST endpoints often use versions as part of the API path which adds to the maintenance overhead as more versions are released. With GraphQL, since you can ask for specifically what you want, you don't have to worry about backwards compatibility when adding fields, and GraphQL has built in features for deprecating old fields.

## How

See the rest of this directory for an implementaion example.

To start up app:

```bash
npm install
npm start

# To kill processes when done:
npm run halt
```
