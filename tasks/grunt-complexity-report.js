'use strict'

const reporter = require('complexity-report-ext')
const printer = require('complexity-report-ext/src/formats/colorful')
const mkdirp = require('mkdirp')
const path = require('path')

module.exports = function (grunt) {
  grunt.registerMultiTask('escomplex-report',
    'Software complexity analysis for JavaScript projects.',
    function () {
      const done = this.async()
      const options = this.options({
        format: 'plain',
        output: null,
        onlyfailures: true,
        silent: false,
        newmi: true,
        force: false
      })
      const output = options.output
      const onlyfailures = options.onlyfailures
      const silent = options.silent
      const force = options.force
      const warn = force ? grunt.log.warn : grunt.fail.warn
      const files = this.files[0].src

      reporter.initialize({
        format: options.format,
        output: output,
        ignoreerrors: options.ignoreerrors,
        onlyfailures: onlyfailures,
        maxfiles: options.maxfiles,
        maxfod: options.maxfod,
        maxcost: options.maxcost,
        maxsize: options.maxsize,
        minmi: options.minmi,
        maxcyc: options.maxcyc,
        maxcycden: options.maxcycden,
        maxhd: options.maxhd,
        maxhv: options.maxhv,
        maxhe: options.maxhe,
        logicalor: options.logicalor,
        switchcase: options.switchcase,
        forin: options.forin,
        trycatch: options.trycatch,
        newmi: options.newmi,
        nocoresize: options.nocoresize,
        beforeWrite: function (result) {
          if (!silent) {
            const formatted = printer.format(result)
            if (onlyfailures) {
              grunt.log.writeln(files.length + ' modules checked, out of them failing:')
            }
            grunt.log.writeln(formatted)
          }
        },
        fail: function (message) {
          warn(message)
        },
        error: function (functionName, error) {
          reportError(error)
        }
      })

      let directoryEnsured
      if (output) {
        const directory = path.dirname(output)
        directoryEnsured = ensureDirectory(directory)
      } else {
        directoryEnsured = Promise.resolve()
      }
      directoryEnsured.then(function () {
        reporter.processFiles(files, done)
      })
        .catch(function (error) {
          reportError(error)
          done()
        })

      function ensureDirectory (name) {
        return new Promise(function (resolve, reject) {
          mkdirp(name, function (error) {
            if (error) {
              reject(error)
            } else {
              resolve()
            }
          })
        })
      }

      function reportError (error) {
        grunt.verbose.error(error.stack)
        grunt.log.error(error)
        warn(error.message)
      }
    })
}
