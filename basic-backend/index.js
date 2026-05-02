// deployed on render at url https://backend-yt-4.onrender.com/

require("dotenv").config();

const express = require("express");
// import express from "express";
const app = express();
const port = process.env.PORT;

const githubData = {
  login: "chandanpavan",
  id: 206551874,
  node_id: "U_kgDODE-7Qg",
  avatar_url: "https://avatars.githubusercontent.com/u/206551874?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/chandanpavan",
  html_url: "https://github.com/chandanpavan",
  followers_url: "https://api.github.com/users/chandanpavan/followers",
  following_url:
    "https://api.github.com/users/chandanpavan/following{/other_user}",
  gists_url: "https://api.github.com/users/chandanpavan/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/chandanpavan/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/chandanpavan/subscriptions",
  organizations_url: "https://api.github.com/users/chandanpavan/orgs",
  repos_url: "https://api.github.com/users/chandanpavan/repos",
  events_url: "https://api.github.com/users/chandanpavan/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/chandanpavan/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Chandan",
  company: null,
  blog: "",
  location: "Bangalore",
  email: null,
  hireable: null,
  bio: "Developer in progress .",
  twitter_username: "dev_chandan21",
  public_repos: 22,
  public_gists: 0,
  followers: 2,
  following: 0,
  created_at: "2025-04-07T12:15:39Z",
  updated_at: "2026-04-08T17:43:47Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("chandan");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login </h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
