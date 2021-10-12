'use strict'

const patients = [
   { id: 1, nome: 'Maria', dataNascimento: '1984-11-01' },
   { id: 2, nome: 'Joao', dataNascimento: '1980-01-16' },
   { id: 3, nome: 'Jose', dataNascimento: '1998-06-06' }
]

const AWS = require("aws-sdk")
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const params = { 
  TableName: "PATIENTS" 
}


module.exports.showPatients = async event => {

  try {
    let data = await dynamoDb.scan(params).promise()
    
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
 
  } catch (error) {
    
  }

 
}

module.exports.showPatient = async event => {
  
  const {
    patientId
  } = event.pathParameters

  const patient = patients.find((component) => component.id == patientId )

  if(!patient){
    return {
      statusCode: 404,
      body: JSON.stringify(
        {
          error: "Not found"
        },
        null,
        2
      )
    }  
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        patient
      },
      null,
      2
    )
  }
 }