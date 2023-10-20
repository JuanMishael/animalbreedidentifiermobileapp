import React, {useState} from 'react'
import { 
  StyleSheet, 
  Text, 
  Image,
  View, 
  Button,
  TouchableOpacity
} 
from 'react-native';
import { Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import FlatButton  from '../components/button'; // custom fonts
import DropdownComponent from '../components/dropdown';
import InfoModalComponent from '../components/infomodal';
import ImagePickerABI from '../components/imagepicker';
import { ScrollView } from 'react-native-gesture-handler';
import ResultModal from '../components/result';

export default function Home(){

    // info modal state
    const [modalVisible, setModalVisible] = useState(false);
    const toggleInfo = () => setModalVisible(!modalVisible);

    // get value guineapig
    const [selectedValueAnimal, setSelectedValueAnimal] = useState(null);
    const handleSelectAnimal = (value) =>  setSelectedValueAnimal(value);
    // get value model
    const [selectedValueModel, setSelectedValueModel] = useState(null);
    const handleSelectModel = (value) =>  setSelectedValueModel(value);

    // get image base 65
    const [selectedImagebase64, setSelectedImageModel] = useState(null);
    const handleImageSelectbase64 = (value) =>  {
      setSelectedImageModel(value);
    }


    // result modal
    const [visible,setVisible] = useState(false);
    const show = () => {
      setVisible(true); 
    };
    const hide = () => setVisible(false);

    return(
            <View>
                <ScrollView>
                <View style={styles.container}>
                  <View style={styles.mainappcontent}>
                    <Text style={styles.appTitle}>Animal Breed Identifier</Text>

                      {/* put the dropdown below here */}
                      <View style={styles.inputcontainer}>
                        {/* Animal Choice */}
                        <Text style={styles.inputLabel}>
                           What animal you want to identify 
                        </Text>
                        <DropdownComponent 
                          dropdownLabel={ "Choose Animal:" } 
                          defaultdropdownlabel={ "Choose Animal:" }
                          data = {
                            [
                              { label: 'Guinea Pig', value: 'Guinea Pig' },
                              { label: 'Hamster', value: 'Hamster' },
                              { label: 'Rabbit', value: 'Rabbit' },
                              { label: 'Snake', value: 'Snake' },
                              { label: 'Spider', value: 'Spider' },
                            ]
                           }
                          onSelect={handleSelectAnimal}
                        />
                        {/* Model Choice */}
                        <View style={styles.inputlabelcontainer}>
                          <Text style={styles.inputLabel}>
                            Choose preferred breed identifier      
                          </Text> 

                          <TouchableOpacity onPress={ toggleInfo }>
                            <MaterialIcons name="info-outline" size={20} color="blue" />
                          </TouchableOpacity>
                        </View> 

                        <DropdownComponent 
                          dropdownLabel={ "Choose Prediction Model:" } 
                          defaultdropdownlabel={ "Choose Prediction Model:" }
                          data = {
                            [
                              { label: 'Smart Recommendation', value: 'SVM' },
                              { label: 'Easy Decision Maker', value: 'Logreg' },
                              { label: 'Combine Insight', value: 'Ensemble' },
                              { label: 'Image Wizard', value: 'Resnet50' },
                            ]
                           }
                           onSelect={handleSelectModel}
                        />

                        {/* <Text> TEST</Text>
                        <Text> Animal Selected: {selectedValueAnimal}</Text>
                        <Text> Model Selected: {selectedValueModel}</Text>
                        <Text> Model Selected: { selectedImage }</Text> */}

                          {/* put the custom button here for image picker   */}
                          <ImagePickerABI onImageSelectbase64={handleImageSelectbase64}/>

                      </View>                    
                  </View>
                  
                  <FlatButton text='Identify' onPress={ show }  />                   
                  

                  {/* info modal */}
                  <InfoModalComponent isVisible={modalVisible} onClose={toggleInfo} />

                  
                  <ResultModal visible={visible && selectedValueAnimal !== null && selectedValueModel !== null && selectedImagebase64 !== null}
                   selectedValueAnimal = {selectedValueAnimal}  
                   selectedValueModel = {selectedValueModel} 
                   selectedImagebase64={selectedImagebase64}
                    hide={hide} />

                </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
  container:{
    padding: 15
  },
  appTitle:{
    fontFamily:"poppins-bold",
    fontSize: 28,
    color: '#262730'
  },

  mainappcontent:{
    marginBottom: 20,
    padding:10,
    backgroundColor: "#FFF",
    borderRadius: 8,
    color:"#262730"
  },

  // User Input Designs
  inputcontainer:{
    paddingTop: 10,
    paddingBottom: 10
  },
  inputlabelcontainer:{
    flexDirection:"row"
  },
  inputLabel:{
    fontFamily:'poppins-regular',
    fontSize: 15,
    margin: 3,
  },          


})