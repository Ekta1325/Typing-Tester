import React from 'react';
import ChallengeDetailsCards from './ChallengeDetailsCards';
import TypingChallenge from './TypingChallenge';
const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    handleUserInput
}) => {
    return ( 
        <div className='typing-challenge-container'>
            {/* Details */}
            <div className="details-container">
                {/* Words typed */}
                <ChallengeDetailsCards cardName="Words" cardValue={words}/>
                {/* Characters typed */}
                <ChallengeDetailsCards cardName="Characters" cardValue={characters}/>
                {/* speed */}
                <ChallengeDetailsCards cardName="Speed" cardValue={wpm}/>
                
            </div>
            {/* The real challeneg */}
            <div className="typewriter-container">
                <TypingChallenge 
                    timerStarted={timerStarted} 
                    timeRemaining={timeRemaining} 
                    selectedParagraph={selectedParagraph} 
                    testInfo={testInfo} 
                    handleUserInput={handleUserInput}/>
            </div>
        </div>


     );
}
 
export default TypingChallengeContainer;
