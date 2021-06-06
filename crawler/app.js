  
const axios = require("axios");
const fs = require("fs");
function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("Stock.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

readFilePromise()
  .then((result) => {
    // console.log(result)
    return axios({
      method: "get",
      url: "https://www.twse.com.tw/exchangeReport/STOCK_DAY?",
      params: {
        data: 20210529,
        stockNo: result,
      },
    });
  })
  .then(function (response) {
    console.log(response.data.title);
  })
  .catch((err) => {
    console.log(err);
  });

