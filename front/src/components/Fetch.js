const fetchData = async (updateData, url) => {
    const res = await fetch(url);
    let data = await res.json();
    updateData(data);
}

const submitForm = async (url, body, updateData) => {
    const data = [];
    try {
        const res = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        data.push(await res.json());
    }catch(err){
        console.error(err)
        data.push({
            message: "Wystąpił błąd!",
            success: false
        });
    }
    updateData(data)

}

export{
    fetchData,
    submitForm,
}