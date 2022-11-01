const { expect } = require("chai");
const { substitution } = require("../src/substitution");

// Write your tests here!

describe("substitution", () => {
    it("should return false if the substitute alphabet is not unique", () => {
        const alphabet = "xxyqmcgrukswaflnthdjpzibev";
        const input = "thinkful";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    })
});

describe("substitution", () => {
    it("should return false if the substitute alphabet is missing", () => {
        const input = "thinkful";
        const actual = substitution(input);
        expect(actual).to.be.false;
    })
});

describe("substitution", () => {
    it("should return false if the substitute alphabet is not exactly 26 characters", () => {
        const input = "thinkful";
        const alphabet = "short";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    })
});

//encoding tests
describe("substitutionEncode", () => {
    it("should encode a message by using the given substitution alphabet", () => {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected  = "jrufscpw";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
});

describe("substitutionEncode", () => {
    it("should encode a message by keeping the spaces as is according to the given substitution alphabet", () => {
        const input = "You are an excellent spy";//ignoring the case as well
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected  = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
});


describe("substitutionEncode", () => {
    it("should work perfectly with special characters in the substitution alphabet", () => {
        const input = "message";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected  = "y&ii$r&";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
});

//decoding tests
describe("substitutionDecode", () => {
    it("should decode a message by using the given substitution alphabet", () => {
        const input = "xoy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected  = "abc";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    })
});

describe("substitutionDecode", () => {
    it("should decode a message by keeping the spaces as is according to the given substitution alphabet", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected  = "you are an excellent spy";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    })
});


describe("substitutionDecode", () => {
    it("should work perfectly with special characters in the substitution alphabet", () => {
        const input = "y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected  = "message";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    })
});
