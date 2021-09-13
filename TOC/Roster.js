import React, { useState } from 'react';
import { studentsArray } from '../data';
import Student from '../components/Student';

const Roster = () => {

    const [studentData] = useState({ //<--This state is for the sake of accessing the student data inside the "studentsArray" created in the "data" file
        students: studentsArray //<
    })

    //- Custom variable/function set to render the mapped array contained within the "studentData" state.
    const studentsList = studentData.students.map(student => <Student student={student} name={student.name} showGrade={false} />)

        //- A custom argument is needed to access specific data within the state's array. "student" is the argument,
        //and is defined using an arrow function where the <Student/> component accesses the student object() within.
        
        //- To access the student's name, a custom "key" called "name" is created for the custom student "object" within the <Student/>
        //component. An additional check for the "showGrade" props defined in the <Student/> component is implemented as a boolean for 
        // the sake of the 
        
        //*The student object within the <Student/> component is unique, and is not the same as the "student" argument
        //listed before the arrow*

    return (
        <div className = "roster">
            
            {studentsList} {/*<--Calling the "studentList" variable will return the data accessed in the "studentData" state */}

        ROSTER COMPONENT
        
        </div >
    )
}


export default Roster

// - For the sake of this exercise, <Roster/> is considered the "main" component, 
//the component that the others "flow" through using props. 