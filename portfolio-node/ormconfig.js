module.exports = {
  name: 'default',
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'portfolio_node',
  synchronize: false,
  logging: true,
  entities: ['libs/libs/src/db/entities/**/*entity.ts'],
  migrations: ['libs/libs/src/db/migrations/**/*.ts'],
  subscribers: ['libs/libs/src/db/subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'libs/libs/src/db/entities',
    migrationsDir: 'libs/libs/src/db/migrations',
    subscribersDir: 'libs/libs/src/db/subscribers',
  },
};
