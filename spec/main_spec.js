"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){

    it("测试用例1", function(){

        var result = main("95713");
        var expect_string = '| |:|:::|:|:|:::|:::||::||::|:|: |';

        expect(expect_string).to.equal(result);
    });
    it("测试用例2", function(){

        var result = main("55555-1237");
        var expect_string = '| :|:|::|:|::|:|::|:|::|:|::::||::|:|::||:|:::|::|:| |';

        expect(expect_string).to.equal(result);
    });



});