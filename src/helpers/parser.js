


const dataParser = (intent, data) => {

  const parsedData = [];


  if( intent === 'Notas' ) {
    data.forEach((item) => {
      parsedData.push(`Disciplina: ${item.name}`)
      parsedData.push(`Nota: ${item.note}`)
      parsedData.push(`Situação: ${item.situacao}`)
    }) 
  }

  if( intent === 'Calendário de provas' ) {
    data.forEach((item) => {
      parsedData.push(`Disciplina: ${item.name}`)
      parsedData.push(`Dia: ${item.day}`)
      parsedData.push(`Hora: ${item.hour}`)
    }) 
  }

  if( intent === 'Horários' ) {
    data.forEach((item) => {
      parsedData.push(item.day)

      item.data.forEach((elem) => {
        parsedData.push(`Disciplina: ${elem.name}`)
        parsedData.push(`Hora: ${elem.period}`)
      })
    })
  }

  return parsedData;

}

export default dataParser;