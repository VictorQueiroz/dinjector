# dinjector

### Usage
```js
define('mymodule', function () {
	var moment = require('moment');
	
	return angular.module('app', [])
		.controller('MyAppController', function ($scope) {
			$scope.myDate = moment().format('DD MMM YYYY hh:mm');
		});
});
```