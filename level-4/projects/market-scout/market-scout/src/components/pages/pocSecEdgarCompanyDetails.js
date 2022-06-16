const axios = require("axios");

const cikNumber = 320193;

// function to get data from sec.gov
const getCompanyDetails = (cikNumber) => {
    
    const paddedCIKNumber = "0".repeat(10 - (cikNumber + "").length) + cikNumber

    const options = {
        method: 'GET',
        url: `https://data.sec.gov/submissions/CIK${paddedCIKNumber}.json`
    };

    axios.request(options)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
}
getCompanyDetails(cikNumber)