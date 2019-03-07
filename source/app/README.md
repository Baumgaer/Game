# Application

This is the core of the project. Every file contained in here is part of the server application and the client.

If a typescript file is contained in here, then it implies that it is a **single process** which can be managed by PM2, which we are using to manage our processes. For more information see: <https://pm2.io/doc/en/runtime/overview/>

PM2 is configured by the [ecosystem.config.js](./../../ecosystem.config.js) in the root directory.

## Important

This part is splitted in three parts:

1. Server
    - Everything in the server directory which can only be use on server side
2. Client
    - Everything in the client directory which can only be use on client side
3. BDO
    - Everything which is not in server or client directory. This files are intended to share between client and server. So write the code in a style which is not forced to be on a specific side.
