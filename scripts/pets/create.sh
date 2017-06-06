curl --include --request POST http://localhost:4741/pets \
  --header "Content-Type: application/json" \
  --data '{
    "pet": {
      "name": "creating a curl script",
      "shots": "this is kind of fun",
      "dob": "again"
      "species": "again"
      "spayed": "again"
      "gender": "again"
      "breed": "again"
      "color": "again"
      "purchased": "again"
      "microchip": "again"
      "weight": "again"
      "vet": "again"
      "vetphone": "again"
      "notes": "here are the notes"
    }
  }'
