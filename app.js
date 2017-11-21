	// create the module and name it scotchApp
    var App = angular.module('App', ['ngRoute']);
    

        //creating factory service
        App.factory('dataService', function(){
            
            var vm = {};
            
            //factory parameters

            //user credentials
            vm.username ='admin';
            vm.email='admin@test.com';
            vm.password='admin@123'; 
            vm.dataflag=false;

            //factory setter functions
            vm.setemail = function(email) {  // setting email
                vm.email = email;
            };
            vm.setusername = function(username) { // setting username
                vm.username = username;
            };
            vm.setpassword = function(password) { // setting password
                vm.password =password;
            };
            vm.setdataflag=function(dataflag){ // setting dataflag
                vm.dataflag=dataflag;
            }

            return vm;
        
        });
    
        // configure our routes
        App.config(function($routeProvider) {
            $routeProvider
    
                // route for the home page
                .when('/', {
                    templateUrl : 'pages/home.html',
                    controller  : 'mainController'
                })
    
                // route for the login page
                .when('/Login', {
                    templateUrl : 'pages/login.html',
                    controller  : 'loginController'
                })
    
                // route for the courses page
                .when('/Courses', {
                    templateUrl : 'pages/courses.html',
                    controller  : 'coursesController'
                })

                // route for the register page
                .when('/Register', {
                    templateUrl : 'pages/register.html',
                    controller  : 'loginController'
                })
        });
    
        // defining Main controller and injecting Angular's $scope
        App.controller('mainController', function($scope) {
        });
    
        // defining login controller and injecting Angular's $scope
        App.controller('loginController', function($scope, $location, dataService ) {

            //controller login/registeration parameters
            $scope.username='';
            $scope.error='';
            $scope.email='';
            $scope.password='';

            //controller functions

            // for user login
            $scope.login = function () {
            
                //checking the login crentials with dataService data object
                if($scope.email==dataService.email && $scope.password==dataService.password){
                    dataService.setdataflag(true);
                    $location.path('/Courses');
                }
                else{
                    $scope.error='Incorrect Username or Password';
                }
                
            }

            //for user registeration
            $scope.register=function () {
                
                // setting the user credentials in dataService data object
                dataService.setemail($scope.email);
                dataService.setpassword($scope.password);
                dataService.setusername($scope.username);
                dataService.setdataflag(true);
                $location.path('/Courses');

            }


        });
    
        // defining Course controller and injecting Angular's $scope
        App.controller('coursesController', function($scope, dataService) {

            //controller parameters
            $scope.today = new Date();
            $scope.date = $scope.today.setDate($scope.today.getDate() +4);
            $scope.products = [];
            $scope.error="";
            $scope.userdata=dataService.username;
            $scope.activeflag=dataService.dataflag;

            //controller functions
            
            // adding selected course to the List
            $scope.addItem = function (value) {
                if($scope.activeflag==true)
                {
                    $scope.products.push(value);
                }
                else{
                    $scope.error="Please Log in First";
                }
                
            }

            // removing selected course from the List
            $scope.removeItem = function (x) {
                if($scope.activeflag==true)
                {
                    $scope.products.splice(x, 1);
                }
                else{
                    $scope.error="Please Log in First";
                }
            }

            // Course Data - JSON Object
            $scope.contentlist=
            [
                
                {
                    category:"Bootstrap",
                    image_url:"../images/icons/bootstrap_icon.jpg",
                    description:"Popular HTML, CSS and JS framework for responsive web sites",
                },   
                {
                    category:"Angularjs",
                    image_url:"../images/icons/angularjs_icon.jpg",
                    description:"Client side JS framework for dynamic Single Page web Apps",
                },
                {
                    category:"django",
                    image_url:"../images/icons/django_icon.jpg",
                    description:"Faster and reliable Web Development Framework in Python",
                },
                {
                    category:"Mongodb",
                    image_url:"../images/icons/mongodb_icon.jpg",
                    description:"Nosql based open-source cross-platform document-oriented database",
                },
                {
                    category:"Nodejs",
                    image_url:"../images/icons/nodejs_icon.jpg",
                    description:"Open source server framework for fast and scalable network applications",
                },
                {
                    category:"Python",
                    image_url:"../images/icons/python_icon.jpg",
                    description:"Dynamic, object oriented programming language for web & desktop applications",
                },
                
               
            ];
        });