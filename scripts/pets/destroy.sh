#!/bin/bash

ID="10"
curl "http://localhost:4741/pets/$ID" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json"

echo
