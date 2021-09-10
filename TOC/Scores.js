import React, { useState } from 'react';
import { studentsArray } from '../data';
import Student from '../components/Student';
import Score from '../components/Score';

const Scores = () => {
    
    const [studentData] = useState({
        students: studentsArray
    })

    
    const scoreList = studentData.students.map(student => <Student student={student} name={student.name} showGrade={true} />)

    return (
        <div className = "scores">
            
            {scoreList}

        SCORES COMPONENT
        
        </div >
    )
}


export default Scores