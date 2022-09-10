const fs =require('fs')


const addStudent =(id,name,grades,total)=>{


    const students =getStudents();
    const isUnique =students.every(student=> student.id!= id);


    if(isUnique){
        students.push({id,name,grades,total});
        saveStudents(students)
        console.log('student add successfully')
    }else{
        console.log('student already Exit')
    }

    
}

const deleteStudent=(id)=>{

    const students =getStudents();
    const isExit =students.some(student=> student.id== id);
    
    if(isExit){

    const newStudent =students.filter(student=> student.id != id)
    fs.writeFileSync('students.json', JSON.stringify(newStudent))
    console.log('student deleted successfully')

    }else{
        console.log('student didnt Exit')
    }


}

const listStudents =()=>{
    const students =getStudents();
    students.forEach(student => {
        console.log( `${student.id} => ${student.total}`)
    });

}

const getStudents =()=>{

    try{
      const  students = JSON.parse(fs.readFileSync('students.json').toString())

      return students

    }catch(e){

        return []
    }


}
const saveStudents= (students)=>{

    fs.writeFileSync('students.json', JSON.stringify(students))
}

module.exports={
addStudent,
deleteStudent,
listStudents
}