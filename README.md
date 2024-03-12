## How to start

```bash
# Run both services
$ npm run start:dev api
$ npm run start:dev todo
```

## How to test
```bash
1. Open the postman app
2. Import this cURL to create new todo task 
  curl --location 'localhost:3000' \
  --header 'Content-Type: application/json' \
  --data '{
      "description": "Ngoc Dien",
      "isDone": false
  }'
3. Import this cURL to get todo list
  curl --location 'localhost:3000'

```