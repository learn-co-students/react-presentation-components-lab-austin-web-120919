// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component{

    constructor(){
        super();
        this.state = {
            mood: 'happy'
        }        
    }

    toggleMood = () => (
         this.state.mood === 'happy' ? 'sad' : 'happy'
    )

    handleClick = () => {
        //console.log(this.toggleMood())
        this.setState({
            mood: this.toggleMood()
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

}

export default SimpleComponent