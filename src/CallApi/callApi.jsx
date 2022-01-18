
async function  callApiFunction(fetchUserData, id){
    const callApi = await fetch(process.env.PUBLIC_URL + "/dataActivity.json")
    const responseJson = await callApi.json()
    
     return responseJson
    /*
   
      
    */
}
 
export default callApiFunction;
