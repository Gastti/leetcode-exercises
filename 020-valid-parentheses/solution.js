/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    const stack = [];
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in brackets) {
            stack.push(char);
        } else {
            const lastChar = stack.pop();
            if (brackets[lastChar] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};