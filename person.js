const personData = [{
  register: '1510632', 
  data: {
    name: 'Isaac Tadeu Meira',
    cpf: '11263013619',
    situacao: 'ativo',

    institutionData: [
      {
        intent:'Notas', 
        data : [
          {
            semester: 1,
            results : [
             {
               name: 'Desenvolvimento Mobile',
               note: 60,
               situacao: 'Aprovado'
             },
             {
              name: 'Desenvolvimento Web',
              note: 75,
              situacao: 'Aprovado'
             },
             {
              name: 'lógica de programacao',
              note: 50,
              situacao: 'Pendente'
            },
    
            ]
          }, 
          {
            semester: 2,
            results : [
             {
               name: 'Desenvolvimento hibrido',
               note: 60,
               situacao: 'Aprovado'
             },
             {
              name: 'Interface Homem Maquina',
              note: 75,
              situacao: 'Aprovado'
             },
             {
              name: 'Estrutura de dados',
              note: 70,
              situacao: 'Aprovado'
            },
    
            ]
          },
          {
            semester: 3,
            results : [
             {
               name: 'Desenvolvimento Mobile II',
               note: 60,
               situacao: 'Aprovado'
             },
             {
              name: 'Desenvolvimento Web II',
              note: 75,
              situacao: 'Aprovado'
             },
             {
              name: 'lógica de programacao II',
              note: 70,
              situacao: 'Aprovado'
            },
    
            ]
          }
        ]
      }, 
      
      { intent: 'Calendário de provas',  data : [
        {
          semester: 1,
          results : [
           {
             name: 'Desenvolvimento Web',
             day: '25/05/2018',
             hour: '20:00',
        
           },
           {
            name: 'Interface Homen Maquina',
            day: '25/07/2018',
            hour: '19:00',
       
           },
           {
            name: 'Desenvolvimento movel',
            day: '25/09/2018',
            hour: '21:00',
       
          },
  
          ]
        }, 
        {
          semester: 2,
          results : [
           {
             name: 'Desenvolvimento Web',
             day: '25/05/2018',
             hour: '20:00',
        
           },
           {
            name: 'Interface Homen Maquina',
            day: '25/07/2018',
            hour: '19:00',
       
           },
           {
            name: 'Desenvolvimento movel',
            day: '25/09/2018',
            hour: '21:00',
       
          },
  
          ]
        }, 
        {
          semester: 3,
          results : [
           {
             name: 'Desenvolvimento Web',
             day: '25/05/2018',
             hour: '20:00',
        
           },
           {
            name: 'Interface Homen Maquina',
            day: '25/07/2018',
            hour: '19:00',
       
           },
           {
            name: 'Desenvolvimento movel',
            day: '25/09/2018',
            hour: '21:00',
       
          },
  
          ]
        }, 
    

      ] },
      { intent: 'Pendências', data: [] },
      { intent: 'Horários', data: [
        {
          semester: 1,
          results : [ {
            day: 'Segunda-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Terca-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Quarta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Quinta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Sexta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          }]
         
        },
        {
          semester: 2,
          results : [ {
            day: 'Segunda-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Terca-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Quarta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Quinta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Sexta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          }]
         
        },
        {
          semester: 3,
          results : [ {
            day: 'Segunda-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Terca-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Quarta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Quinta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          },
          {
            day: 'Sexta-Feira',
            data: [
              { 
                name: 'Desenvolvimento Mobile',
                period: '19:00 - 21:00'
              },
              { 
                name: 'Desenvolvimento Web',
                period: '21:00 - 23:00'
              }
            ]
          }]
         
        },
       
      ] },
  
    ]
  }
}]

export default personData;