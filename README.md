# Task API

A simple API for managing tasks.

**Postman** workspace: [link to postman requests](https://nathanael-7604382.postman.co/workspace/Nathanael's-Workspace~5b4242d0-11c7-4277-809b-10ca424c98a5/collection/45838328-36f9e20f-ebba-4d9f-9a04-61e39f485e61?action=share&creator=45838328)

## Endpoints

[Live site](https://task-api-ts.onrender.com/)

- `GET /tasks` - List all tasks : https://task-api-ts.onrender.com/tasks
- `GET /tasks/:id` - Get a specific task : https://task-api-ts.onrender.com/tasks/:id
- `POST /tasks` - Create a new task : https://task-api-ts.onrender.com/tasks
- `PUT /tasks/:id` - Update a task : https://task-api-ts.onrender.com/tasks/:id
- `DELETE /tasks/:id` - Delete a task : https://task-api-ts.onrender.com/:id

## Usage

Send HTTP requests to the endpoints above. All responses are in JSON format.

## Error Handling

- New task input cannot be empty
- All update, delete and get specific task requests, require a specific id
- Already deleted tasks will be indicated
