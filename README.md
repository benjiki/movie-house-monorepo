# movie-house-monorepo

![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white)

## 📝 Description

Embark on a cinematic journey with movie-house-monorepo, a cutting-edge, full-stack movie platform meticulously crafted for scalability and performance. Leveraging the power of TurboRepo for seamless monorepo management and Docker for containerized deployments, this platform is designed for modern cloud environments. Experience real-time responsiveness through its event-driven architecture, powered by Kafka, ensuring a smooth and engaging user experience. Security is paramount, with Passport.js providing robust authentication mechanisms. movie-house-monorepo adopts a hybrid data storage strategy, utilizing PostgreSQL for structured data and MongoDB for flexible document storage, all accessed through the elegant Prisma ORM. Media handling is optimized with Mino 3, ensuring efficient object storage and delivery. Built entirely with TypeScript, this project showcases modern web development best practices, delivering a robust, scalable, and maintainable movie platform.

## ✨ Features

- 🗄️ Database
- 🕸️ Web


## 🛠️ Tech Stack

- 📜 TypeScript


## 🚀 Run Commands

- **dev**: `npm run dev`
- **check-types**: `npm run check-types`


## 📁 Project Structure

```
.
├── apps
│   ├── auth-service
│   │   ├── docker-compose.yml
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── controllers
│   │   │   │   └── auth.controller.ts
│   │   │   ├── middleware
│   │   │   │   ├── authorizeRoles.ts
│   │   │   │   └── validateRequest.ts
│   │   │   ├── passport
│   │   │   │   └── jwt.strategy.ts
│   │   │   ├── routes
│   │   │   │   └── auth.route.ts
│   │   │   ├── server.ts
│   │   │   ├── services
│   │   │   │   └── auth.service.ts
│   │   │   ├── utils
│   │   │   │   ├── ApiError.ts
│   │   │   │   └── token.ts
│   │   │   └── validations
│   │   │       └── auth.validations.ts
│   │   └── tsconfig.json
│   ├── order-service
│   │   ├── docker-compose.yml
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── controllers
│   │   │   │   └── order.controller.ts
│   │   │   ├── kafka
│   │   │   │   ├── consumer.ts
│   │   │   │   └── producer.ts
│   │   │   ├── routes
│   │   │   │   └── order.route.ts
│   │   │   ├── server.ts
│   │   │   ├── services
│   │   │   │   ├── order.service.ts
│   │   │   │   └── productValidationHandler.ts
│   │   │   ├── utils
│   │   │   │   └── connectMongo.ts
│   │   │   └── validators
│   │   │       └── order.validator.ts
│   │   └── tsconfig.json
│   └── product-service
│       ├── docker-compose.yml
│       ├── package.json
│       └── src
│           ├── controller
│           │   ├── movie.controller.ts
│           │   ├── movieCategory.controller.ts
│           │   ├── otherProduct.controller.ts
│           │   ├── otherProductCategory.controller.ts
│           │   ├── series.controller.ts
│           │   └── seriesCategory.controller.ts
│           ├── kafka
│           │   └── consumer.ts
│           ├── middleware
│           │   └── validateRequest.ts
│           ├── router
│           │   ├── SeriesCategory.route.ts
│           │   ├── movie.route.ts
│           │   ├── movieCategory.route.ts
│           │   ├── otherProducts.route.ts
│           │   ├── otherProductsCategory.route.ts
│           │   └── series.route.ts
│           ├── server.ts
│           ├── service
│           │   ├── movie.service.ts
│           │   ├── movieCategory.service.ts
│           │   ├── otherProductCategory.service.ts
│           │   ├── otherProducts.service.ts
│           │   ├── series.service.ts
│           │   └── seriesCategory.service.ts
│           ├── utils
│           │   ├── ApiError.ts
│           │   ├── deleteFromMinio.ts
│           │   ├── initMinioBucket.ts
│           │   ├── minioClient.ts
│           │   ├── upload.ts
│           │   └── uploadToMinio.ts
│           └── validations
│               ├── movies.validations.ts
│               ├── otherProducts.validations.ts
│               └── series.validations.ts
├── package.json
├── packages
│   ├── auth-db
│   │   ├── package.json
│   │   ├── prisma
│   │   │   ├── migrations
│   │   │   │   ├── 20251020084126_init
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20251020103359_table_reset
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20251020104607_add_refresh_token
│   │   │   │   │   └── migration.sql
│   │   │   │   └── migration_lock.toml
│   │   │   └── schema.prisma
│   │   ├── src
│   │   │   ├── client.ts
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├── auth-lib
│   │   ├── package.json
│   │   └── src
│   │       ├── index.ts
│   │       ├── middleware.ts
│   │       ├── token.ts
│   │       └── validation.ts
│   ├── eslint-config
│   │   ├── base.js
│   │   ├── next.js
│   │   ├── package.json
│   │   └── react-internal.js
│   ├── kafka
│   │   ├── docker-compose.yml
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── client.ts
│   │   │   ├── consumer.ts
│   │   │   ├── index.ts
│   │   │   └── producer.ts
│   │   └── tsconfig.json
│   ├── order-db
│   │   ├── package.json
│   │   └── src
│   │       ├── connection.ts
│   │       ├── index.ts
│   │       └── order-model.ts
│   ├── product-db
│   │   ├── generated
│   │   │   └── prisma
│   │   │       ├── client.d.ts
│   │   │       ├── client.js
│   │   │       ├── default.d.ts
│   │   │       ├── default.js
│   │   │       ├── edge.d.ts
│   │   │       ├── edge.js
│   │   │       ├── index-browser.js
│   │   │       ├── index.d.ts
│   │   │       ├── index.js
│   │   │       ├── package.json
│   │   │       ├── query_engine-windows.dll.node
│   │   │       ├── query_engine_bg.js
│   │   │       ├── query_engine_bg.wasm
│   │   │       ├── runtime
│   │   │       │   ├── edge-esm.js
│   │   │       │   ├── edge.js
│   │   │       │   ├── index-browser.d.ts
│   │   │       │   ├── index-browser.js
│   │   │       │   ├── library.d.ts
│   │   │       │   ├── library.js
│   │   │       │   ├── react-native.js
│   │   │       │   ├── wasm-compiler-edge.js
│   │   │       │   └── wasm-engine-edge.js
│   │   │       ├── schema.prisma
│   │   │       ├── wasm-edge-light-loader.mjs
│   │   │       ├── wasm-worker-loader.mjs
│   │   │       ├── wasm.d.ts
│   │   │       └── wasm.js
│   │   ├── package.json
│   │   ├── prisma
│   │   │   ├── migrations
│   │   │   │   ├── 20251021185756_int
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20251022064901_movie_discription_removed
│   │   │   │   │   └── migration.sql
│   │   │   │   ├── 20251024185500_series_dis_removed
│   │   │   │   │   └── migration.sql
│   │   │   │   └── migration_lock.toml
│   │   │   └── schema.prisma
│   │   ├── src
│   │   │   ├── client.ts
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├── typescript-config
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   ├── package.json
│   │   └── react-library.json
│   └── ui
│       ├── eslint.config.mjs
│       ├── package.json
│       ├── src
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   └── code.tsx
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/benjiki/movie-house-monorepo.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

---
*This README was generated with ❤️ by ReadmeBuddy*
