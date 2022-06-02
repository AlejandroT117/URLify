const URLify = require('./index')

const tests=[
  {
    description: "Mr John Smith   ",
    input: ["Mr John Smith   ", 13],
    exp: "Mr%20John%20Smith"
  },
  {
    description: "Uriel Alejandro Trejo Martínez   ",
    input: ["Uriel Alejandro Trejo Martínez      ", 21],
    exp: "Uriel%20Alejandro%20Trejo"
  }
]


describe("return str URLify", () => {
  for (const t of tests) {
    test(t.description, () => {
      expect(URLify(...t.input)).toBe(t.exp);
    });
  }
});