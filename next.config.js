/** @type {import('next').NextConfig} */
//const { withAxiom } = require('next-axiom')
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  // ... your existing config
  reactStrictMode: false,
})
