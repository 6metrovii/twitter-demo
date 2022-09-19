import React from "react";
import "./app-header.sass"

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="header" as='a'>
            <h1>Novikov Artem </h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}
export default AppHeader;