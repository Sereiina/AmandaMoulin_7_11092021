# Specs

Specs de l'API

| verb   | endpoint         |               body                | response                   |
| ------ | ---------------- | :-------------------------------: | -------------------------- |
| POST   | /api/auth/signup | {email: String, password: String} | {message : String}         |
| POST   | /api/auth/login  | {email: String, password: String} | {token : String}           |
| GET    | /api/profile     |                 -                 | {userProfile: JSON}        |
| DELETE | /api/profile     |                 -                 | {message : String}         |
| GET    | /api/text        |                 -                 | {posts: Array[TEXT_POST]}  |
| GET    | /api/text:id     |                 -                 | {post: TEXT_POST}          |
| POST   | /api/text        |         {post: TEXT_POST}         | {post: TEXT_POST}          |
| PUT    | /api/text        |    {post: TEXT_POST - partial}    | {post: TEXT_POST}          |
| DELETE | /api/text        |                 -                 | {message: String}          |
| GET    | /api/media       |                 -                 | {posts: Array[MEDIA_POST]} |
| GET    | /api/media:id    |                 -                 | {post: MEDIA_POST}         |
| POST   | /api/media       |        {post: MEDIA_POST}         | {post: MEDIA_POST}         |
| PUT    | /api/media       |   {post: MEDIA_POST - partial}    | {post: MEDIA_POST}         |
| DELETE | /api/media       |                 -                 | {message: String}          |
| GET    | api/             |
