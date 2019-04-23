#!/usr/bin/env node
const options = {}

process.argv.slice(2).forEach((args) => {
  if (/^--([a-z]+)=(.+)$/i.test(args)) {
    options[RegExp.$1] = RegExp.$2
  }
})

if (!('secret' in options)) {
  console.log("need secret")
  return
}

console.log(require('speakeasy').totp(options))
