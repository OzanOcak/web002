```console
yarn create next-app --experimental-app

yarn add -D tailwindcss postcss autoprefixer
npx tailwind init -p
```

https://beta.nextjs.org/docs/installation

```console
yarn add -D prisma
npx prisma init
```

https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-node-mongodb

initializing prisma will create schema under prisma folder and .env files
Since we we will use mongodb, update schema.prisma

````console
datasource db {
  provider = "postgresql" // provider="mongodb"


Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript

```console
yarn add @prisma/client

npx plasma generate  // if schema is updated

curl -X POST http://localhost:3000/api/users  -d {"email":"ozanocak@gmail.com","name":"Ozan Ocak","imageUrl":"https:github.com/OzanOcak.png"}
````

```console
npm run build
```

Now we can see server side rendered in run time and generated in build time pages
By add _generateStaticParams_ build in method, we can turn dynamically rendered User component in page.jsx into statically generated page

---

when we add new database feature , we need to update _schema.prisma_ than run _npx prisma generate_

- our http request will be routed and responded by handler function in api
- api also will call functions located in lib/prisma which is called as controller
- finally the data will be fetched prisma functions and react components under app folder will be rendered
