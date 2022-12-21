# Group1-NAJ-Clothing

## About The Site
  NAJ Clothing is an e-commerce site built with ReactJS for the front end and Java Spring Boot for the back.
  Full list of tecnhologies used:
  * Front End:
    - React
    - TypeScript
    - Context API
    - Axios
    - Styled Components 
    - Material UI for Icons
  * Back End:
    - Java
    - Spring Data
    - Hibernate
    - Lombok
  * Database:
    - PostgreSQL
    - Docker

## Setup

1. Clone this directory to your machine. ```git clone https://github.com/221024-Java-React/Group1-NAJ-Clothing.git```
2. CD into the front end folder and install dependencies ```cd Group1-NAJ-Clothing/react-frontend && npm i```
3. After package downloads complete run ```npm start``` to launch the site. At this point you will have the barebones site up and will need to get the back end running.
   * Be sure to have NodeJS and NPM installed.
4. Make a new terminal instance and cd into ```spring-boot-backend```
5. Now you will have to set enviornment variables in order to get the back end connect to the postgres database.
6. Create a database instance using DBeaver, or any other SQL tool. You will need to make sure that the url is set up as a ```jdbc:postgresql``` connection.
7. Once setup you will need to set your enviornment variables for ```$DB_URL``` ```$DB_USERNAME``` and ```$DB_PASSWORD```.
8. When completed, you can then start the Spring Boot project with the command ```mvn spring-boot:run```
    * If maven is not installed, you will need to install it in order to get access to the 'mvn' command.
9. The connections have been made and now you can enter in products in JSON format to the endpoint with the use of Postman ```http://localhost:${port_number}items/create``` as a POST request.

  ###### JSON Format 
                     {
                     "name": ${some_string},
                     "price": ${some_number},
                     "description": ${some_string},
                     "imageUrl": ${some_string}
                     }

10. You have now completed the set up. Enjoy the features.

