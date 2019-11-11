# lab3-api

## Table of Contents

(WIP)
- [Getting started](#getting-started)
		- [Installation](#installation)
- [Endpoints](#endpoints-definition)
	- [User](#user)
		- [Register](#httplocalhost5000apiauthregister-post)
		- [Login](#httplocalhost5000apiauthlogin-post)

## Getting started

### Installation

Run the following commands:

```bash
$ git clone https://github.com/laboratorio-iii/lab3-api.git
$ npm install
```

### Developing

```bash
$ npm run dev (Api will running in localhost:5000)
$ sudo mongod (MongoDB connnection)(For Linux)
```
## Endpoints

### User

#### http://localhost:5000/api/auth/register (POST)

Creates a user.

**REQUEST**  
Headers: `Content-Type: application/json`
``` json
{
	"username": "hermes@gmail.com",
	"password": "123456"
}
```

**RESPONSE**
```json
{
  "user": {
    "_id": ObjectdId(xxx),
    "email": "hermes@gmail.com",
    "password": (Encrypted password),
	}
}
```

---

#### http://localhost:5000/api/auth/login (POST)

Authenticate an User.

**REQUEST**  
Headers: `Content-Type: application/json`
``` json
{
	"email": "hermes@gmail.com",
	"password": "123456"
}
```

**RESPONSE**
```json
{
  "user": {
  	"_id": ObjectdId(xxx),,
  	"email": "hermes@gmail.com",
  	"password": (Encrypted password),
  },
  "token": "xxx"
}
```

---
