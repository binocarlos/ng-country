ng-country
==========

Angular factory with a list of countries

## installation

```
$ component install binocarlos/ng-country
```

## usage

```js
angular.module('myApp', [
	require('ng-country')
])

.controller('MyAppCtrl', function($scope, $countries){

	// the list of countries
	$scope.countries = $countries;
	
})
```

## license

MIT