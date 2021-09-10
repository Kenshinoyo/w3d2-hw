import React, { useState } from 'react';
import { studentsArray } from '../data';
import Student from '../components/Student';

const Roster = () => {

    const [studentData] = useState({
        students: studentsArray
    })
    const studentsList = studentData.students.map(student => <Student student={student} name={student.name} showGrade={false} />)

    return (
        <div className = "roster">
            
            {studentsList}

        ROSTER COMPONENT
        
        </div >
    )
}


export default Roster