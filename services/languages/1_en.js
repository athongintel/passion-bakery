var language = {
	'name' : 'en',
	'desc' : 'English',
	'icon' : 'data:image/png;base64,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',
	'phrases' : {
		//----------A-----------
		address: 'Address',

		//----------B-----------
		

		//----------C-----------
		classes: 'Classes',
		contact_us: 'Contact us',
		//----------D-----------
		
		//----------E-----------
		
		//----------E-rror-------
		
		//----------F-----------
		
		
		//----------H-----------
		home: 'Home',

		//----------I-----------
		

		//----------L-----------
		

		//----------M-----------
		
		//----------N-----------
		
		//----------O-----------
		our_passion: 'Our passion',
		//----------P-----------
		phone: 'Phone',

		//----------R-----------
		
		//----------S-----------
		

		//----------T-----------
	

		//----------U-----------
		
		//----------W-----------
		
	}
};

module.exports = language;