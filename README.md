My implementation of this assignment is what I call the "Course Search".  In other words, I tried to make this Single Page Appilication as easy as possible 
while still maintaining the guidelines.

Application Flow Design:
-----------------------

			            |------------------|             
                	|    home.html     |		
                	|------------------|             
                          |
                          |
                        Search for Courses
                          |
                          |
                          v	
			            |-----------------|             	 	            |---------------|
                	|     Couse.html  |---To Enroll for Courses---->|   Login.html  |
                	|-----------------|<------start Enrolling-------|---------------|
			                           ^	 				                             ^
				                          \                           						\
				                           \						                           \ 
				                  Start Getting Enrolled				                New User
				                             \					   	                          \
				                              \					    	                         \	
				                               \                                 |----------------|      
       				                          \--------------------------------| Register.html  |
								                                                         |----------------|
                

Files List:
------------

	Html Files:		css files:			js files:
	index.html		style.css			app.js
      	home.html     	           
	login.html
	register.html 
	courses.html


Technical Details:
------------------
- Bootstrap and Angularjs baesd Web Application
- this Site will be loaded nicely once http-server gets started 

- Steps to install http-server and run it
Go to command prompt
- type: npm install -g http-server

now once it is installed, Start the server with a proper port.
- Go to index.html file location and open cmd then type: http-server -p9001
 
The website will be accessible on url- localhost:9001


Initial Login Check-
------------------- 

user Credentials:

username- admin
email- admin@test.com
password- admin@123

	     




