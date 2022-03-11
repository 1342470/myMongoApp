var express = require('express');
var router = express.Router();
fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
// router.post('/test', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.post('/test', function (req, res, next) {
  fs.writeFile('writefile.txt', 'file contents', 'utf8', (err) => {
    console.log("Wrote to file writefile.txt");
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
