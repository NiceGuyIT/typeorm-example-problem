Run it a couple of times to add data.

- Users.`my_id` is unique.
- Photos.`my_id` is not unique.

The data is imported from another database that uses `my_id` as the primary key. This relationship needs to be
preserved although additional primary keys can be added to satisfy any requirements.

Here's what I get.

```text
[
  User {
    my_id: 'id1234',
    firstName: 'Timber',
    lastName: 'Saw',
    age: 25,
    id: 1
  },
  User {
    my_id: 'id1234',
    firstName: 'Timber',
    lastName: 'Saw',
    age: 25,
    id: 2
  }
]
```

Here's what I want.

```text
[
  User {
    my_id: 'id1234',
    firstName: 'Timber',
    lastName: 'Saw',
    age: 25,
    id: 1,
    photos: [{
      Photo {
        my_id: 'id1234',
        name: 'Photo of five',
        description: 'Description here',
        filename: 'some/file.png',
        views: 3,
        isPublished: false,
        id: 1
      },
      Photo {
        my_id: 'id1234',
        name: 'Photo of five',
        description: 'Description here',
        filename: 'some/file.png',
        views: 3,
        isPublished: false,
        id: 2
      }]
  },
  User {
    my_id: 'id1235',
    firstName: 'Timber',
    lastName: 'Saw',
    age: 25,
    id: 2
    photos: [{
      Photo {
        my_id: 'id1235',
        name: 'Photo of five',
        description: 'Description here',
        filename: 'some/file.png',
        views: 3,
        isPublished: false,
        id: 3
      },
      Photo {
        my_id: 'id1235',
        name: 'Photo of five',
        description: 'Description here',
        filename: 'some/file.png',
        views: 3,
        isPublished: false,
        id: 4
      }]
  }
]
```