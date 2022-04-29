import React, { useState, useEffect, memo } from 'react';
import { View, TouchableHighlight, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DetailBg from '../../assets/images/detailBg.png';
import Paragraph from '../../components/Content/Paragraph';
import Title from '../../components/Content/Title';
import ImageBackground from '../../components/ImageBackground/ImageBackground';
import RoutesKey from '../../navigation/routeKeys';
import { fetchingUser } from './actions';
import styles from './styles';

const DetailScreen = ({ navigation, route, detailBox, handleFetchUser }) => {
  const params = route.params || {};
  const { personDetailsId, personId } = params;

  const { user, loader } = detailBox;

  useEffect(() => {
    // console.log(personId);

    handleFetchUser({ personId });
  }, [personId]);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <ImageBackground image={DetailBg}>
      {loader ? (
        <ActivityIndicator size="large" color={'white'} />
      ) : (
        <>
          <Title
            title={`Welcome ${
              user && Object.keys(user).length !== 0 ? user.name : 'Anonymous'
            }`}
          />
          {user && Object.keys(user).length !== 0 && (
            <>
              <Paragraph content={`Email: ${user.email} `} />
              <Paragraph content={`Phone: ${user.phone} `} />
              <Paragraph content={`Website: ${user.website} `} />
            </>
          )}
        </>
      )}

      <TouchableHighlight
        onPress={() => {
          navigation.navigate(RoutesKey.HOME);
        }}
        style={styles.button}
      >
        <Paragraph content={`<- back to home`} />
      </TouchableHighlight>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  return {
    detailBox: state.detail
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    handleFetchUser: personId => dispatch(fetchingUser(personId))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(DetailScreen);
