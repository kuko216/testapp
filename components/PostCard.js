import React from "react";
import styled from "styled-components";
import oc from "open-color";

import { ScrollView, RefreshControl, Text, View, Image } from "react-native";
import FitImage from "react-native-fit-image";

const PostWrapper = styled.View`
  width: 100%;
  margin-top: 50px;
  border: 1px solid ${oc.gray[5]};
`;

const PostHeader = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 10px;
  align-items: center;
  color: ${oc.gray[7]};
`;

const AvatarSection = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  z-index: 1;
`;

const Username = styled.Text`
  padding-left: 10px;
  z-index: 1;
`;

const PostFooter = styled.View`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px;
  color: ${oc.gray[7]};
`;

const Spacer = styled.View`
  flex: 1;
`;

const PostCard = ({ username, image, reaction }) => {
  return (
    <PostWrapper>
      <PostHeader>
        <AvatarSection>
          <Avatar
            source={{
              uri: "https://66.media.tumblr.com/avatar_2292ee705587_128.pnj"
            }}
          />
          <Username>{username}</Username>
        </AvatarSection>
      </PostHeader>
      <FitImage
        source={{
          uri: image
        }}
      />
      <PostFooter>
        <Text>반응 {reaction}개</Text>
        <Spacer />
      </PostFooter>
    </PostWrapper>
  );
};

export default PostCard;
