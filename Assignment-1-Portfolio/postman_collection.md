# Assignment 3: Backend Integration API Tests

Here are the `curl` commands to manually test all 7 backend endpoints. You can run these in your terminal while the Node server is running.

## B1. Health Check
```bash
curl -X GET http://localhost:5000/
# Expected: {"status":"ok"}
```

## B2. Get All Projects
```bash
curl -X GET http://localhost:5000/api/projects
# Expected: Array of 3 project objects
```

## B3. Get Single Project
**Success Case:**
```bash
curl -X GET http://localhost:5000/api/projects/1
# Expected: Supportly project object
```
**Failure Case (404):**
```bash
curl -X GET http://localhost:5000/api/projects/999
# Expected (404): {"error":"Project not found"}
```

## B4. Submit Contact Form
**Success Case:**
```bash
curl -X POST http://localhost:5000/api/contact \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","message":"Hello world!"}'
# Expected (201): {"message":"Submission successful","data":{...}}
```
**Failure Case (400 - Invalid Email):**
```bash
curl -X POST http://localhost:5000/api/contact \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"invalid-email","message":"Hello world!"}'
# Expected (400): {"error":"Invalid email format."}
```

## B5. List Contact Submissions
```bash
curl -X GET http://localhost:5000/api/contact
# Expected: Array containing the "John Doe" submission from B4
```

## B6. Catch-all 404 (Undefined Route)
```bash
curl -X GET http://localhost:5000/api/doesnotexist
# Expected (404): {"error":"Route not found"}
```
