function setItem(item) {
    displayModal(item)
}

async function controller($scope, rapidApi) {
    $scope.list = await rapidApi.getServers()
    $scope.setItem = setItem
    $scope.item = {}
    $scope.$apply()
}

app.controller('contentController', ['$scope', 'rapidApi', controller])