import React from 'react'
const ChallengeDetailsCards = ({cardName, cardValue}) => {
    return ( 
        <div className="details-card-container">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>

     );
}
 
export default ChallengeDetailsCards;