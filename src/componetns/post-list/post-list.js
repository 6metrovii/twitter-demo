import React from "react";
import "./post-list.sass";
import PostListItem from '../post-list-item';


const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map( item => {
        const {id, ...itemProps} = item
        return (
            <li key={id}>
                <PostListItem
                    {...itemProps}
                    onDelete = {() => onDelete(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleLiked = {() => onToggleLiked(id)}/> 
            </li>
        )
    });
    
    return (
        <div className="post-ul">
            {elements}
        </div>
    )
}
export default PostList;