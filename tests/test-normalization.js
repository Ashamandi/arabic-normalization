(function (undefined) {
    'use strict';

    var assert = require('assert'),
        it = require('mocha').it,
        describe = require('mocha').describe,
        beforeEach = require('mocha').beforeEach,
        normalizeArabicChars = require('../src/normalization'),
        testCases = function () {

            it('normalizes إ', function () {
                assert.strictEqual(normalizeArabicChars('\u0625'), '\u0627');
            });

            it('normalizes أ', function () {
                assert.strictEqual(normalizeArabicChars('\u0623'), '\u0627');
            });

            it('normalizes آ', function () {
                assert.strictEqual(normalizeArabicChars('\u0622'), '\u0627');
            });

            it('normalizes ٳ', function () {
                assert.strictEqual(normalizeArabicChars('\u0673'), '\u0627');
            });

            it('normalizes ٲ', function () {
                assert.strictEqual(normalizeArabicChars('\u0672'), '\u0627');
            });

            it('normalizes ٱ', function () {
                assert.strictEqual(normalizeArabicChars('\u0671'), '\u0627');
            });

            it('normalizes ۃ', function () {
                assert.strictEqual(normalizeArabicChars('\u06c3'), '\u0629');
            });

            it('normalizes ه', function () {
                assert.strictEqual(normalizeArabicChars('\u0647'), '\u0629');
            });

            it('normalizes ئ', function () {
                assert.strictEqual(normalizeArabicChars('\u0626'), '\u0620\u0621');
            });

        };

    describe('works normally', testCases);

    describe('works in IE7/8', function () {
        beforeEach(function () {
            delete Array.prototype.map;
        });

        testCases();
    });
}());
