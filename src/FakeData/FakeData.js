import React, { useEffect, useState } from 'react';
import UserData from '../UserData/UserData';

const FakeData = () => {
    const [fakeData, setFakeData] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
            .then(response => response.json())
            .then(data => setFakeData(data))
    }, []);
    return (
        <div>
            <h2>Load Fake Data</h2>
            <h3>Available Users: {fakeData.length}</h3>
            {
                fakeData.map(user => <UserData
                    key={user._id}
                    user={user}
                ></UserData>)
            }
        </div>
    );
};

export default FakeData;