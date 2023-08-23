import assert from 'assert'; // If using TypeScript, you'll need to use import statements
import { topThreeWords } from '../src/main'

describe('topThreeWords', function() {
    it('returns an empty array for empty input', function() {
        assert.deepStrictEqual(topThreeWords(''), []);
    });

    it('returns the top three words for valid input', function() {
        const input = "This is a test. This is only a test!";
        const expectedOutput = ['this', 'is', 'a'];
        assert.deepStrictEqual(topThreeWords(input), expectedOutput);
    });
});