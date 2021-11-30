import intents from '../intents/intents'
const stringSimilarity = require("string-similarity");

const intl = (provider) => {


  let removedSpecial = provider.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(' ').join('');

  let instant;

 
  intents.forEach((item) => {

    let similar = stringSimilarity.compareTwoStrings(item.replace(/[^a-zA-Z ]/g, "").toLowerCase(), removedSpecial)

    if (  similar > 0.25 && !instant  ) {
      instant = item;
    }
  
  })


  if ( instant !== '' ) {
    return instant
  } else {
    instant = 'Não consegui entender esse comando, por favor tente novamente'
    return instant
  }

}

export default intl;