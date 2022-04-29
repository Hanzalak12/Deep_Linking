import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import HelloBg from '../../assets/images/helloBg.png';
import Paragraph from '../../components/Content/Paragraph';
import Title from '../../components/Content/Title';
import ImageBackground from '../../components/ImageBackground/ImageBackground';

const HomeScreen = ({ navigation, helloBox }) => {
  const { liveStreams, members } = helloBox;
  return (
    <ImageBackground image={HelloBg}>
      <Title title="Hello" />
      <Paragraph content={`${liveStreams} Livestreams · ${members} Members`} />
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  return {
    helloBox: state.hello
  };
};

export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;
