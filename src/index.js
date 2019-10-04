'use strict'

const app = require('./app')
const models = require('./models')

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')

    app.listen(app.get('port'), () => {
      console.log(`API listening on ${'localhost'}:${app.get('port')}`)
    })
    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })