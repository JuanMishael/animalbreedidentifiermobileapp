import React, { useState, useEffect } from 'react';
import { Modal, SafeAreaView, StyleSheet, Button, ActivityIndicator, View, Text } from 'react-native';

const ResultModal = ({ visible, selectedValueAnimal, selectedValueModel, selectedImagebase64, hide }) => {
  // State to store the API response data
  const [apiData, setApiData] = useState(null);
  // State to track whether data is loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchData = async () => {
      try {
        // Start loading
        setIsLoading(true);

        // Make an API request here based on selectedValueAnimal, selectedValueModel, or selectedImage
        // You can use the fetch or axios library for making the API request
        // Create a JSON object with the selected values
        const requestData = {
            animal : selectedValueAnimal,
            model : selectedValueModel,
            image : selectedImagebase64,
          };
  
          // Make the API request with JSON data
          const response = await fetch('https://c6cb-175-176-33-179.ngrok-free.app/process', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          })
          if (!response.ok) {
            console.error('API request failed with status code:', response.status);
          } else {
            try {
              const result = await response.json();
              setApiData(result);
            } catch (error) {
              console.error('Error parsing JSON response:', error);
            }
          }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Stop loading, whether the request succeeded or failed
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts or when selectedValueAnimal, selectedValueModel, or selectedImage changes
    if (visible && selectedValueAnimal !== null && selectedValueModel !== null && selectedImagebase64 !== null) {
      fetchData();
    }
  }, [visible, selectedValueAnimal, selectedValueModel, selectedImagebase64]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
    >
      <SafeAreaView style={[styles.fill, styles.grey]}>
        <Button title="Hide" color="#FF4B4B" onPress={hide} />

        {/* Display a loading screen while fetching data */}
        {isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
          </View>
        ) : (
          // Display the API data here
          <View>
            {apiData && (

                <View style={styles.resultContainer}>
                  <Text style={{color:"#FF4B4B", fontFamily:"poppins-bold", fontSize:35}}>
                    Result:
                  </Text>
                  <Text style={{color:"#262730", fontFamily:"poppins-bold", fontSize:30}}>
                    {apiData.Predicted}
                  </Text>
                  <Text style={{color:"#262730", fontFamily:"poppins-bold", fontSize:30}}>
                  {((apiData.Percentage || 0) * 100).toFixed(2)}%
                  </Text>
                </View>

            )}
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export default ResultModal;

const styles = StyleSheet.create({
      //Result Modal Design
        fill:{
            flex:1,
        },
        grey: {
            backgroundColor: "#DDD"
        },
        resultContainer:{
          margin:20,
          padding:20,
          backgroundColor: "#FFFF",
          borderRadius: 10
        }
})
