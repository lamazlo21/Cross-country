const fetchData = async (updateData, url) => {
    const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include"
    });
    let data = await res.json();
    updateData(data);
}

const submitForm = async (url, body, updateData) => {
    const data = [];
    try {
        const res = await fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        data.push(await res.json());
    }catch(err){
        console.error(err);
        data.push({
            message: "Wystąpił błąd!",
            success: false
        });
    }
    updateData(data);
    return data[0];
}

const updateUser = async (url, body, updateData) => {
    const data = [];
    try {
        const res = await fetch(url, {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        data.push(await res.json());
    }catch(err){
        console.error(err);
        data.push({
            message: "Wystąpił błąd!",
            success: false
        });
    }
    updateData(data);
    return data[0];
}

export{
    fetchData,
    submitForm,
    updateUser,
}