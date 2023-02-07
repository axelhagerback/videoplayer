# Endpoints

[GET /video](#load-videos)

[GET /video/:id](#show-video)

[POST /video](#add-video-to-collection)

[Error Objects](#error-objects)

## **Load videos**

GET /video

**Returns**

Array of videos

- id: String
- link: String

**Example return**

```JSON
{
    "video": [
        {
            "id": "507f1f77bcf86cd799439011",
            "link": "exampleVideo.mp4"
        },
        {
            "id": "507f1f77bcf86cd798176105",
            "link": "amazingVideo.mp4"
        }
    ]

}

```

**Status Codes**

- 200 OK

* 500 Server Error

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

## Error Objects

**Returns**

- statusCode: int
- message: String

**Example Return**

```JSON
{
    "statusCode": 400,
    "devMessage": "The input value is not accepted",
    "displayMessage": "Please provide a working link to a video"
}

```
