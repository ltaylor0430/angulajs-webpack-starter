//policy entrypoint
//bootstrap angularjs
//import app dependencies
import '../application';
//import modules
import { PolicyApp } from './policy.module';

angular.element(document).ready(function () {
    angular.bootstrap(document, [PolicyApp.name]);
});