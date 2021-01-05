import ServiceUrl from '../utils/constants/url_services'
import axios from '../config/axios'

export class RequestService {

    constructor(userID) {
        this.userID = userID;
    }

    async getRequests() {
        var url = ServiceUrl.GET_REQUEST;
        return axios.get(url, { crossDomain: true })
            .then((result) => {
                let requestProcess = [];
                let requestFromBakend = result.data['_embedded'].requests;
                if (requestFromBakend!= undefined && requestFromBakend.length != 0) {
                    requestFromBakend.forEach(element => {
                        let res = {
                            url: element.url,
                            name: element.name,
                            method: element.method,
                        };
                        requestProcess.push(res);
                    });  
                }
                
                console.log(requestProcess);
                return requestProcess;
            }).catch((error) => {
                console.log(error);
            });
    }
}
