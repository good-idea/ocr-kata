# OCR Kata

This is a Typescript solution to the [TestDouble Bank OCR Kata](https://github.com/testdouble/contributing-tests/wiki/Bank-OCR-kata).

After a `yarn install`,

_Run the demo_ with `yarn demo`
_Run the tests_ with `yarn test` (or `yarn dev` for watch mode)

_note: This was built on Node v10.16.1 and not tested with earlier versions_

I stopped work at (roughly) three hours, although this was split across 2 days.

This solution completes user stories 1, 2, and 3. Some preliminary work for story 4 is included, but not reflected in the demo or the tests.

My overall next steps would be:

- Complete user story 4 (ambiguous account number matching)
- Check test coverage
- Create CLI command & JS module exports
- Add documentation

Otherwise - a good deal of the code for parsing each line comes down to manipulating matrices (mostly in `parseLine.js`). This was new territory for me and I would be interested in abstracting what I have here into something more generic. This would make reasoning about `parseLine` easier, and also allow for an easy way to re-create the "OCR" characters from a string of digits.

This was fun, thank you!
