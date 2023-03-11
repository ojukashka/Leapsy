import React, {useState} from 'react';
import {View, Image, Pressable, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../../components/CustomButton';
import DoublePressable from '../../components/DoublePressable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import products from '../../assets/data/products.json';

// ScanScreen -> another Homework included here

// Image Permission - Upload Images - DoublePressable

// (1) Requesting image permission and uploading an image

// (2) Including DoublePressable
// When double clicked on the Image
// or when we click on the icon
// The heart icon turns red and gets bigger

const ScanScreen = () => {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);

  const toggleLike = () => {
    setIsPostLiked(v => !v);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: selectedPhoto?.uri || products[0].img,
          }}
          style={styles.image}
        />
      </DoublePressable>
      <View>
        <Pressable onPress={toggleLike}>
          <AntDesign
            name={isPostLiked ? 'heart' : 'hearto'}
            color={isPostLiked ? colors.accent : colors.black}
            size={isPostLiked ? 40 : 24}
          />
        </Pressable>
      </View>
      <CustomButton
        onPress={onChangePhoto}
        style={styles.signupButton}
        title="Upload Photo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    margin: 20,
  },
  textButton: {
    margin: 20,
  },
});

export default ScanScreen;
