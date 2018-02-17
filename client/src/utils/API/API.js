import axios from "axios";

export default {
    getImages: function(loc) {
        return axios({
				  method:'post',
				  url:'/api/loc/media',
				  body:loc
				})
				  .then(function(response) {
				  return response
				});
				    }


};