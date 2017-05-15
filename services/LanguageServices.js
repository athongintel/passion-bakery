var fs = require('fs');
var path = require('path');

const languageDir = './languages/';

var LanguageServices = {
    languages : []
};

fs.readdir(path.join(__dirname, languageDir), function(err, files){
    if (files)
        files.forEach(function(file){
            try{
                var lang = require(path.join(__dirname, languageDir, file));
                if (lang.name){
                    LanguageServices.languages.push(lang);
                    console.log('language found: ' + file);
                }
                else{
                    console.log('language file: ' + file + ' bad format');
                }
            }
            catch(e){
                console.log('error require: '  + file);
                console.log(e);
            }
        });
    else{
        console.log(err);
    }
});

module.exports = LanguageServices;

