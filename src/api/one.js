import axios from "./axiosSet/axios"; // vue的http功能

export default {
    getData(data) {
        return axios({
                method: 'get',
                url: '/v1/bpi/currentprice.json',
                data: data
            }).then(res => {
                return res.data
            })
            .catch(error => console.log(error))
        // .finally(() => console.log("finally"));


    }
}