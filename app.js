// const chalk = require('chalk')
const yargs = require('yargs')
const studentsData= require('./studentsData.js')
// ---------------------------------------------------------------- //
// add a new student data command
yargs.command({
    command: 'add',
    describe: 'add a new student data describe',
    builder: {
        id: {
            describe: 'student ID',
            demandOption: true,
            type: "number"  
        },
        name:{
            describe:'student name',
            demandOption: true,
            type:'string'
        },
        grade:{
            describe:'student grade',
            demandOption: true,
            type:'number'
        },
        comment:{
            describe:'comment',
            type:'string'
        }
    }, //builder
    handler(argv){
        studentsData.addStudents(argv.id,argv.name,argv.grade,argv.comment)    
    }
}) //command add end
// ---------------------------------------------------------------- //
// delete a student data by ID command
yargs.command({
    command:'delete',
    describe:'delete a student data by ID describe',
    builder:{
        id:{
            describe:'student ID',
            demandOption:true,
            type:'number'
        }
    },
    handler(argv){
        //console.log('delete command')
        studentsData.deleteID(argv.id)
    }
}) //command delete end
// ---------------------------------------------------------------- //
// read a student data by ID command
yargs.command({
    command: 'read',
    describe:'read a student data by ID ',
    builder:{
        id:{
            describe:'student ID',
            demandOption:true,
            type: "number"
    }
},
    handler(argv){
        // console.log('read')
        studentsData.readStudent(argv.id)
    }
}) //command read end
// ---------------------------------------------------------------- //
// list all students data command
yargs.command({
    command: 'list',
    describe:'list all students data by ID',
    handler(){
        studentsData.listStudents()
    }
}) //command list end
// ---------------------------------------------------------------- //



// check yargs
// console.log(yargs.argv)
yargs.parse()
