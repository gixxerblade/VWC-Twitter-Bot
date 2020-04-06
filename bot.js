const config = require("./config");
const twit = require("twit");
const T = new twit(config);

const params = {
  q: ("@JeromeHardaway", "@usmcamgrimm", "@schusterbraun"),
  result_type: "recent",
  count: 40
};

let gotData = (err, data, response) => {
  let tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
};

T.get("search/tweets", params, gotData);
