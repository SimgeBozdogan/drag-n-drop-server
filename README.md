# Installing Dependencies
npm i

# How to run server code ?
npm start

# You can access the swagger:
https://dragn-drop-server-458g.onrender.com/api-docs/

# MATERIALS AND METHODS
In this section, we'll go over the resources and techniques used to create the backend architecture utilizing a layered methodology, more especially the Route-Controller-Service-Model structure.
<br>
Materials: The following materials were used in the backend architecture's implementation:
<br>
Node.js: The server-side runtime environment for JavaScript execution.
<br>
Express: A well-liked Node.js web application framework that offers a comprehensive range of tools for creating APIs.
<br>
A cloud-based database service called MongoDB Atlas is utilized to store and manage the data for the application.
<br>
A library used to hash passwords throughout the registration process is bcryptjs.
<br>
We created endpoints and specified their requirements using the RESTful API design, development, and documentation tool Swagger.
<br>
Layered Architecture: The Route-Controller-Service-Model structure was used to create a layered architecture for the backend. This architecture encourages concern separation and improves the application's maintainability and scalability. These are the various layers' descriptions:
<br>
a.	Routes: The Routes layer is in charge of defining the API endpoints and associating them with the appropriate controllers. It manages incoming requests and routes them to the proper controller operations.
<br>
b.	Controllers: The application's business logic is contained in the Controllers layer. It interacts with the Services layer, processes the data, and accepts requests from the Routes layer to carry out the required tasks.
<br>
c. Services: The application's main functionality is contained in the Services layer. In addition to carrying out data manipulation and validation, it interacts with the Models layer to access the database. It also implements the business logic. It guarantees the division of duties and encourages code reuse.
<br>
d.	Models: This layer describes the data schema and offers a way to communicate with the database. It controls database processes such data querying, inserting, updating, and deletion, as well as defining the structure of the data entities.
<br>                                                                         
Methodology: The backend architecture was developed using an approach that adheres to the agile software development principles. It involves the subsequent actions:
<br>
a. Requirements Gathering: Through conversations and project scope analysis, the requirements for the backend functionality were discovered.
<br>
b. Design and Planning: The project specifications guided the selection of the layered architecture, as well as the particular technologies and libraries specified above. Each layer's layout and construction were planned properly.
<br>
c. Implementation: The Route-Controller-Service-Model structure was used to implement the backend functionality. Each layer was created independently, putting an emphasis on modularity and proper code organization.
<br>
d. Integration: To produce a unified web application, the frontend components and backend architecture were combined. Using applications like Postman or Swagger, API endpoints were tested and validated.


