const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// Write your tests here!
describe("caesar", () => {
    it("should return false if shift value isn't present", () => {
        const input = "thinkful";
        const actual = caesar(input);
        expect(actual).to.be.false;
    })
});

describe("caesar", () => {
    it("should return false if shift value is 0", () => {
        const input = "thinkful";
        const actual = caesar(input, 0);
        expect(actual).to.be.false;
    })
});

describe("caesar", () => {
    it("should return false if shift value is less than -25", () => {
        const input = "thinkful";
        const shift = -30;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    })
});

describe("caesar", () => {
    it("should return false if shift value is greater than 25", () => {
        const input = "thinkful";
        const shift = 30;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    })
});

//encoding
describe("encoding", () => {
    it("should encode a message by shifting properly leaving the space and symbol as it is", () => {
        const input = "This is a secret message!"; //ignoring the capital letter as well
        const shift = 8;
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
});

describe("encoding", () => {
    it("should encode a message by shifting properly with a negative shift value", () => {
        const input = "thinkful"; 
        const shift = -3;
        const expected = 'qefkhcri';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
});

describe("encoding", () => {
    it("should handle the last letter of alphabet appropriately", () => {
        const input = "z"; 
        const shift = 3;
        const expected = 'c';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
});

//decoding
describe("decoding", () => {
    it("should encode a message by shifting properly leaving the space and symbol as it is", () => {
        const input = "BPQA qa I amkzmb umaaiom!"; //ignoring the capital letter as well
        const shift = 8;
        const expected = "this is a secret message!";
        const actual = caesar(input, shift, false);
        expect(actual).to.equal(expected);
    })
});

describe("decoding", () => {
    it("should encode a message by shifting properly with a negative shift value", () => {
        const input = "qefkhcri"; 
        const shift = -3;
        const expected = 'thinkful';
        const actual = caesar(input, shift, false);
        expect(actual).to.equal(expected);
    })
});

describe("decoding", () => {
    it("should handle the last letter of alphabet appropriately", () => {
        const input = "z"; 
        const shift = 3;
        const expected = 'w';
        const actual = caesar(input, shift, false);
        expect(actual).to.equal(expected);
    })
});


