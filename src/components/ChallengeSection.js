import React from 'react';
import TestContainer from './TestContainer';
const ChallengeSection = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    handleUserInput,
    startAgain
}) => {

    return ( 
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className='challenge-section-header'>Take a speed test now!</h1>
            <TestContainer 
                selectedParagraph={selectedParagraph} 
                timeRemaining={timeRemaining} 
                timerStarted={timerStarted} 
                words={words} 
                characters={characters} 
                wpm={wpm} 
                testInfo={testInfo} 
                handleUserInput={handleUserInput}
                startAgain={startAgain}
                />
        </div>
     );
}
 
export default ChallengeSection;