import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';
import posed from 'react-native-pose';

const Box = posed.View({
  hidden: {
    marginTop: '100vh',
    transition: { duration: 200 }
  },
  visible: {
    marginTop: 0,
    transition: { duration: 400, type: 'spring' }
  }
});
const ImageBackgroundControl = ({ image, children }) => {
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTransition(false);
    }, 500);
  }, []);
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <Box pose={!transition ? 'visible' : 'hidden'} style={styles.box}>
        {children}
      </Box>
    </ImageBackground>
  );
};

export default ImageBackgroundControl;
