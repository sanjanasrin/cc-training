const user = { person: { 
    employee: { 
        firstname: "Rahul" },
        likes: ["Cycling", "Hiking", "Driving"] 
    } }

    let { person: { 
        employee: { 
            firstname:name1 },
            likes:[,like2,...rest]
        } }=user;
    console.log(name1)
    console.log(like2)