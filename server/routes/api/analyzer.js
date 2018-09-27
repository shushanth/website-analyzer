/**
 * @shushanth
 * analyzer router configuration
 */

const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const requestPromise = require('request-promise');

const utils = require('../utils');

const router = express.Router();

const parseWebUrl = (req, res) => {
  let requestOptions = {
    uri: req.body.url,
    transform: (body) => cheerio.load(body)
  };

  requestPromise(requestOptions)
    .then((cheerio$$) => {
      console.log(' parsing the results for the ' + requestOptions.uri);
      let htmlRoot = cheerio$$.root().html();
      let doctypeVersion = utils.getDoctypeVersion(htmlRoot);
      let headingLevels = utils.getHeadingWithLevels(cheerio$$);
      let loginFormExists = cheerio$$('body').find('form').attr('method');
      let responseConfig = {
        doctypeVersion,
        headingLevels,
        pageTitle: cheerio$$('head').find('title').text().trim(),
        linkLevels:utils.getDocumentLinksLevels(cheerio$$),
        loginFormExists: !!(loginFormExists && loginFormExists.toLowerCase() === "post")
      };
      res.send(responseConfig);
    })
    .catch((error) => {
      const { statusCode, message } = error;
      res.send({ statusCode, message})
    })
};

router.post('/urlAnalyzer', parseWebUrl);

module.exports = router;
