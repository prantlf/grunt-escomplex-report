'use strict'

const fs = require('fs')
const path = require('path')

function fileExists (test, name) {
  test.expect(1)
  const report = fs.existsSync(path.join(__dirname, name + '.txt'))
  test.ok(report)
  test.done()
}

exports['htmllint-html-report-converter'] = {
  passing: function (test) {
    fileExists(test, 'passing')
  },

  failing: function (test) {
    fileExists(test, 'failing')
  }
}
