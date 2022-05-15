

const proxy = [
  {
    context: '/api',
    target: 'https://n1dh6vbc9g.execute-api.us-east-1.amazonaws.com/',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
