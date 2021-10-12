'use strict'

const patients = [
   { id: 1, nome: 'Maria', dataNascimento: '1984-11-01' },
   { id: 2, nome: 'Joao', dataNascimento: '1980-01-16' },
   { id: 3, nome: 'Jose', dataNascimento: '1998-06-06' }
]
module.exports.showPatients = async event => {
 return {
   statusCode: 200,
   body: JSON.stringify(
     {
       patients
     },
     null,
     2
   )
 }
}