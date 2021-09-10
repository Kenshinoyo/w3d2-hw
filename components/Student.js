import React from 'react';
import Score from './Score';

const Student = (props) => {

    if (props.showGrade) {
        return (
            <div>
                <h1> {props.student.name} </h1>

                {props.student.scores.map(score => {
                   return <Score date={score.date} score={score.score} />
                })
                }
            </div>)
    }

    else {
        return (
        <div>
            <h1> {props.student.name} </h1>
            <p> {props.student.bio} </p>
        </div>
    );
    }   
};

export default Student;