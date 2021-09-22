import React from 'react';
import { addToDB } from '../LocalStorage/LocalStorage';
import "./UserData.css"

const UserData = (props) => {
    const { _id, name, age, company, balance, email, phone } = props.user;

    const handleStorage = (id) => {
        // set to local storage
        console.log(id);
        addToDB(id);
    }

    return (
        <div className="single-user">
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Company: {company}</p>
            <p>Balance: {balance}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={() => handleStorage(_id)}>Save to Database</button>
        </div>
    );
};

export default UserData;