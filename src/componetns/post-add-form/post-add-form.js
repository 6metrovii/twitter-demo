import React, { Component} from "react";
import "./post-add-form.sass"

export default class tPostAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    } 
    
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text !== ''){
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            })
        }
    }
    render(){
        return(
            <form className="form"
                onSubmit={this.onSubmit}>
                <input className="post-input"
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    onChange={this.onValueChange}
                    value={this.state.text}/>
                <button className="post-button"
                    type="submit">
                Добавить</button>
            </form>
        )
    }
}

