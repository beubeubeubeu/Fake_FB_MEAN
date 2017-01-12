var express       = require('express')
var router        = express.Router()

// Spa's default route

router.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../views') })
});

module.exports = router;
