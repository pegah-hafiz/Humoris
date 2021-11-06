import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TouchableHighlight } from 'react-native'
import Joke from './Joke'
import JokeResults from './JokeResults'
import { TextButton, RaisedTextButton } from 'react-native-material-buttons'
import jokeQuizIcon from '../asset/joker-face.png'
import History from './History'
import BottomNavigation, { Tab , NavigationComponent } from 'react-native-material-bottom-navigation'
import { StackNavigator } from 'react-navigation'
import styles from '../asset/style'
import Expo from 'expo'
//import deviceInfo from 'react-native-device-info'

const below_normal = {key:'below_normal', color: '#ea5b0c'}
const normal = {key:'normal', color: '#61c3d9'}
const above_normal = {key:'above_normal', color: '#52ae32'}
//const deviceID = deviceInfo.getUniqueID()

export default class JokeQuiz extends Component { 
    static navigationOptions = {
        // title: 'Humoris',
         tabBarLabel: 'Joke Log',
         tabBarIcon: () => (<Image source={jokeQuizIcon} style={{width:24 , height:24}} />),
        // tabBarVisible : false
         /* No more header config here! */
       };
    constructor(props){
        super(props);
        this.state = {

            jokeIndex: 1,

            affScore1: null,
            affScore2: null,
            affScore3: null,
            affScore4: null,
            affScore5: null,
  
            cogScore1: null,
            cogScore2: null,
            cogScore3: null,
            cogScore4: null,
            cogScore5: null,

            moodLevel: null,

            isQuizFinished: false,
            isClicked: false
            
        };
    }
   
    handleQuiz = (scoreArray) => {

        const nextJokeIndex = this.state.jokeIndex + 1

        if(scoreArray[0]===true){

            let affScore = scoreArray[1]
            let cogScore = scoreArray [2]
            let jIndex = scoreArray[3]
    
            const aScore = 'affScore'+jIndex
            const cScore = 'cogScore'+jIndex

            this.setState ({
                [aScore] : affScore,
                [cScore] : cogScore,
                jokeIndex: nextJokeIndex
               
            })
       }
    }

    handleViewHistory = () => {
        
        this.setState({
            isQuizFinished:true,
            isClicked: true

        })
        let totalAffScore = this.state.affScore1 + this.state.affScore2 +
        this.state.affScore3 + this.state.affScore4 + this.state.affScore5
       // console.log("Device Unique ID", deviceInfo.getUniqueID());

        //let totalCogScore = this.state.cogScore1 + this.state.cogScore2 + 
       // this.state.cogScore3 + this.state.cogScore4 + this.state.cogScore5
        
       
        fetch('http://142.93.170.126:8080/api/v1/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                userId: 'test',
              //  assessmentDate:'',
                affScore1: String(this.state.affScore1),
                affScore2: String(this.state.affScore2),
                affScore3: String(this.state.affScore3),
                affScore4: String(this.state.affScore4),
                affScore5: String(this.state.affScore5),
      
                cogScore1: String(this.state.cogScore1),
                cogScore2: String(this.state.cogScore2),
                cogScore3: String(this.state.cogScore3),
                cogScore4: String(this.state.cogScore4),
                cogScore5: String(this.state.cogScore5),
      
                moodLevel: ( totalAffScore > 3 ? 
                    'above' : 
                      (totalAffScore > 1) ? 'normal'
                      :
                      'below')
            }),
          }).then((response) => response.json())
              .then((responseJson) => {

                  console.log('the response is:'+ responseJson)
                return responseJson;
              })
              .catch((error) => {
                console.error(error);
              });


       // this.props.navigation.navigate('History',{todayColor: (this.state.moodLevel==='a' ? '#d6007a' : (this.state.moodLevel==='n' ? '#afca0b' :'#f8d100' ))})
    
    }

    handleMoodState = (moodState) => {
        this.setState({
            moodLevel:moodState
        })
    }

    render (){

        return (
            this.state.jokeIndex < 6 
            ?
            <Joke 
                jokeIndex={this.state.jokeIndex} 
                handlerFromJokeStem={this.handleQuiz} 
                progress ={this.state.jokeIndex/5} 

            />
            :
            (
            <View style={styles.container}>
                {
                    !this.state.isQuizFinished
                    &&
                    !this.state.isClicked 
                    &&
                    <JokeResults 
                    cognitiveScores = {this.state.cogScore1 + this.state.cogScore2 + this.state.cogScore3 + this.state.cogScore4 + this.state.cogScore5}
                    affectiveScores = {this.state.affScore1 + this.state.affScore2 + this.state.affScore3 + this.state.affScore4 + this.state.affScore5}
                    returnMoodLevel = {this.handleMoodState}
                    />
                }

              
              {
                  !this.state.isClicked 
                  ?
                  <RaisedTextButton 
                      title="Checkout History"
                      titleColor='white'
                      style={styles.btnContainer}
                      titleStyle={styles.btn}
                      onPress ={this.handleViewHistory}
                  />
                  :
                  <History today_color={this.state.moodLevel==='a' ? above_normal.color : (this.state.moodLevel==='n' ? normal.color : below_normal.color)}/>
              }
              
                   

                
                
            </View>
            )
           
        )
    }
}

