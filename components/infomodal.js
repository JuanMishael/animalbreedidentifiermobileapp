// ModalComponent.js
import { Margin } from '@mui/icons-material';
import React from 'react';
import { View, Text, Button, Modal, StyleSheet,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const InfoModalComponent = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} animationType="fade">
      <SafeAreaView style={[styles.fill, styles.grey]}>
        <Button title="Hide" color="#FF4B4B" onPress={ onClose } />
        <ScrollView>
        {/* info content  */}
        <View style={ styles.infocontainer}>
            <Text style={styles.infoHeader}>What is this???</Text>
            <Text style={styles.infoOne}>
                If you are wondering what a prediction model or breed identifier means, don't worry, it is much simpler than you imagine.
            </Text>
            <Text></Text>
            <Text style={styles.infoOne}>
                Basically, a prediction model or breed identifier is like a robot that will take a look at the image you uploaded and 
                tell you what breed it is categorized. "The Smart Recommendation, Easy Decision Maker, Combine Insight, and Image Wizard weren't actually their actual names, 
                but we named them like that so that everyone can understand them and choose based on user's preferences."
            </Text>
        </View>
        <View style={ styles.infocontainer}>
            <Text style={styles.choiceHeader}>Smart Recommendation</Text>
            <Text style={styles.infoOne}>
                This choice has its advantage of making a smart decision, having the abilitiy to handle a complex data efficiently. 
                Choosing this may accurately identify the breed of your animal.
            </Text>
        </View>
        <View style={ styles.infocontainer}>
            <Text style={styles.choiceHeader}>Easy Decision Maker</Text>
            <Text style={styles.infoOne}>
                This choice has the ability to make a robust decision. This is known for its simplicity, interpretability, efficiency, 
                and applicability to a wide range of problems ( I am partaining to its algorithms). Chooing this may accurately identify the breed
                of your animal
            </Text>
        </View>
        <View style={ styles.infocontainer}>
            <Text style={styles.choiceHeader}>Combine Insight</Text>
            <Text style={styles.infoOne}>
                Imagine Smart Recommendation and Easy Decision Maker dude working together, having both their advantages and disadvantages work together
                just to offer you an accurate prediction, for better and for worst. Choosing this may accurately identify the breed of your animal.
            </Text>
        </View>
        <View style={ styles.infocontainer}>
            <Text style={styles.choiceHeader}>Image Wizard</Text>
            <Text style={styles.infoOne}>
                Comparing to a car, this may be the tesla car, a modern car, while the other is the old school style cars, this choice has its own advantage
                because of how different this is built compare to the other. Choosing this may accurately identify the breed of your animal.
            </Text>
        </View>
        <View style={ styles.infocontainer}>
            <Text style={styles.conclusionHeader}>Conclusion</Text>
            <Text style={styles.infoOne}>
            Choosing what's best is subjective, as each identifier has its advantages depending on the image. 
            I don't recommend sticking to only one identifier;
            you are free to use all the identifiers and see for yourself which one 
            you think works best in identifying the breeds you need.
            </Text>
        </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default InfoModalComponent;

const styles = StyleSheet.create({
    fill:{
        flex:1,
      },
    grey: {
        backgroundColor: "#DDD"
      },
    infocontainer:{
        color:"#262730",
        backgroundColor: '#FFF',
        padding: 20,
        margin: 10,
        borderRadius: 10
        
    },
    infoHeader: {
        fontFamily:'poppins-bold',
        fontSize: 26,
    },
    infoOne:{
        fontFamily: "poppins-regular",
        fontSize: 13
    },
    choiceHeader:{
        fontFamily:'poppins-bold',
        fontSize: 20,
    },
    conclusionHeader:{
        fontFamily:'poppins-bold',
        fontSize: 25,
        color:"#FF4B4B"
    }
})