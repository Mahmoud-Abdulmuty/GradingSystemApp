const fs = require('fs')
const chalk = require('chalk')
// adding the students data
const addStudents = (id,name,grade,comment) =>
    {
        const students = loadStudentsData()
        const duplicatedId = students.find((student)=> student.id === id)
    // another logic for duplicated -> uses (find) instead of (filter)
        if(duplicatedId === undefined){  
                students.push({
                    id: id,
                    name: name,
                    grade: grade,
                    comment: comment
                })
                saveStudentsData(students)
                console.log(chalk.green('New Student added Successfully!'))
            }  
        else{
                console.log(chalk.red('ID already Taken!, please insert a new one'))
            }
    }//add note 

// deleting ID
const deleteID = (id) =>
    {
        const students = loadStudentsData()
        const IDsToKeep= students.filter( (student) => student.id !== id )
        
        if(students.length > IDsToKeep.length){
            console.log(chalk.green('ID deleted!'))
            saveStudentsData(IDsToKeep)
        }
        else{
            console.log(chalk.red('No ID found!'))
        }
        saveStudentsData(IDsToKeep)
    }

// saving the data
const saveStudentsData = (students) =>
    {
        const dataJSON=JSON.stringify(students)
        fs.writeFileSync('studentsData.json', dataJSON)
    }

// loading id
const loadStudentsData= () =>
    {
        try{
            const dataBuffer = fs.readFileSync('studentsData.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        }
        catch(e){
            return []
        }
    }//try & catch for error handling

//listing the notes
const listStudents = () => 
    {
    const students = loadStudentsData()

    console.log(chalk.blue('Students Data'))

    students.forEach ( (student) => {
        console.log("id is " + student.id)
        console.log("name is " + student.name)
    });
    }

//Reading the Students data by ID
const readStudent = (id) =>{
        const students = loadStudentsData()

        const studentRead = students.find( (student) => student.id === id)

        if(studentRead === undefined){
            console.log(chalk.red('No ID found'))
        }
        else{
            console.log(chalk.green("student id is : " + studentRead.id))
            console.log(chalk.red("student name is : " + studentRead.name))   
        }
    }

//exporting the function 
module.exports=
    {
        deleteID: deleteID,
        addStudents: addStudents,
        listStudents:listStudents,
        readStudent:readStudent
    }