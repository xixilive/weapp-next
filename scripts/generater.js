// to generate test scripts for API methods
// === usage:
// `npm run generate promisify`
// `npm run generate callback`
// `npm run generate delegate`
// `npm run generate overwrite`

const path = require('path'), fs = require('fs')
const {template} = require('lodash')
const definitions = require('../es6/weapp/definitions')

function printError(str){
  process.stderr.write(`\x1b[31m${str}\x1b[0m\n`)
}

function printSuccess(str){
  process.stdout.write(`\x1b[32m${str}\x1b[0m\n`)
}

function printWarning(str){
  process.stdout.write(`\x1b[33m${str}\x1b[0m\n`)
}

function genApiTestTmpl(wrapper){
  const destFile = path.join(__dirname, '..', '__tests__', 'api', `${wrapper}.test.js`)
  const tmplFile = path.join(__dirname, `${wrapper}.tmpl`)

  const tmpl = fs.readFileSync(tmplFile, 'utf-8')
  const methods = definitions(wrapper)
  fs.writeFileSync(destFile, template(tmpl)({methods}), 'utf-8')

  printSuccess(`Generated: ${destFile}\n`)
}

const [wrapper] = process.argv.slice(2)

if(!wrapper){
  printError('invalid wrapper strategy')
  proccess.exit(1)
}

printWarning(`Generating -> ${wrapper}......\n`)
genApiTestTmpl(wrapper)
