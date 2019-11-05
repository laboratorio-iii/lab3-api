'use strict'

const app = require('./app')
const db = require('./db')

    app.listen(app.get('port'), () => {
      console.log(`API listening on ${'localhost'}:${app.get('port')}`)
    })
    