const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const params = {
  TableName: 'PATIENTS',
}

export default dynamoDb
