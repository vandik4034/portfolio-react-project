// frontend/netlify/functions/myFunction.js

exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from serverless function!" }),
    };
  };
  