#!/usr/bin/env node
const options = {}

process.argv.slice(2).forEach((args) => {
  if (/^--([a-z]+)=(.+)$/i.test(args)) {
    options[RegExp.$1] = RegExp.$2
  }
})

if (!('secret' in options)) {
  console.log('need secret')
  process.exit(1)
}

process.stdout.write(require('speakeasy').totp(options))
