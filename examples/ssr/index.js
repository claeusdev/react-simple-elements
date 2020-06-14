const React = require('react')
const ReactDom = require('react-dom/server')
const { Ring } = require('react-loaders')
const express = require('express')

const app = express()
const port = 4200
app.get('*', (req, res) => {
  const html = ReactDom.renderToString(React.createElement(Ring))
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    ${html}
  </body>
  </html>
  `)
})

app.listen(port, () => console.log(`Server running on ${port}`))
