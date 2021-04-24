import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
