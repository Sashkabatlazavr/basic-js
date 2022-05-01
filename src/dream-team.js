const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = [];
  let name = '';
  let letter = '';
  for (let i = 0; i < members.length; i++) {
    name = members[i];
    if (typeof name !== 'string') continue;
    for (let j = 0; j < name.length; j++) {
      if (name[j] != ' ') {
        letter = name[j].toUpperCase();
        break;
      }
    }
    result.push(letter);

  }
  result = result.sort((a,b) => a.charCodeAt() - b.charCodeAt()).join('')
  return result; 
}


module.exports = {
  createDreamTeam
};
