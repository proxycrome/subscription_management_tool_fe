import axios from 'axios';
const setAuthHeader=()=>{

let token=JSON.parse(localStorage.getItem('bearertoken'))
     
    if(token){
        return axios.defaults.headers.common['Authorization']=token
    }
    delete axios.defaults.headers.common['Authorization'];
}

export default setAuthHeader