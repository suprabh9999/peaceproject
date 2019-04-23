// Selection sort
export const CUSTOM_SORT = (data, sortingState) => {
    let key = getAppropriateKey(sortingState.key);
    if(sortingState.sortingOrder === 'asc')
        sortInAsc(data, key);
    else
        sortInDesc(data, key);
    return data;
};  

const sortInDesc = (data, key) => {
    for(let i = 0; i < data.length - 1; i++){
        for(let j = i+1; j < data.length; j++){
            if(data[j][key] > data[i][key]){
                swap(data, i, j);
            }
        }
    }
}

const sortInAsc = (data, key) => {
    for(let i = 0; i < data.length - 1; i++){
        for(let j = i+1; j < data.length; j++){
            if(data[j][key] < data[i][key]){
                swap(data, i, j);
            }
        }
    }
}

const swap = (data, finalPosition, foundElementIndex) => {
    const temp = data[finalPosition];
    data[finalPosition] = data[foundElementIndex];
    data[foundElementIndex] = temp;
};

const getAppropriateKey = (key) => {
    const KEYS = { "First Name" : "first_name", "Last Name" : "last_name",
    "Company Name" : "company_name", "City" : "city", "State" : "state",
    "Zip" : "zip", "Email" : "email", "Web" : "web", "Age" : "age" };
    return KEYS[key];
} 

