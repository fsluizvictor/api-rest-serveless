# Api-REST-Serveless

This repository contains a simple project that is a rest api, the principal objective is look any AWS services, how lambdas function and the service api gateway.

## About

The Serverless Framework is a free and open-source web framework written using Node. js. Serverless is the first framework developed for building applications on AWS Lambda, a serverless computing platform provided by Amazon as a part of Amazon Web Services.The Serverless Framework helps you develop and deploy your AWS Lambda functions, along with the AWS infrastructure resources they require. It's a CLI that offers structure, automation and best practices out-of-the-box, allowing you to focus on building sophisticated, event-driven, serverless architectures, comprised of Functions and Events.

## Technologies:

- NodeJS
- Serverless framework
- DynamoDB
- AWS lambda

## To run this project

Is necessary have in your machine nodejs and serverless framework installed and be registered on AWS.

Links:

- https://portal.aws.amazon.com/billing/signup#/start
- https://www.serverless.com/framework/docs/getting-started
- https://nodejs.org/en/download/

Is necessary run this command to install the dependencies:

```
npm i
```

## Principals commands

### Serverless

```
sls deploy
```

```
sls info
```

```
sls offline
```

```
 sls invoke local -f showPatients
```

```
serverless create --template aws-nodejs --path register-patient
```

### AWS

```
aws dynamodb batch-write-item --request-items file://patients.json
```

```
sls deploy
```
