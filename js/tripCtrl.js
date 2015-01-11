function NamesCtrl($scope) {
    //DATA: Gautham, this is where you link the data.
    $scope.names = [
        {mode:'walking',confidence:'100%'},
        {mode:'car',confidence:'50%'},
        {mode:'walking',confidence:'100%'},
        {mode:'cycling',confidence:'30%'}
    ];

    $scope.pickImage = function(item){
    	if (item.mode == 'walking') {
    		item.img = '../walking.svg'
    		return 'walking.jpg'
    	} if (item.mode == 'car') {
    		item.img = '../car.svg'
    		return 'car.jpg'
    	} if (item.mode == 'cycling') {
            item.img = '../cycling.svg'
            return 'cycling.jpg'
        }
    };

    //Change according to datatype in actual data object and the intervals set in the app. 
    // Intervals: Green - confidence > 80 ; Yellow: 80 > confidence > 70; Red: 70 > confidence
    $scope.pickColor = function(item){
        if (item.confidence == '100%') {
            return "color : green;" 
        } if (item.confidence == '50%') {
            return "color : orange;"
        } if (item.confidence == '30%') {
            return "color : red;"
        }
    };
    //$scope.tripList = dbHelper.getUncommittedSections();
}

// Tester list item. Use as control to make sure everything is connected properly
function ListCtrl($scope) {
            $scope.id = "10001";
            $scope.message = "This works!"
            $scope.cool = function() {
            //this will have to direct to trip detail screen
                $scope.message = "I've been clicked!"
            };
}