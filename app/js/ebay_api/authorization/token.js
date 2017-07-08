const scheduler = require('node-schedule')

module.exports = Token

function Token() {
  this.token = ""
  this.expiry = 0
  this.refresh_token = ""
  this.refresh_expiry = 0
}

Token.prototype.clone = function(obj)
{
  if (obj == null || typeof obj != "object") {
    throw "Null object or undefined type"
  }

  this.token = obj.token
  this.expiry = obj.expiry
  this.refresh_token = obj.refresh_token
  this.refresh_expiry = obj.refresh_expiry
}

Token.prototype.getToken = function()
{
   return this.token
}

Token.prototype.getExpiry = function() {
   return this.expiry
}

Token.prototype.getRefreshToken = function() {
   return this.refresh_token
}

Token.prototype.getRefreshExpiry = function() {
   return this.refresh_expiry
}

Token.prototype.setToken = function(token) {
   this.token = token
}

Token.prototype.setExpiry = function(expiry, refreshToken) {
   this.expiry = expiry
   scheduleTokenRefresh(refreshToken)
}

Token.prototype.setRefreshToken = function(refresh_token) {
   this.refresh_token = refresh_token
}

Token.prototype.setRefreshExpiry = function(refresh_expiry, requestToken) {
   this.refresh_expiry = refresh_expiry
   //scheduleTokenRequest(requestToken)
}

scheduleTokenRefresh = function(job) {
  let startTime = new Date(Date.now() + 1000);
  let endTime = new Date(startTime.getTime() + this.expiry * 1000 - 60000);
  var j = scheduler.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, job(this.refresh_token));
}

scheduleTokenRequest = function(job) {
  let startTime = new Date(Date.now() + 1000);
  let endTime = new Date(startTime.getTime() + this.refresh_expiry * 1000 - 60000);
  var j = scheduler.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, job);
}
