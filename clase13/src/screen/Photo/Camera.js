import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CameraInterface from '../../components/Camera/CameraInterface';
import colors from '../../config/colors';
import {useUserInformation} from '../../contexts/UserHandler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraStatusContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  cameraStatusText: {fontSize: 30, color: colors.white},
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
});

const CameraStatus = ({message}) => (
  <View style={styles.cameraStatusContainer}>
    <Text style={styles.cameraStatusText}>{message}</Text>
  </View>
);

const Camera = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {updatePhoto} = useUserInformation();

  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    if (data.uri) {
      updatePhoto(data.uri);
      navigation.pop();
    }
  };

  return (
    <SafeAreaView style={[styles.container, {paddingTop: top}]}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}>
        {({camera, status}) => {
          if (status === 'NOT_AUTHORIZED') {
            return <CameraStatus message="No Autorizado" />;
          }

          if (status === 'PENDING_AUTHORIZATION') {
            return <CameraStatus message="Pendiente" />;
          }

          if (status === 'READY') {
            return (
              <CameraInterface
                navigation={navigation}
                camera={camera}
                takePicture={takePicture}
              />
            );
          }
        }}
      </RNCamera>
    </SafeAreaView>
  );
};

export default Camera;
