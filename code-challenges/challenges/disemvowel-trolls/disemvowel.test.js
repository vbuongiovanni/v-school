const disemvowel = require("./disemvowel.js");

test("Testing fixed text with & without vowels", () => {
  expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
  expect(disemvowel("No offense but,\nYour writing is among the worst I've ever read")).toBe("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
  expect(disemvowel("What are you, a communist?")).toBe("Wht r y,  cmmnst?");
});
test("Testing random texts w/o vowels", () => {
  expect(disemvowel("qwrtsdfgyhj9191")).toBe("qwrtsdfgyhj9191");
  expect(disemvowel("")).toBe("");
  expect(disemvowel("pppppppppplllllllllqqqqqqqwww00000")).toBe("pppppppppplllllllllqqqqqqqwww00000");
});
test("Testing random texts with only vowels", () => {
  expect(disemvowel("aeiou")).toBe("");
  expect(disemvowel("aei")).toBe("");
  expect(disemvowel("aeiouAEIOU")).toBe("");
});