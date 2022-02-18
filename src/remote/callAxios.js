import axios from 'axios' 

export const callUser=(url)=>{
    return axios.get(url)
    .then(response =>{
        if(!response.data){throw"no user data"}else{ return(response.data.data)}
    })
}

export const callUserActivity=(url)=>{
    return axios.get(url)
        .then((response => {return response.data.data.sessions}))
        .catch((error) => {return error})
}


export const callUserAverageSessions=(url)=>{
    return axios.get(url)
        .then((response => {return response.data.data.sessions}))
        .catch((error) => {return error})
}


export const callUserPerformance=(url)=>{
    return axios.get(url)
        .then((response => {return response.data.data.data})) 
        .catch((error) => {return error})
}
