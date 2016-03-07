module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/ecommerce'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};