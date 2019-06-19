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
