import React, { Component } from 'react'
import './App.css';
import ChallengeSection from './components/ChallengeSection';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
const TotalTime=60;
const ServiceUrl="http://metaphorpsum.com/paragraphs/1/9";
const DefaultState={
  selectedParagraph:"",
    timerStarted:false,
    timeRemaining:TotalTime,
    words:0,
    characters:0,
    wpm:0,
    testInfo:[]
}
export default class App extends Component {
  state=DefaultState;
  fetchNewParagraph=()=>{
    fetch(ServiceUrl)
        .then(response => response.text())
        .then((data)=>{
            const selectedParagraphArray = data.split("");
            const testInfo=selectedParagraphArray.map((selectedLetter)=>{
                return{
                    testLetter:selectedLetter,
                    status:"notAttempted",
                };
            });
            this.setState({...DefaultState,testInfo,selectedParagraph:data});
        });
  }

  componentDidMount(){
    this.fetchNewParagraph();
  }

  startTimer=()=>{
    this.setState({timerStarted:true});
    const timer=setInterval(()=>{
      if(this.state.timeRemaining>0){
          //Wpm
          const timeSpent=TotalTime-this.state.timeRemaining;
          const wpm=timeSpent>0
              ? (this.state.words/timeSpent)*TotalTime
              :0;
          this.setState({
            timeRemaining:this.state.timeRemaining-1,
            wpm:parseInt(wpm),
          });
      }
      else{
        clearInterval(timer);
      }
    },1000)
  };

  startAgain=()=> this.fetchNewParagraph();

  handleUserInput=(inputValue)=>{
    if(!this.state.timerStarted){
      this.startTimer();
    }
    // 4.Update the status in the textInfo:-
    //         find out the last character in the handleUserInput and its index
    //         check if the character at same index in testInfo(state) matches
    //         Yes->corect,no->incorrect
    const characters=inputValue.length;
    const words=inputValue.split(" ").length;
    const index=characters-1;
    // 1.Handle the underflow case:-all character should be shown as unattempted
    if(index<0){
      this.setState({
        testInfo : [
          {
            testLetter:this.state.testInfo[0].testLetter,
            status:"notAttempted"
          },
          ...this.state.testInfo.slice(1)
        ],
        characters,
        words,
      });
      return;
    }

    // 2.Handle the overflow case:-early exit
    if(index >= this.state.selectedParagraph.length){
      this.setState({characters,words});
      return;
    }

    // 3.handle the backspace:-
    //        Mark the[index+1] as unattempted
    //        check for overflow case as [index+1] can go out of bound
    // (Make a copy of testInfo)
    const testInfo=this.state.testInfo;
    if(!(index===this.state.selectedParagraph.length-1)){
      testInfo[index+1].status="notAttempted";
    }
    // (check for the correct typed letter)
    const isCorrect=inputValue[index]===testInfo[index].testLetter;
    
    //Update the testInfo
    testInfo[index].status=isCorrect ? "correct" : "incorrect";

    //Update the state
    this.setState({
      testInfo,
      words,
      characters
    })
  };

  render() {
    return (
      <div className='app'>
        {/* Nav Section */}
        <Navbar/>

        {/* Landing Page */}
        <Landing/>

        {/* Challenge Section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          handleUserInput={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/* Footer */}
        <Footer/>
      </div>
    )
  }
}



