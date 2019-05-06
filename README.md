![cf](http://i.imgur.com/7v5ASc8.png)

# Lab36 Aaron Ferris, Alexander White, Spencer Hirata

============================================================================  
Date: May 6th, 2019

[Code Sandbox Link]()  
[Pull request]()  
[LAB INSTRUCTIONS](./LAB.md)

## Assignment

### Requirements

[x] Remove the code that requires the `.json` file in your react app for the schema and adds it to state
[x] Pull the schema from the remote server via the resource path `/api/v1/players/schema` (or whichever model you choose)
[x] On your first pull from the server of the database records, save them in the store for faster retrieval
[x] Instead of saving straight to the Redux Store, use an async action creator function to send data to the server (using post or put) and then update the local store
[x] When rendering the forms and lists, use the store as a cache, and update it after you save to the server.

### Testing

[ ] tests that ensure the list module functions correctly with error-check parameters

### Stretch Goals:

[] Style it!

## Approach and drawing

![UML](./lab34uml.jpg)
