# Queries

Example query:
```
{
  cats {
    id
    name
    owner {
      name
    }
  }

  dog (id: 1) {
    name
  }
}
```

Alias
```
evilCat: cat(id: 2) {
  name
}
```

Fragment
```
{
  evilCat: cat(id:2) {
    ...petFields
  }
  hungryCat: cat(id:1) {
    ...petFields
  }
}

fragment petFields on CatType {
  name
  age
}
```
