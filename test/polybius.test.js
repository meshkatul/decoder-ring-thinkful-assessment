const { expect } = require("chai");
const { polybius } = require("../src/polybius");

// Write your tests here!


//encoder
describe("encoding", () => {
    it("should encode a message by translating each letter to number pair", () => {
        const input = "Thinkful"; //ignor the uppercase as well
        const expected = "4432423352125413";
        const actual = polybius(input);
        expect(actual).to.equal(expected);

    })
});

describe("encoding", () => {
    it("should translate both 'i and 'j' to 42", () => {
        const input = "ij"; 
        const expected = "4242";
        const actual = polybius(input);
        expect(actual).to.equal(expected);

    })
});

describe("encoding", () => {
    it("should leave space as is", () => {
        const input = "Hello world"; //ignor the uppercase as well
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.equal(expected);

    })
});


//decoder
describe("decoding", () => {
    it("should encode a message by translating each letter to number pair", () => {
        const input = "4432423352125413"; 
        const expected = "th(i/j)nkful";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);

    })
});

describe("decoding", () => {
    it("should translate 42 to both 'i and 'j' ", () => {
        const input = "42"; 
        const expected = "(i/j)";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);

    })
});

describe("decoding", () => {
    it("should leave space as is", () => {
        const input = "3251131343 2543241341"; 
        const expected = "hello world";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);

    })
});

describe("decoding", () => {
    it("should return false if the length of input number is odd", () => {
        const input = "3251131343254324134"; 
        const actual = polybius(input, false);
        expect(actual).to.be.false;

    })
});
