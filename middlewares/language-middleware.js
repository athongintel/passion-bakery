var preferedLanguage = function(req, res, next){
	if (req.session.currentUser){
		req.preferedLanguage = req.session.currentUser.preferedLanguage
	}
	else{
		req.preferedLanguage = req.cookies.preferedLanguage || 0;
	}
	next();
}

module.exports = preferedLanguage;