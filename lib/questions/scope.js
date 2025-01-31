// const fuzzy = require('fuzzy');

// /**
//  * Searches for the scopes containing the given substring.
//  *
//  * @param {string} substring Substring to search with.
//  * @param {string[]} scopes Scopes list.
//  */
// const findScope = function (substring, scopes) {
//   return Promise.resolve(fuzzy.filter(substring || '', scopes).map(({original: scope}) => scope));
// };

// exports.createQuestion = (state) => {
//   const {scopes} = state.config;

//   if (!scopes) {
//     return null;
//   }

//   if (!Array.isArray(scopes)) {
//     throw new TypeError('scopes must be an array of strings.');
//   }

//   if (scopes.length < 1) {
//     return null;
//   }

//   const question = {
//     message: 'Select the scope this component affects:',
//     name: 'scope',
//     source: (_answers, input) => findScope(input, scopes),
//     type: 'autocomplete'
//   };

//   return question;
// };

exports.createQuestion = (state) => {
  const question = {
    // bracketType: 'round',
    validate: (input) => {
      if (input) {
        if (!/^[a-z]+(-[a-z]+)*$/.test(input)) {
          return 'Please only use lowercase and hyphen separated format';
        }
      }
      return true;
    },
    message: 'Provide the scope of this commit:\n',
    name: 'scope',
    type: 'input',
  };

  return question;
};
