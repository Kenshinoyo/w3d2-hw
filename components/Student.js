import React from 'react';
import Score from './Score'; //<--The <Score/> component is imported for the sake of having the applicable data
                            //available for use in the if/else statement below

const Student = (props) => { //<-- This functional component is responsible for the return of the applicable
                            //needed for whatever page you're visiting.

    if (props.showGrade) { //<--Conditional statement used to render specific data depending on what's requested. Props within the
                        //function's argument can be named whatever you want, but in this case, is named "showGrade" for the sake of 
                        // knowing what the props is for. 
        return (
            
            /* This syntax is to ensure that a constant set of data(a student's name) 
            is rendered with the unique data requested. */

            <div>   
                <h1> {props.student.name} </h1>

                {props.student.scores.map(score => { //Using props, the custom "student" key created in the "studentList" variable defined
                                                    //in the <Roster/> component, is accessed to return the scores of the students 
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

