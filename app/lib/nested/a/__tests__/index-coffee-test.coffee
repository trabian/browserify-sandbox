assert = require 'assert'

describe 'Requiring nested files', ->

  it 'should not cause an error', ->
    a = require '../index'
    assert a.coffeeHelper is 'coffee-helper.coffee'
