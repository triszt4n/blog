const { useGatsbyNode } = require('gatsby-plugin-ts-config')

// eslint-disable-next-line global-require
module.exports = useGatsbyNode(() => require('./config/gatsby-node.ts'))
