import personData from "../data/person";

const getPersonData = (intent, semester, matricula) => {


  let message;

  personData.forEach((item) => {

    if ( item.register === matricula ) {
      item.data.institutionData.forEach((inst) => {
        if( inst.intent === intent ) {
          inst.data.forEach(( option ) => {
            if(option.semester === parseInt(semester)) {
              message = option.results
            }
          })
        }
      })
    }
  })

  return message

}


export default getPersonData;