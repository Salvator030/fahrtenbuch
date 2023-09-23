import { describe } from 'mocha';
import * as db from '../Database/database'
var assert = require('assert');

describe('Database', function () {
    describe('DB auslesen', function () {
        it('should return -1 wenn keine Daten auslesbar' , function () {
            assert.equal(db.getAllAddress.length != 4 ,-1)
        })
    })
})