import React from "react";

const UserCard=(props)=>{
    console.log(props)
    return (
        <div className="user-card">
            <img src={props.data.results[0].picture.large} alt="user" className="user-image" />
            <h3>{props.data.results[0].name.title+ " " + props.data.results[0].name.first+ " " + props.data.results[0].name.last}</h3>
            <p>{props.data.results[0].cell}</p>
            <p>{props.data.results[0].location.city},{props.data.results[0].location.state},{props.data.results[0].location.country}</p>
        </div>
    )
}

export default UserCard