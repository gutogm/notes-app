Notes API
=========

This is the backend server for a notes app.

Installation
------------

First, install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/).

Then clone repository with:

```bash
git clone https://github.com/gutogm/notes-app.git
cd notes-app/note-api
```

Install dependencies and start the server:

```bash
npm install
npm run start
```

The API will be available at `http://localhost:3000`.

Endpoints
---------

### GET /notes

Get all notes.

Response:

```json
[
  {
    "_id": "5fc291cc306247c797afb2af",
    "title": "Test note",
    "content": "Content of a test note",
  }
]
```

### GET /notes/:id

Get a specific note.

Response:

```json
{
  "_id": "5fc291cc306247c797afb2af",
  "title": "Test note",
  "content": "Content of a test note",
}
```

### POST /notes

Create a new note.

Request:

```json
{
  "title": "New note",
  "content": "Content of the new note"
}
```

Response:

```json
{
  "_id": "5fc291cc306247c797afb2af",
  "title": "New note",
  "content": "Content of the new note",
}
```

### PUT /notes/:id

Update a specific note.

Request:

```json
{
  "title": "Updated note",
  "content": "Content of the updated note"
}
```

Response:

```json
{
  "_id": "5fc291cc306247c797afb2af",
  "title": "Updated note",
  "content": "Content of the updated note",
}
```

### DELETE /notes/:id

Delete a specific note.

Response:

```json
{
  "_id": "5fc291cc306247c797afb2af",
  "title": "Test note",
  "content": "Content of a test note",
}
```