module.exports = {
  verifyPass: (value, rules) => {
    if (!rules.length) {
      return true;
    }

    return rules[0](value);
  },
};
