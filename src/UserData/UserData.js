import React from 'react';
import "./UserData.css"

const UserData = (props) => {
    const { name, age, company, balance, email, phone } = props.user;
    console.log(props.user);
    return (
        <div className="single-user">
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Company: {company}</p>
            <p>Balance: {balance}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserData;