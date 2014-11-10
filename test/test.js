var shortCodeHelper = require('../lib/index');

exports.CheckThat5CharactersAreReturnedByDefault = function (test) {
	var code = shortCodeHelper.MakeId();
	
	test.equal(5, code.length);
	test.done();
};

exports.CheckThat10CharactersAreReturnedWhenNumberPassedIn = function (test) {
	var code = shortCodeHelper.MakeId(10);
	
	test.equal(10, code.length);
	test.done();
};

exports.CheckThatTwo5CharacterStringsAreDifferent = function (test) {
	var code1 = shortCodeHelper.MakeId();
	var code2 = shortCodeHelper.MakeId();
	
	test.notEqual(code1, code2);
	test.done();
};
