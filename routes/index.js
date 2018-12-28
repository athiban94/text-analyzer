var express = require('express');
var router = express.Router();
var request = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Text Analyzer' });
});

router.post('/analyze', async function (req, res, next) {
  console.log(req.body);

  var options = {
    method: 'POST',
    uri: 'http://localhost:5000/postdata',
    body: req.body,
    json: true // Automatically stringifies the body to JSON
  };
  var result = {
    "success" : false
  }
  var sendrequest = await request(options)
    .then(function (parsedBody) {
      result.success = true;
      result.polarity = parsedBody.polarity;
      result.subjectivity = parsedBody.subjectivity;
    })
    .catch(function (err) {
      console.log(err);
    });
    res.json(result);
});


module.exports = router;
