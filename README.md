<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
      <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg" width=100>
    </picture>
  </a>
  <a href="https://railway.app/template/QvfPwp?referralCode=-Yg50p">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://railway.app/brand/logo-light.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://railway.app/brand/logo-dark.svg">
      <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width=100>
    </picture>
  </a>
</p>

<h2 align="center">
  Medusajs open source ecommerce platform<br>
  <a href="https://railway.app/template/QvfPwp?referralCode=-Yg50p">one-click deploy on railway!</a>
</h2>

<h1 align="center">
  Need help?<br>
  <a href="https://funkyton.com/medusajs-free-fully-open-source-ecommerce-solution/">Step by step tutorial, with screenshots and video</a>
</h1>





<p align="center">
Combine Medusa's modules for your commerce backend with the newest Next.js 14 features for a performant storefront.</p>

<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

## About this boilerplate
This boilerplate is a monorepo consisting of snapshot of a medusajs backend and storefront app created with `npx create-medusa-app@latest` February 2024 (last updaed: 26th July 2024). Modified to be plug n' play deployable on [railway.app](https://railway.app?referralCode=-Yg50p)!


# medusajs-backend

### railway setup
Please change the value of environtment variables: `COOCKIE_SECRET` and `JWT_SECRET`.

### local setup
- Install dependencies `yarn`
- Rename `.env.template` ->  `.env`
- To connect to your online database, from local; copy the `DATABASE_URL` value that have been auto generated on railway, and add to your `.env`

### requirements
- **postgres database** (will be automatically generated if using railway template)
- **redis** (will be automatically generated if using railway template)

### optional
 - **cloudinary**: I highly recommend using a proper media service.
   1. Sign up a free account with [cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/yhlpdo1vaw2mq1la0nks?t=default) choose "developer API calls" type of user.
   2. Add your `cloud_name`, `api_key` & `api_secret` to .env.local this will eneable Cloudinary as a file service on local dev environment
   3. Configure the same environment variables in your railway dashboard to enable cloudinary in production.
   4. If the steps above was confusin, visit [https://medusajs.com/plugins/medusa-file-cloudinary/](https://medusajs.com/plugins/medusa-file-cloudinary/) for more setup details. 

### commands
`cd medusajs-backend/`
`yarn build` will compile app.
`yarn dev` will start local admin dashboard app to manage products and orders etc.
`yarn start` will start the backend server, needed for the storefront

# medusa-storefront

### local setup
intall dependencies `yarn`
Rename `.env.local.template` ->  `.env.local`

### requirements
- running backend `npm run start` - needed to fetch products data and more, to build nextjs pages.

### commands
`cd medusajs-storefront/`
`yarn wait` will keep calling backend endpoint until a backend responds.
`yarn build` will build the nextjs app - remember to start backend app prior to running this command.
`yarn start` will serve the frontend web shop.
