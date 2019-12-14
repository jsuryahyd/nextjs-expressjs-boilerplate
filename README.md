Best place to get the basic idea would be the [Learn](https://nextjs.org/learn/basics/getting-started) section of the official website

### create-project
- create project with `npx create-next-app --example with-jest nextjs-boilerplate`
- then add backend folder
- move all nextjs files to next-client folder.
- In index.js file(which is the server file), use `nextApp.prepare().then` to prepare nextjs part of the app and then start the server. 

### run development
`npm start`

### run production
 with pm2 : `npm run start-prod`
 without pm2 : `NODE_ENV=PRODUCTION npm run start` (see index.js in root folder)

index.js has to be in root folder, doesnot work if placed inside backend folder.

#### env variables
- use `next-client/next.config.js`
