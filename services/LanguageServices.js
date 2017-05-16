var fs = require('fs');
var path = require('path');

const languageDir = './languages/';

var LanguageServices = {
    langNames: [],
    languages : {}
};

fs.readdir(path.join(__dirname, languageDir), function(err, files){
    if (files)
        files.forEach(function(file){
            try{
                var lang = require(path.join(__dirname, languageDir, file));
                if (lang.name){
                    LanguageServices.langNames.push(lang.name);
                    LanguageServices.languages[lang.name] = lang;
                    console.log('language found: ' + file);
                }
            }
            catch(e){
                console.log(e);
            }
        });
    else{
        console.log(err);
    }
});

module.exports = LanguageServices;

