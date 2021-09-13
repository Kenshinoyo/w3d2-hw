import React from 'react';

const Score = (props) => {
    return (
        <div>
            <p> 
                {/*- Using props, the date, and the scores of the students 
                are accessed from the "studentData" state definited in the <Roster/> component. */}
                Date: {props.date}    
                Score: {props.score} 
            </p>
        </div>
    );
};

export default Score;