# Rubicon-Backend-Test
The RESTFUL API for a blog post type of application.

## FEATURES:
- Creating a blog post
- Reading a blog post
- Updating a blog post
- Deleting a blog post
- Listing all blog posts by tags
- Filtering all blog posts by tags
- Listing all the tags available
- Creating a comment 
- Reading a comment
- Deleting a comment

USED LANGUAGES:
- NODE.JS (Typescript)

DATABASE:
- MySQL

TESTING APPLICATION:
- Postman

DOUCMENTATION TOOL/S:
- Postman

DATABASE APPLICATION:
- SQLyog

## HOW TO RUN APPLICATION

### CAUTION: YOU MUST HAVE NODE INSTALLED ON YOUR MACHINE. WITHOUT IT, YOU CANNOT RUN THE JS FILE AS SPECIFIED BELOW
### ----------------------------------------------------------------------------------------------------------------
### STEP 1

Clone the repository from github into the preffered IDE. All the packages and modules are present in the github repository so there is no need to install any packages

![Picture 1](https://user-images.githubusercontent.com/76923830/205899246-e063d210-4374-4810-820a-24aef862d9dd.JPG)
![Picture 2](https://user-images.githubusercontent.com/76923830/205899408-9ad180ab-51f7-4490-8556-aa22687e24e2.JPG)

### STEP 2

Once you have the cloned repository in your prefered ID. You can run the application in two ways:

### OPTION 1: If you're using VS Code

You can open a new terminal in visual studio code and type in ``` node app.js ```

![Picture 3](https://user-images.githubusercontent.com/76923830/205900803-d0be475f-b13a-4746-acbf-be6553f83457.png)
![Picture 4](https://user-images.githubusercontent.com/76923830/205900827-8f3a981f-43a9-44dc-b0af-4fee2d89f68c.JPG)

### OPTION 2: If you're using IDE that does not have an integrated terminal

You can open Command Prompt on Windows (cmd) or A linux terminal on your Linux machine (Ctrl+Alt+T) in order to run the program. First you must navigate to your cloned repository folder.

EXAMPLE COMMAND PROMPT: In command prompt type in ``` cd "Path to your folder" ```, for example ```cd "C:\Users\pc\Desktop\Repository Folder" ```. After this line of code, once you are in the repository folder which houses the app.js, you run the line of code ``` node app.js ``` to start the program.

![Picture 5](https://user-images.githubusercontent.com/76923830/205904425-bdf9cd78-af6a-4c23-b785-30bb3c591f55.JPG)

On a linux machine, you have to right click your repository folder and press the command ``` Open in Terminal ```. After that just type in ``` node app.js ```.

![Picture 6](https://user-images.githubusercontent.com/76923830/205904445-44082d90-3541-4e76-8900-a40ca653033d.png)

### STEP 3: Connecting the database

If you can notice, the datbase connection for this project relies on the PhpMyAdmin localhost. Meaning that after you install PhpMyAdmin, you have to take your PhpMyAdmin credentials and replace the following lines of code with your credentials and under the following lines of code:
```
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'task'
})

```
You must replace the ``` user ``` and ``` password ``` in order for the connection to be established, otherwise the code with throw an error.

### STEP 4: Creating the database

In the repository, you can notice that there is a folder called database. It is located in:

├── Repository Folder
    ├── database
        ├── Task.sql

This sql file contains the entire database with its corresponding example data. You can copy all of the text by pressing ``` Ctrl + A ``` which will then select all the lines of code from the sql file. The sql file is one large query that after you copy it, you can go to PhpMyAdmin and select the section called ``` SQL ```

![Picture 7](https://user-images.githubusercontent.com/76923830/205908927-a378d9cd-b270-4313-81b7-bb0e9ece4aad.JPG)

After you click on the SQL tab, you insert the data into the query box

![Picture 8](https://user-images.githubusercontent.com/76923830/205908931-ba132817-6996-4d89-9692-98a32430ef4a.JPG)

After you press the button that starts the query, you will have a new database one the left hand side and a confirmation that the database was created.

![Picture 9](https://user-images.githubusercontent.com/76923830/205908936-2e4e4e24-24eb-4f8f-9d87-fa872ba9b67c.JPG)

### STEP 4: Using Postman

After you have enabled the database and tested to see if the application can run on your machine, you can open Postman in the application version as shown in the picture below

![Picture 10](https://user-images.githubusercontent.com/76923830/205910324-d3951a11-8c92-456e-8b6c-971c2e62c959.JPG)

Or it can be opened from a link [Postman](https://postman.com).

After Postman is opened, you can press the button create new as shown in the picture below



After you press that button a new window will open which will offer you what new project you want to create. You can press the HTTP request button as shown in the picture below



After the button for a new HTTP request is pressed, you are gonna be greeted with this display



### NOTE: Your app.js must be running
---------------------------------------------------
After you ensure that your app.js is running, you can test an api. In this picture for example the api that was tested was ``` localhost:3000/api/posts ``` with the ``` GET ``` request. As you can see there are some results displayed

