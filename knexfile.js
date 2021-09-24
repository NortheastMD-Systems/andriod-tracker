

module.exports = {

 
  production: {
    client: 'postgresql',
    connection: {
      host:'ec2-44-198-146-224.compute-1.amazonaws.com',
      port:'5432',
      database: 'dd9ob2kc2d7raj',
      user:     'egzsdifrxkkgvk',
      password: '67ebfbfa122e57618f55a4eabf3af8c313f713a6d336ccf6ff3b2b8ecca48ad5',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
