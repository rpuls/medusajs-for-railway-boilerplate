<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
      <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg" width=100>
    </picture>
  </a>
  <a href="https://railway.app?referralCode=-Yg50p">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://railway.app/brand/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://railway.app/brand/logo-light.svg">
      <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width=100>
    </picture>
  </a>
</p>



# medusajs-backend

### railway setup
Please change the value of environtment variables: `COOCKIE_SECRET` and `JWT_SECRET`.

### local setup
- Rename `.env.template` ->  `.env`
- To connect to your online database, from local; copy the `DATABASE_URL` value that have been auto generated on railway, and add to your `.env`

### requirements
- **postgres database** (will be automatically generated if using railway template)
- **redis** (will be automatically generated if using railway template)

### optional
 - **cloudinary**: I highly recommend using a proper media service.
   1. Sign up a free account with [cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/yhlpdo1vaw2mq1la0nks?t=default) choose "developer API calls" type of user.
   2. Add your `cloud_name`, `api_key` & `api_secret` to .env.local this will eneable 3loudinary as a file service on local dev environment
   3. Configure the same environment variables in your railway dashboard to enable cloudinary in production.
   4. If the steps above was confusin, visit [https://medusajs.com/plugins/medusa-file-cloudinary/](https://medusajs.com/plugins/medusa-file-cloudinary/) for more setup details. 

### commands
`cd medusajs-backend/`
`npm run build` will compile app.
`npm run dev` will start local admin dashboard app to manage products and orders etc.
`npm run start` will start the backend server, needed for the storefront