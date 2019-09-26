import React from "react";
import { ScrollView, RefreshControl, Text, View } from "react-native";

import PostCard from "../components/PostCard";

const dummyData = [
  {
    username: "keke",
    image:
      "https://66.media.tumblr.com/02c67aa93934b871cd05d8bd53f041dd/tumblr_pwvzmaBAFC1vivgwio1_1280.png",
    reaction: 256
  },
  {
    username: "user0001",
    image:
      "https://66.media.tumblr.com/004b1f1bf887fcc5b13ac1bd713f5428/tumblr_pw83xvNf3M1y6r8v6o1_1280.jpg",
    reaction: 643
  },
  {
    username: "user0002",
    image:
      "https://66.media.tumblr.com/7a3808bb17fccd377d15070af2c9e073/tumblr_pvwz850Iv61w7hbq2o1_1280.png",
    reaction: 754
  },
  {
    username: "user0001",
    image:
      "https://66.media.tumblr.com/957c514948fde1776a525d706b2a5f21/tumblr_pvtf0yeiH11y6r8v6o1_1280.jpg",
    reaction: 156
  }
];

const Main = () => {
  return <PostCard />;
};

export default Main;
