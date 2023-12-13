const {createClient} = require('@sanity/client')
require('dotenv').config()
 const client = createClient({
  projectId: 'zwnffgbs',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN
})

module.exports = { client };