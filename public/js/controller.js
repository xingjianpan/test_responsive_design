

function AppCtrl($scope){

    $scope.sections = [
        {
        	name: 'Clients',
        	image: '01_Thumbs_mingrundlov.png'
        },
        {
        	name: 'Employees',
        	image: '01_Thumbs_jviewz.png'
        },
        {
        	name: 'Others',
        	image:'01_Thumbs_revelator.png'
        },
        {
        	name: 'Clients',
        	image: '01_Thumbs_mingrundlov.png'
        },
        {
        	name: 'Employees',
        	image: '01_Thumbs_jviewz.png'
        },
        {
        	name: 'Others',
        	image:'01_Thumbs_revelator.png'
        },
        {
        	name: 'Clients',
        	image: '01_Thumbs_mingrundlov.png'
        },
        {
        	name: 'Employees',
        	image: '01_Thumbs_jviewz.png'
        },
        {
        	name: 'Others',
        	image:'01_Thumbs_revelator.png'
        },
        {
        	name: 'Clients',
        	image: '01_Thumbs_mingrundlov.png'
        },
        {
        	name: 'Employees',
        	image: '01_Thumbs_jviewz.png'
        },
        {
        	name: 'Others',
        	image:'01_Thumbs_revelator.png'
        },

 




        ];

    $scope.setMaster = function(section) {
        $scope.selected = section;
    }

    $scope.isSelected = function(section) {
        return $scope.selected === section;
    }


    $scope.hoverIn = function(){
        this.hoverShow = true;
    };

    $scope.hoverOut = function(){
        this.hoverShow = false;
    };


	 
}