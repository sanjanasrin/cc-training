function unique(arr) {
    const unique = arr.filter((x, i, a) => a.indexOf(x) == i)
    return unique
    }
     
     let values = ["green", "green", "red", "red",
       "yellow", "pink", "pink", "yellow"
     ];
     
     console.log("Unique values are", unique(values));
     