import React from 'react';
import TypingChallengeContainer from './TypingChallengeContainer';
import TryAgain from './TryAgain';

const TestContainer = ({
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
        <div className="test-container">
            {timeRemaining>0 ? (
                <div data-aos="fade-up" className="typing-challenge-cont">
                    <TypingChallengeContainer 
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        selectedParagraph={selectedParagraph}
                        words={words} 
                        characters={characters} 
                        wpm={wpm}
                        testInfo={testInfo} 
                        handleUserInput={handleUserInput}/>
                </div>
            ):(
            <div className="try-again-cont">
                <TryAgain 
                    words={words} 
                    characters={characters} 
                    wpm={wpm}/>
            </div>
            )}
        </div>

     );
}
 
export default TestContainer;