var bll		= require('../bll/bll');
var router 	= require('express').Router();

router.post('/retrieve', function(req, res) {
	var myModule = new bllModule.module();
	myModule.tokens.retrieve(req, res);
});

module.exports = router;