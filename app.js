
const yargs = require('yargs')
const student =require('./students.js')



yargs.command({
    command:'add',
    describe:'',
    builder:{
        id:{
            describe:'',
            demandOption:true,
            type:'string'
        },
        name:{
            describe:'',
            demandOption:true,
            type:'string'
        },
        grades:{
            describe:'',
            type:'array',
            demandOption:true,
        }
    }
    ,
    handler:(argv)=>{
        const grades =argv.grades.split(',')
        const total =grades.reduce((all,elem)=> parseFloat(all) +parseFloat(elem) )
        const name =argv.name
        const id =argv.id

       student.addStudent(id,name,grades,total)

    }
})

yargs.command({
    command:'delete',
    describe:'',
    builder:{
       id:{
        describe:'',
        demandOption:true,
       }
    },
    handler:(argv)=>{
        student.deleteStudent(argv.id)
    }
})
yargs.command({
    command:'list',
    describe:'',

    handler:(argv)=>{
        student.listStudents()
    }
})
yargs.command({
    command:'*',
    describe:'',

    handler:(argv)=>{
        console.log('not a command')
    }
})
yargs.parse()