import personData from '../data/person'
import isValid from '../helpers/cpf';

const checker = (message, haveValidRegister) => {


  let response;


  if (haveValidRegister) {

    const validCpf = isValid(message);
    console.log(validCpf)

    if (validCpf) {
      personData.map((item) => {

        if (item.data.cpf === message) {

          if (item.data.situacao === 'ativo') {
            return response = `Olá, bem vindo ${item.data.name}, como posso ajudar ?`
          } else {
            return response = `Olá, bem vindo ${item.data.name}, seu cadastro está inativo, favor entrar em contato com a secreatria`
          }
        }

        return response = 'Cpf não encontrado com matrícula informada, favor entrar em contato com a secreatria'

      })
    } else {

      return response = 'Cpf inválido, por favor digitar novamente'

    }


  } else {


    personData.map((item) => {

      if (item.register === message) {
        return response = 'Por questões de segurança, confirme seu cpf'
      }

      return response = 'Matrícula inválida ou não encontrada, por favor digitar novamente'

    })

  }


  return response;

}


export default checker;