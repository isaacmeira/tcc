import personData from "../data/person";

const singleResponse = (intent, matricula) => {

  let actualData;
  let responseArr = [];

  personData.forEach((item) => {
   if(item.register === matricula) {
     actualData = item
   }
  })

  if( intent === 'Pendências') {
    actualData.data.institutionData.forEach((item) => {
      if(item.intent === intent ) {
          responseArr = item.data
      }
    })

    if ( responseArr.length > 0 ) {
      return responseArr
    } else {
      return 'Voce nao possui nenhuma pendencia'
    }
  }

  if ( intent === 'Endereços' ) {
    return ['Campus Ilha de Excelência : Av. Getúlio Vargas, 733 - Coqueiro, Manhuaçu - MG, 36900-350', 'Campus Alfa Sul : R. Darcy César de Oliveira Leite, 600 Alfa Sul – Manhuaçu / MG CEP: 36904-219']
  }

  if (intent === 'Contatos') {
    const contact = ['Telefone: (33) 3339-5500', 'Fax: (33) 3331-7171', 'Email: ouvidoria@unifacig.edu.br' ]
    return contact
  }

  if ( intent === 'Outro Assunto') {
    return 'No que posso te ajudar ?'
  }

}


export default singleResponse;