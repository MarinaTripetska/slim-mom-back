# slim-mom-back

Products

Get all products:
GET: 'host'/api/v1/products

Get products for query:
GET: 'host'/api/v1/products/search?query={products}

Get a day diet :
GET: 'host'/api/v1/dietaries

Auth

Signup users :
POST: 'host'/api/v1/users/signup

Login users :
POST: 'host'/api/v1/users/login

Logout users :
GET: 'host'/api/v1/users/logout

Dietary

Get diet day :
GET: 'host'/api/v1/dietaries/

Create daily diet :
POST: 'host'/api/v1/dietaries/

Update daily diet:
PATCH: 'host'/api/v1/dietaries/

Delete daily diet:
DELETE: 'host'/api/v1/dietaries/:productId
