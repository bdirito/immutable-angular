# Immutable Angular

Immutable Angular is a set of helpers to allow better interaction between [Immutable.js](https://github.com/facebook/immutable-js) and Angular, to be used with more than just primitive data, and to allow for more complex use cases.

# Demo

```javascript
var sampleApp = angular.module('sampleApp', ['mutable']);

function SampleCtrl($scope) {
  $scope.list = Immutable.fromJS([{name: 'Ragnar'}, {name: 'Rollo'}, {name: 'Ecbert'}]);
}

sampleApp.controller('SampleCtrl', SampleCtrl);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body ng-app="sampleApp" ng-controller="SampleCtrl">
<ul>
  <li ng-repeat="viking in list | mutable">
    {{viking.name}}
  </li>
</ul>
<script src="/javascripts.js"></script>
</body>
</html>
```

### Result

* Ragnar
* Rollo
* Ecbert

# License

MIT