/**
 *  @author: shushanth
 *  @description: express server
 *  run over HTTPS protocol: please create 'key.pem' and 'cert.pem' files in **root* directory of the folder with below scripts
 *
 *    *** self signed certificate: $ openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
 *    *** remove password from key: $ openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem
 *    *** set passphrase in credentials config object to the created passphase
 */

const http        =    require('http');
const https       =    require('https');
const fs          =    require('fs');
const express     =    require('express');
const morgan      =    require('morgan');
const bodyParser  =    require('body-parser');
const path        =    require("path");

const home        =    require('./routes/home');
const analyzer    =    require('./routes/api/analyzer');


//express app
const webAnalyzerApp = express();

/**
 * un-comment the below snippet of code to run over https,
 * NOTE: make sure to create key.pem and cert.pem as aforementioned.
 */

// let key = fs.readFileSync(path.resolve(__dirname, '../key.pem'), 'utf8');
// let cert = fs.readFileSync(path.resolve(__dirname, '../cert.pem'), 'utf8');
// let credentials = { key, cert, passphrase: 'Google' };

webAnalyzerApp.set('HTTP_PORT', (process.env.PORT || 3000));
webAnalyzerApp.set('HTTPS_PORT', (process.env.PORT || 5000));

webAnalyzerApp.use('/', express.static(__dirname + '/../dist'));


webAnalyzerApp.use(bodyParser.json());
webAnalyzerApp.use(bodyParser.urlencoded({ extended: true }));

webAnalyzerApp.use(morgan('dev'));

//routes
webAnalyzerApp.use('/', home);
webAnalyzerApp.use('/api', analyzer);



const httpServer = http.Server(webAnalyzerApp,
    console.log('app listenting...'+  'http//:localhost:' + webAnalyzerApp.get('HTTP_PORT')));

httpServer.listen(webAnalyzerApp.get('HTTP_PORT'));

/**
 * un-comment the below snippet of code to run over https,
 * NOTE: make sure to create key.pem and cert.pem as aforementioned.
 */

// const httpsServer = https.Server(credentials, webAnalyzerApp,
//     console.log('app listenting...'+ 'https//:localhost:' + webAnalyzerApp.get('HTTPS_PORT')));
// httpsServer.listen(webAnalyzerApp.get('HTTPS_PORT'));



