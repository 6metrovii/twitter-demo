import React, {Component} from "react";
import './post-list-item.sass'


export default class PostListItem extends Component{
   
    render(){
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props 
        let classNames = 'app-list-item';
        if (important){
            classNames += ' important'
        }
        if(like){
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span className='app-list-item-label'onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="app-list-item-btns">
                    <button 
                    type="button" 
                    className="app-list-item-button"
                    onClick={onToggleImportant}>
                    <i class="fa-solid fa-star"></i>
                    </button>
                    <button type="button"
                     className="app-list-item-button"
                     onClick={onDelete}>
                    <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <i class="fa-solid fa-heart"></i>
                </div>
        </div>
        )
    }
}
