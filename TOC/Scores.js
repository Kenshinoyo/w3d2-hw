import React, { useState } from 'react';
import { studentsArray } from '../data';
import Student from '../components/Student';

const Scores = () => {
    
    const [studentData] = useState({
        students: studentsArray
    })
   
    // - Using syntax similar to what was used in the <Roster/> component, a variable is created
    // for the sake of accessing the score data of the students
    const scoreList = studentData.students.map(student => <Student student={student} name={student.name} showGrade={true} />)

    return (
        <div className = "scores">
            
            {scoreList} {/*<--When this variable is called, the data returned will be the name of the students, and their scores. */}

        SCORES COMPONENT
        
        </div >
    )
}


export default Scores