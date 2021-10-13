'use strict'
import dynamoDb from './dao'

module.exports.showPatients = async (event) => {
  try {
    let data = await dynamoDb.scan(params).promise()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: error.statusCode ? error.statusCode : 500,
      body: JSON.stringify(
        {
          error: error.name ? error.name : 'Exception',
          message: error.message ? error.message : 'Unknown error',
        },
        null,
        2
      ),
    }
  }
}

module.exports.showPatient = async (event) => {
  const { patientId } = event.pathParameters

  const patient = patients.find((component) => component.id == patientId)

  if (!patient) {
    return {
      statusCode: 404,
      body: JSON.stringify(
        {
          error: 'Not found',
        },
        null,
        2
      ),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        patient,
      },
      null,
      2
    ),
  }
}
