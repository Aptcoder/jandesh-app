## JADEDASH APP API -DOCUMENTATION

- The API can be found at : https://mighty-shore-71308.herokuapp.com/
- Errors with the server throw a 500 status code 



### **Posting html to get url links :**
`POST` /link/upload 

The html is expected to be uploaded through this end point.

**Request Parameters:**
**URL parameters:**
`NONE`

**Body Parameters**

Name|   Type    |Details| Required
-------|--------|------|-------
html | string |the html to be saved | yes

**Response :**
* **Success Response**
`Status` : 200
This is a successful reponse and means the html as been successfully saved.
The url to be used will be sent back.
Response-body :
```
{
link : 'jadedash.netlify.app/q=[unique string]
}
```
* **Error Response**
I do not expect any error response from this end point.

### **Getting html with link**
`GET` /link/:link

This end point is for getting the html with the unique link

**URL parameters :**
Name|   Type    |Details| Required
-------|--------|------|-------
link | string |unique string that was generated when html was uploaded| yes

**Body parameters** 
`NONE`

**Response :**
- **Success Response**
`Status` : 200
This is a successful reponse and the html will be sent back.
Response-body :
	```
	{
	html : 'html for the link'
	}
	```

- **Error Response** 
	`Status` 404
	This would be a response if the link is not found in the database hence is probably wrong.
	```
	{
	status : 'error'
	message : 'link not found'
	}

	```
	