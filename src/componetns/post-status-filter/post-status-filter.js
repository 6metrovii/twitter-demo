import React, {Component} from "react";
import './post-status-filte.sass'


export default class PostStatusFilter extends Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label:'Понравилось'}
        ]
    }
render(){
    const buttons = this.buttons.map(({name, label}) => {
        const {filter, onFilterSelect} = this.props;

        const active = filter === name;
        const clazz = active ? 'all-posts' : 'like-posts'
        return(
            <button 
                key={name}
                type="button"
                className={clazz}
                onClick={() => onFilterSelect(name)}>{label}</button>
                
        )
    })
    return (
        <div>
            {buttons}
        </div> 
               
    )
}
}
