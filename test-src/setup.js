var jsdom = require('jsdom');

global.screen = {}

if(!global.document) {
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.defaultView;
    global.navigator = {userAgent: 'node.js'};
}