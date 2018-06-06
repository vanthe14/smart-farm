var express = require('express')
var router = express.Router()

// Require controller modules
var home_controller = require('../controllers/homeController');

/* GET home page. */
router.get('/', home_controller.index);

router.use("/change-lang/:lang", (req, res) => { 
    res.cookie('language', req.params.lang, { maxAge: 900000 });
    res.redirect('back');
    //console.log("hear"+i18n.getLocales())
});

module.exports = router;