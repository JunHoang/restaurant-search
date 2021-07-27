import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Yq9P2yBM1zGYRrQ6N-QXZvnuc4GEFrgbEImxeo9wJjMJ-J__5UWxqUk9edDQeZ6GI_cZWDSCHYVntbvg9Wpg6FN7i7BNFUIDMTEtwBr1PhFmvkIV-ahNi1IWKKn_YHYx",
  },
});
