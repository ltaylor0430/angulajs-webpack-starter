//quote entrypoint
//bootstrap angularjs
//import app dependencies
//import modules
import '../application';
import angular from 'angular';
import {QuoteApp} from './quote.module';
angular.element(document).ready(function () {
    angular.bootstrap(document, [QuoteApp.name]);
});