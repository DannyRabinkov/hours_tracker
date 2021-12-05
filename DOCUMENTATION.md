# hours_tracker Documentation
<----The Project is Not Done YET!!---->

First download the code.

SERVER:
Open the "hours_tracker" folder and then open the terminal, change directory to folder "server", and install the node-modules (npm i).
After installing the modules you can run the server with the comend "nodemon" or "node app".
Once you run the server for the first time it will create you a MySQL DB.

I used "xampp" to access the phpMyAdmin DB.
To do the routing checks I used postman, very easy and friendly service. 

The libraries I used for the server are:
- express
- mysql2
- express-validator
- sequelize
- cors
- nodemon


ROUTES:

- create employee/employer: (POST) http://localhost:3000/api/users/addUser
- login: (POST) http://localhost:3000/api/users/login
- get all employees: (GET) http://localhost:3000/api/users/allEmployees/
- get one employee: (GET) http://localhost:3000/api/users/'enter-id-here'
- update employee: (PUT) http://localhost:3000/api/users/'enter-id-here'
- get employers: (GET) http://localhost:3000/api/users/employers
- delete employee: (DELETE) http://localhost:3000/api/users/'enter-id-here'
- add working session: (POST) http://localhost:3000/api/session/addSession
- get employee's all sessions: (GET) http://localhost:3000/api/session/'enter-id-here'



NOTES:
- Unfortunately I haven't managed the tables association yet so altho the models and the route to the Role-Value table exists, I didn't used it.
- There is no authentication YET but will be soon with "jwt".     
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    
REACT WEBAPP:
Open the "hours_tracker" folder and then open the terminal, change directory to folder "webapp", and install the node-modules (npm i).
Run the "npm start" comand to run and open the app.


NOTES:
- There is almost nothing in the app, I didn't had enough time to handle both server-side and client-side.
- The timer works almost fine (WITHOUT turning to the server) but needs an initial run, meaning it will start working from the second run. 
