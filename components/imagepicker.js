import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FlatButton from './button';

export default function ImagePickerABI({ onImageSelectbase64}) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Request media library permissions when the component mounts
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
        // Use the first asset from the "assets" array
        const selectedAsset = result.assets[0];
        setSelectedImage(selectedAsset.uri);

        
        // Fetch and encode the image as base64
        const response = await fetch(selectedAsset.uri);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = async () => {
          const base64image = reader.result.split(',')[1];
        
        // Call the callback function with the selected image URI and base64 encoding
        onImageSelectbase64(base64image); 
      };
      reader.readAsDataURL(blob);
      }
  };

  return (
    <View style={styles.container}>
      {/* {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )} */}
      <FlatButton text="Upload Image" onPress={pickImage} />
      <Text style={styles.subtext}>
       <Text style={{fontWeight:'bold'}}>Note</Text> Please upload a clear image (atleast 400x400)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
  },
  subtext: {
    fontSize: 10,
    margin: 8,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
});
