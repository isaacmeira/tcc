import React, { useState, useEffect } from 'react';
import checker from './provider/checker'
import intents from './intents/intents'
import sendMessage from './provider/message'
import getPersonData from './intents/getPersonData'
import dataParser from './helpers/parser'
import singles from './constants/singles'
import singleResponse from './intents/singleResponses';
import intl from './provider/inteligency'
import './App.css'

function App() {
  
  const [isQuestion, setIsQuestion] = useState(true)

  const [ validRegister, setRegister ] = useState(false);

  const [started, setStarted] = useState(false)

  const [actualRegister, setActualRegister] = useState('')

  const [pastResponses, setPast] = useState([]) 

  const [question, setQuestion] = useState()

  const [answer, setAnswer] = useState()

  const [inputData, setInput] = useState('');

  const [ actualIntent, setIntent ] = useState('')

  useEffect(() => {

    if( !isQuestion && started ) {

      setIsQuestion(true)

      setPast((prev) => [...prev, 'test'])
      setAnswer('')
    }

  },[isQuestion])


  const handleIntent = (async (intent) => {

    if ( !actualIntent ) {

      let response = await sendMessage(intent)

      setIntent(response)
  
      setPast((prev) => [...prev, <p>{ response.response }</p>])

    } else {

      let response = await getPersonData(actualIntent.intent, intent, actualRegister)
      console.log(response)
      setPast((prev) => [...prev, <p>Segue informações solicitadas</p>])

      let parsed = dataParser(actualIntent.intent, response)

      setPast((prev) => [...prev, <p>{`${intent}º Período`}</p>])

      parsed.forEach((item) => {
        setPast((prev) => [...prev, <p>{item}</p>])
      })

      setIntent('')
     
    }
  })

  const handleBack = () => {
    setIntent('')
    setPast([<p>Como posso ajudar ?</p>])
  }
  
  const handleIntl = () => {


    if(inputData === 'sair') {

      setPast((prev) => ['Obrigado por usar nosso sistema, estamos a disposicao =)'])

    } else {

      setPast((prev) => [...prev, <div className="user"><p >{inputData}</p></div>])

      let check = intl(inputData);
  
      console.log(check)
  
       if( !check ) {
  
         setPast((prev) => [...prev, <p >Não consegui entender esse comando, por favor tente novamente</p>])
  
       } else {
          handleQuestion(check)
       }
  
      setInput('')
    }
 
  }

  const handleQuestion = (async (e) => {

    setPast((prev) => [...prev, <div className="user"><p>{e}</p></div>])

    if ( singles.includes(e) ) {

      let response = singleResponse(e, actualRegister);

      const checker = typeof(response);

      if (checker === 'string') {

        setPast((prev) => [...prev, <p>{response}</p>])

      } else {

        setPast((prev) => [...prev, <p>Segue informações solicitadas</p>])

        response.forEach((elem) => {
          setPast((prev) => [...prev, <p>{elem}</p>])
        })

      }

    } else {

      if(!e) {

        if ( !started ) {
          let response;
  
          response = await checker(inputData, validRegister );
          
          // eslint-disable-next-line no-unused-expressions
          response.includes('questões de segurança') ? setActualRegister(inputData) : '';
          
          response.includes('não') ? setRegister(false) : setRegister(true);
  
          setPast((prev) => [...prev, <div className="user"><p >{inputData}</p></div>])
  
          setInput('')
  
          setPast((prev) => [...prev, <p>{response}</p>])
  
          if ( response.includes('ajudar') ) {
            setStarted(true)
          }
  
        }
  
        if( isQuestion && inputData !== '' && started ) {
          setQuestion(inputData)
          setPast((prev) => [...prev, <div className="user"><p >{inputData}</p></div>])
          setInput('')
          setQuestion('')
          setIsQuestion(false)
        }   
      } else {
        handleIntent(e)
      }
    }
    
  })

  return (
    <div className="App">
    <div className="Main">
      <div className="init">
        <p>Oi sou a Ana, sua assistente virtual da Unifacig, como posso ajudar ?</p>
      </div>

      { !started ? (
        <p className="header">Digite sua matrícula para começarmos</p>
      ) : (
        <p className="header">Seu atendimento foi iniciado, digite sair para finalizar</p>
      ) }

      <div className="past">
          { pastResponses.map((item) => (
             <div className='Content'>
               {item}
             </div>
          
          ))}
      </div>

      <div className="question">
          <p>{question}</p>
      </div>

      <div className="response">
          <p>{answer}</p>
       </div>

       { actualIntent  ? (
         <div className="intentBtn">
           <p>De qual Período quer saber ?</p>
           <div className="intents">
           {  actualIntent.options.map((item) => (
         <button onClick={(e) => handleQuestion(e.target.innerHTML)} >{item}</button>
        ))  }
          </div>
          
        </div>
  
       ) : null }       

   
      { started  ? (
        <div className="btns">
          {
          intents.map((item) => (
            <button onClick={(e) => handleQuestion(e.target.innerHTML)} >{item}</button>
            ))
          }
        </div>
       
       ) : null }

    </div>
    <div className="footer" >
          <p>Digite sua mensagem aqui</p>
          <div className="row" >
            <input disabled={actualIntent.options} value={inputData} onChange={(e) => setInput(e.target.value)} />
            <button className="send" onClick={() => !started ? handleQuestion() : handleIntl()} >Enviar</button>

            { started ? (
              <button className="clear" onClick={() => handleBack()} >Limpar</button>
            ) : null }
          </div>
        
      </div>
    </div>
  );
}

export default App;
