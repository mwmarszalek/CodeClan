


What is responsible for defining the routes of the games resource?

Router (/server/helpers/create_router.js)

#######################################################################################
What do you notice about the folder structure? Whats the client responsible for? Whats the server responsible for?

client is responsible for rendering front-end and sending queries to the server. server accesses mongodb and sends back required data

#######################################################################################

What are the the responsibilities of server.js?

connects server to database

#######################################################################################

What are the responsibilities of the gamesRouter?

creating the router

#######################################################################################

What process does the the client (front-end) use to communicate with the server?

-----

#######################################################################################

What optional second argument does the fetch method take? And what is it used for in this application? Hint: See Using Fetch on the MDN docs

as second argument fetch takes any object that contains custom settings you want to apply (method,headers,body and so on). In our app it is used to define the http method, the body and the headers

#######################################################################################

Which of the games API routes does the front-end application consume (i.e. make requests to)?

'/' and '/:id'

What are we using the MongoDB Driver for?