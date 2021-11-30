import intentResponse from '../intents/responses'

const sendMessage = (message) => {

  let responseData;

  console.log(message)

  intentResponse.map((item) => {
    console.log(item)

      if(item.intent === message) {
        return responseData = item;
      } 
  })


  return responseData

}

export default sendMessage;