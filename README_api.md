## GraphQL query for client's article page

```
query Posts($after: String!) {
  posts(after: $after) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      endCursor
      startCursor
    }
    nodes {
      id
      title
      uri
    }
  }
}
```

##query variables
```
{
  "after": "YXJyYXljb25uZWN0aW9uOjM3NzEy"
}
```