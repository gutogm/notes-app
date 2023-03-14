API Documentation
--------------------------------------------

This documentation describes the RESTful API provided by this service.

### Notes

The following endpoints deal with notes.

#### List notes

Retrieves a list of all notes.

Request: `GET /notes`

Response:

```json
[
  {
    "title": "Note title",
    "content": "Note content"
  }
]
```

#### Add note

Adds a new note.

Request: `POST /notes`

Body:

```json
{
  "title": "Note title",
  "content": "Note content"
}
```

Response:

```json
{
  "title": "Note title",
  "content": "Note content"
}
```

#### Get note by ID

Retrieves a specific note by ID.

Request: `GET /notes/:id`

Path parameters:

*   `id` The unique identifier of the note

Response:

```json
{
  "_id": "<note-id>",
  "title": "Note title",
  "content": "Note content"
}
```

#### Update note by ID

Updates a specific note by ID.

Request: `PUT /notes/:id`

Path parameters:

*   `id` The unique identifier of the note

Body:

```json
{
  "title": "New note title",
  "content": "New note content"
}
```

Response:

```json
{
  "_id": "<note-id>",
  "title": "New note title",
  "content": "New note content"
}
```

#### Delete note by ID

Deletes a specific note by ID.

Request: `DELETE /notes/:id`

Path parameters:

*   `id` The unique identifier of the note

Response:

```json
{
  "message": "Note deleted successfully"
}
```