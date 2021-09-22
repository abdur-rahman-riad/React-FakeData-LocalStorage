const addToDB = id => {
    const exists = localStorage.getItem("fake_user_data");
    let fake_user_data = {};
    if (!exists) {
        fake_user_data[id] = 1;
    } else {
        fake_user_data = JSON.parse(exists);
        if (fake_user_data[id]) {
            const newCount = fake_user_data[id] + 1;
            fake_user_data[id] = newCount;
        } else {
            fake_user_data[id] = 1;
        }
    }
    localStorage.setItem('fake_user_data', JSON.stringify(fake_user_data));
}

export { addToDB }