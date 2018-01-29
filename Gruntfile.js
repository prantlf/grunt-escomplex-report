'use strict'

module.exports = function (grunt) {
  const coverage = process.env.GRUNT_ESCOMPLEX_REPORT_COVERAGE

  grunt.initConfig({
    standard: {
      all: {
        src: [
          'Gruntfile.js',
          'tasks/*.js',
          'tests/*.js'
        ]
      }
    },

    instrument: {
      files: 'tasks/*.js',
      options: {
        lazy: true,
        basePath: 'coverage/'
      }
    },

    storeCoverage: {
      options: {
        dir: 'coverage'
      }
    },

    makeReport: {
      src: 'coverage/coverage.json',
      options: {
        type: 'lcov',
        dir: 'coverage',
        print: 'detail'
      }
    },

    coveralls: {
      tests: {
        src: 'coverage/lcov.info'
      }
    },

    'escomplex-report': {
      passing: {
        options: {
          output: 'tests/passing.txt',
          onlyfailures: false
        },
        src: ['tasks/*.js', 'tests/*.js']
      },
      failing: {
        options: {
          output: 'tests/failing.txt',
          minmi: 75,
          force: true
        },
        src: ['tasks/*.js', 'tests/*.js']
      }
    },

    nodeunit: {
      tests: ['tests/*.js']
    },

    clean: {
      report: ['tests/*.txt']
    }
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-nodeunit')
  grunt.loadNpmTasks('grunt-coveralls')
  grunt.loadNpmTasks('grunt-istanbul')
  grunt.loadNpmTasks('grunt-standard')
  grunt.loadTasks(coverage ? 'coverage/tasks' : 'tasks')

  const test = ['standard', 'clean', 'escomplex-report', 'nodeunit']
  const report = coverage ? ['storeCoverage', 'makeReport'] : []
  grunt.registerTask('default', test.concat(report))
}
