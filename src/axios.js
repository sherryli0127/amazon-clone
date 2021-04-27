import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-af53d.cloudfunctions.net/api",
  // "http://localhost:5001/challenge-af53d/us-central1/api", //the api (cloud function) url
});

export default instance;
