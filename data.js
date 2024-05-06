const axios = require("axios");

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://www.linkedin.com/voyager/api/voyagerJobsDashOnsiteApplyApplication?action=submitApplication",
  headers: {},
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    // console.log(error);
    console.log(error.message);
  });
