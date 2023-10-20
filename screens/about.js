import React, {useState} from 'react'
import { 
  StyleSheet, 
  Text, 
  Image,
  View, 
  ScrollView

} 
from 'react-native';

export default function About(){
    return(
            <View>
                <ScrollView>
                <View style={styles.container}>
                    <View style={styles.aboutContainer}>
                      <Text>🔴 🟡 🟢</Text>
                      <Text style={styles.abouttext}>
                      This thesis application use the power of logistic regression, support vector machine (SVM) and other added modern algorithms
                      to simplify animal breed identification. Our goal is to empower users with a fast and accurate tool for recognizing animal breeds, 
                      offering convenience and efficiency in various fields, from agriculture to wildlife conservation and pet care.  
                      </Text>
                    </View>
                    <View style={styles.manualcontainer}>
                      <Text style={styles.manualH1}>MANUAL</Text>
                      <Text style={{fontWeight: "bold", fontSize: 18}}>Home:</Text>
                      <Text style={{fontWeight: "bold"}}>- Choose Animal Dropdown</Text>
                      <Text style={{fontWeight: "bold"}}>- Choose Identifier Dropdown</Text>
                      <Text style={{fontWeight: "bold"}}>- Upload Image</Text>
                      <Text></Text>
                      <Image source={require('../assets/abimaincontent.png') } style={{width: '100%', height:300}} resizeMode='contain'/>
                      <Text></Text>
                      <Text>The three main components of the app must be filled before clicking the "identify" button.</Text>
                      <Text></Text>
                      <Text style={{fontWeight: "bold", fontSize: 18}}>Animal Choice:</Text>
                      <Text style={{fontWeight: "bold"}}>- Guinea Pig</Text>
                      <Text style={{fontWeight: "bold"}}>- Hamster</Text>
                      <Text style={{fontWeight: "bold"}}>- Rabbit</Text>
                      <Text style={{fontWeight: "bold"}}>- Snake</Text>
                      <Text style={{fontWeight: "bold"}}>- Spider</Text>
                      <Text></Text>
                      <Text style={{fontWeight: "bold", fontSize: 18}}>Breed Identifier:</Text>
                      <Text style={{fontWeight: "bold"}}>- Smart Recommendation</Text>
                      <Text style={{fontWeight: "bold"}}>- Easy Decision Maker</Text>
                      <Text style={{fontWeight: "bold"}}>- Combine Insight</Text>
                      <Text style={{fontWeight: "bold"}}>- Image Wizard</Text>
                      <Text></Text>
                      <Text>A short info about this Breed Identifier can be seen when you clicked the ℹ️ </Text>
                      <Text></Text>
                      <Image source={require('../assets/infoicon.png') } style={{width: '100%', height:100}} resizeMode='contain'/>
                      <Text></Text>
                      <Text style={{fontWeight: "bold", fontSize: 18}}>Smart Recommendations:</Text> 
                      <Text>
                        This choice name represents the<Text style={{fontWeight: "bold"}}> Support Vector Machine </Text> Model, this machine learning model 
                        is known for its ability to perform both linear and non linear classification, Regression, and outlier detection. 
                        Support Vector Machine’s Ability to handle high-dimensional data efficiently what makes this model stood out 
                        compare to other classical machine learning model.
                      </Text>
                      <Text></Text>
                      <Text style={{fontWeight: "bold", fontSize: 18}}>Easy Decision Maker:</Text> 
                      <Text>
                        This choice name represents the <Text style={{fontWeight: "bold"}}>Logistic Regression</Text> Model, this machine learning model is 
                        known for its ability to model the probability of an event using by having the  log-odds for the event be a linear
                        combination of one or more independent variables. Logistic Regression’s simplicity, interpretability, efficiency,
                        and applicability to a wide range of problems is what makes this machine learning model competent for this thesis
                        study.
                        </Text>  
                        <Text></Text>
                      <Text style={{fontWeight: "bold", fontSize: 18}}>Combine Insight:</Text>
                      <Text>
                        This choice name represents the ensemble technique we apply to utilize <Text style={{fontWeight: "bold"}}>both Logistic Regression 
                        and Support Vector Machine</Text>, running them at the same time, making use both of their strength and solving their 
                        weaknesses.
                      </Text>
                      <Text></Text>
                      <Text style={{fontWeight: "bold", fontSize: 18}}>Image Wizard:</Text>
                      <Text>
                        This choice name represents <Text style={{fontWeight: "bold"}}>Resnet50 Deep Learning</Text> Model. It is called image wizad for its advance 
                        capabilities to predict much more accurate compare to other model. Resnet50 Deep Learning Model is known for its 
                        excellent  in  image recognition. It is a CNN (Convolutional Neaural Network) algorithm that  is 50 layers deep 
                        and is used for computer vision related applications.
                      </Text>
                    </View>
                </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
  container:{
    padding: 24
  },
  aboutContainer:{
    margin: 10,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  abouttext: {
    fontSize:15,
    fontFamily: 'poppins-regular',
    marginBottom: 10,
    marginTop: 10
  },
  manualcontainer:{
    margin: 10,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  manualH1:{
    fontFamily: "poppins-bold",
    fontSize: 25,
    paddingBottom: 10,
  }
})