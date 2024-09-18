The backend of the superhero-themed grievance management system is built using Node.js with Express to handle API endpoints and MongoDB for data storage. The entry point,
server.js, is responsible for connecting to the MongoDB database using mongoose and setting up the necessary routes for managing grievances.
The grievanceModel.js file defines the schema for storing grievance data, including fields such as the user’s name, contact information,
and grievance description. The grievanceController.js handles the core API logic for creating, retrieving, updating, and deleting grievances. API routes include a POST request to submit new grievances, 
a GET request to retrieve the list of all grievances, a PUT request for updating grievance status or priority,and a DELETE request to remove specific grievances from the database.
Email notifications are set up using Nodemailer ensuring that the superhero receives an email whenever a new grievance is submitted.
Environment variables, such as database connection strings and email service credentials, are securely managed using the dotenv library. 
This structure ensures smooth communication between the frontend and backend, providing secure API endpoints and efficient handling of data.
