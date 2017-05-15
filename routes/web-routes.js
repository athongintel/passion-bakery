var express = require('express');
var LanguageServices = require('../services/LanguageServices.js');

var router = express.Router();

router.use(require('../middlewares/language-middleware.js'));
router.route('/')
	.get(function(req, res){
		//-- prepare rendering object
		var ro = {};
		ro.languages = LanguageServices.languages;
		ro.preferedLanguage = req.preferedLanguage;
		ro.t = LanguageServices.languages[req.preferedLanguage].phrases;
		ro.carousel = ['Mỗi chiếc bánh là kết tinh của sự đam mê', 'Vệ sinh và an toàn' , 'Trang thiết bị hiện đại từ châu Âu'];
		ro.pinned_products = ['Su kem', 'Trứng muối', 'Bánh trung thu', 'Macron', 'Bánh mỳ hoa cúc', 'Quy hạnh nhân'];
		ro.chefInfo = {
			'title': 'Chào mừng bạn đến với Passion Bakery',
			'content': 'Là một người mẹ và người vợ, tôi luôn muốn mang lại điều tốt đẹp nhất cho gia đình bé nhỏ của mình. Còn gì bằng nguồn thực phẩm tươi ngon bổ dưỡng do chính tay mình làm ra bằng cả tâm huyết và sự hỗ trợ tuyệt vời của dàn máy móc xịn ơi là xịn cơ chứ. Hehe...'
		};
		ro.social = {
			'content': 'Theo dõi chúng tôi trên facebook'
		}
		res.render('index', ro);
	});

module.exports = router;