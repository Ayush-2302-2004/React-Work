import { Component } from "react"
import React,{components} from React
import "./Game.css"

class Game extends Component{
    constructor(props){
        super(props)
            this.state={
                    playerVal:null,
                    compVal:null,
                    playerScore:0,
                    compScore:0
            };
        
    logic=(playerVal,compVal)=()=>{ 
        if(playerVal == compVal){
                return 0;
        }
        else if((playerVal == "ROCK" && compVal=="SCISSOR")
            (playerVal == "SCISSOR" && compVal=="PAPER")
        (playerVal == "PAPER" && compVal=="ROCK")
        ){
                return 1;
        }else {
            return -1;
        }
    }
    decision=(  playerChoice)=>{
        const choices=["ROCK","SCISSOR","PAPER"];
        const compChoice=choices[Math.floor(Math.random()*choices.length)];
        const val=this.logic(playerChoice,compChoice)

        if(val==1){
               console.log("Hello")
               this.setState=({
                playerVal:playerChoice,
                compVal:compChoice,
                playerChoice:this.state.compScore+1
               })
        if(val==-1){
            console.log("Hello")       
            this.setState=({
                playerVal:playerChoice,
                compVal:compChoice,
                compScore:this.state.compScore+1
            })
            }
            else {
                    console.log("Hello")
                    this.setState=({
                        playerVal:playerChoice,
                        compVal:compChoice
                    })
            }
        }
    }

    }
    render(){
        const{playerChoice,playerVal,compChoice,compVal}=this.state;
        return(
            <div className="container">
            <h1>Welcome to the Rock,Paper and Scissor Game</h1>
            <div>
                


            </div>
        </div>
        )
    }
}