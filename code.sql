{
  "type": "statement",
  "variant": "list",
  "statement": [
    {
      "type": "statement",
      "variant": "select",
      "result": [
        {
          "type": "identifier",
          "variant": "star",
          "name": "*"
        }
      ],
      "from": {
        "type": "identifier",
        "variant": "table",
        "name": "user"
      },
      "where": [
        {
          "type": "expression",
          "format": "binary",
          "variant": "operation",
          "operation": "=",
          "left": {
            "type": "identifier",
            "variant": "column",
            "name": "name"
          },
          "right": {
            "type": "identifier",
            "variant": "column",
            "name": "mehran"
          }
        }
      ]
    }
  ]
}