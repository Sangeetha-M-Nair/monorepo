// const express = require("express");

import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

 export interface QueryPayload{
  foo: string;
}

app.use(cors({ origin: true, credentials: true }));


app.use((_req, response, next) => {
  try {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT"
    );
    response.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    response.header("Access-Control-Allow-Headers", "*");


    // Continue to next middleware
    next();
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (request, response) => {
  
  const data : QueryPayload={foo:"bar"}
  response.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

