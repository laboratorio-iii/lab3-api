'use strict'

module.exports = {
  secret_key: process.env.JWT_SECRET || 'ogA9ppB$S!dy!hu3Rauvg!L96',
  jwt_lifetime: process.env.JWT_LIFETIME || 86400,
  api_base: process.env.API_BASE || '/api',
  port: process.env.PORT || '5000'
}