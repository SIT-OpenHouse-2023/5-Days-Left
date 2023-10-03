# Typescript with Express Backend
 This server is implemented mainly by class component programming

## Flow
`model -> services -> controller -> routes -> /src/index.ts -> server.ts`

# How to run this server
Using `Yarn` to install dependencies <br>
`Yarn dev` to start running the server

# API URLs
    Test endpoints
        get:    /test/helloworld
        post:   /test/create            body: msg
        get:    /test/retrieve/all
        get:    /test/retrieve/:id
        put:    /test/update/:id        body: msg
        delete: /test/delete/all
        delete: /test/delete/:id
    
    User endpoints
        post:   /user/create            body: username,password
        get:    /user/retrieve/all
        get:    /user/retrieve/:id
        put:    /user/update/:id        body: all user model except id
        delete: /user/delete/all
        delete: /user/delete/:id