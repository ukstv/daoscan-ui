require("dotenv").config();

const withImages = require("next-images");
module.exports = withImages({
  target: "serverless",
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || "http://localhost:3000/graphql"
  }
});
