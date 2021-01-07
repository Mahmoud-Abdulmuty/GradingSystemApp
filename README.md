## Grading System App
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a simple Grading System App using Node.js in which we can Add an (ID,Name,Grade,Comment)for the students data, Remove a student data by ID, Read a specific a student data and can List all the students data from the file. All data are saved in the JSON file.
	
## Technologies
Project is created with
* Nodejs
	
## Setup
A. To run this project, install it locally using npm:

```
$ npm i
```
then
 B. For Adding an ID  
 
    ```
       $ node app.js add --id=123 --name="student1" --grade=123 --comment="good" 
    ```     
      
   **New Student data added!**  
            
 C. For Removing a student data by id  
 
     ```    
       $ node app.js remove --id=123
    ```
    
   If ID found then **Student removed!** if not then **No ID found!** 
         
 D. For Reading a Specific student data by ID  
 
    ``` 
       $ node app.js read --ID=1 
    ```  
    
   If student found then **id="123" -- name="student1" -- grade=12 -- comment="good"** if not then **No ID found!**
            
  E. For Listing all the students data 
  
    ``` 
       $ node app.js list 
    ```   
    
   **Your students - student 1, student 2, student 3** 
    
   **JSON FILE**: In which All Students data got saved!
   
    ```
    
    [
       {
          "id": 123,
          "name": "Student1",
          "grade": 12,
          "comment": "good"
        },
      {
          "id": 123,
          "name": "Student2",
          "grade": 12,
          "comment": "good"
        },
      {
          "id": 123,
          "name": "Student3",
          "grade": 12,
          "comment": "good"
        },
      {
          "id": 123,
          "name": "Student4",
          "grade": 12,
          "comment": "good"
        }
    ]
    
    ```
## Developer 
* **[Mahmoud Abdulmuty](https://www.linkedin.com/in/mahmoud-abdulmuty/)**
