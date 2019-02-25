/////////////actioncreator///////////////////
export const  albumset=(data)=> {
    return { 
        type: 'fetch_data', 
        data: data
    };
};
export const sendUrl=(data) =>{
    return { 
        type: 'button_click', 
        url: data 
    };
};































































