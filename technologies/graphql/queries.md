# Queries

## Basic Example

```
{
  cats {
    id
    name
    owner {
      name
    }
  }
}
```

## Arguments

```
{
  dog (id: 1) {
    name
  }
}
```

## Alias

```
{
  evilCat: cat(id: 2) {
    name
  }
}
```

## Fragment

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

## Mutation

```
mutation DogMutation {
  addDog(
    dog: {
      name: "puppy"
    }
  ) {
    id
    name
  }
}
```


http://localhost:4000/graphql?query=%7B%0A%20%20cats%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20birthDate%0A%20%20%20%20owner%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0A%23%20%20%20dog%20(id%3A%201)%20%7B%0A%23%20%20%20%20%20name%0A%23%20%20%20%7D%0A%20%20%0A%23%20%20%20dogs%20%7B%0A%23%20%20%20%20%20id%0A%23%20%20%20%20%20name%0A%23%20%20%20%7D%0A%23%20%7D%0A%0A%23%20%7B%0A%23%20%20%20evilCat%3A%20cat(id%3A%202)%20%7B%0A%23%20%20%20%20%20age%0A%23%20%20%20%20%20name%0A%23%20%20%20%7D%0A%23%20%7D%0A%0A%23%20%7B%0A%23%20%20%20evilCat%3A%20cat(id%3A2)%20%7B%0A%23%20%20%20%20%20...petFields%0A%23%20%20%20%7D%0A%23%20%20%20hungryCat%3A%20cat(id%3A1)%20%7B%0A%23%20%20%20%20%20id%0A%23%20%20%20%20%20...petFields%0A%23%20%20%20%7D%0A%23%20%7D%0A%0A%23%20fragment%20petFields%20on%20CatType%20%7B%0A%23%20%20%20name%0A%23%20%20%20age%0A%23%20%7D%0A%0A%23%20mutation%20DogMutation%20%7B%0A%23%20%20%20addDog(%0A%23%20%20%20%20%20dog%3A%20%7B%0A%23%20%20%20%20%20%20%20name%3A%20%22puppy%22%0A%23%20%20%20%20%20%7D%0A%23%20%20%20)%20%7B%0A%23%20%20%20%20%20id%0A%23%20%20%20%20%20name%0A%23%20%20%20%7D%0A%23%20%7D
