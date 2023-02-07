# Endpoints

[GET /video/:id](#show-video)

[POST /video](#add-video-to-collection)

## **Show video**

GET /video/:id

**Returns**

- id: String
- link: String

**Example return**

```JSON
{
    "id": "507f1f77bcf86cd799439011",
    "link": "exampleVideo.mp4"
}
```

**Status Codes**

- 200 OK
- 404 Not Found
- 500 Server Error

## Add video to collection

POST /video

**Body**

- link: String

```JSON
{
    "link": "exampleVide.mp4"
}
```

**Returns**

- id: String

**Example return**

```JSON
{
    "id": "507f1f77bcf86cd799439011"
}
```

**Status Codes**

- 201 Created
- 400 Bad Request
- 500 Server Error
