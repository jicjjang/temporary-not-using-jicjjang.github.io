require('ts-node').register();

const { onCreateNode, createPages } = require('./src/configs/gatsby-node');

exports.onCreateNode = onCreateNode;
exports.createPages = createPages;
