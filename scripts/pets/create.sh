curl --include --request POST http://localhost:4741/pets \
  --header "Content-Type: application/json" \
  --data '{
    "pet": {
      "name": "creating a curl script",
      "shots": "this is kind of fun",
      "notes": "here are the notes"
    }
  }'
