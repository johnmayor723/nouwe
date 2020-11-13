import axios from 'axios'


const  apiCall =(method, path, {email, password}) => {
    return new promise ((resolve, reject)=> {
        return axios[method](path, {email,password})
        .then(res => {
            return resolve(res.data)
        })
        .catch(err =>{
            return reject (err.response.data.error)
        })
    })
}

export default apiCall;