import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TouchableHighlight , ScrollView} from 'react-native'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import Response from './Response'
import ProgressBar from 'react-native-animated-progress-bar'
import { AnimatedCircularProgress, CircularProgress } from 'react-native-circular-progress'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigation, { Tab , NavigationComponent } from 'react-native-material-bottom-navigation'
import { StackNavigator } from 'react-navigation'

import History from './History'

import styles from '../asset/style'

const below_normal = {key:'below_normal', color: '#ea5b0c'}
const normal = {key:'normal', color: '#61c3d9'}
const above_normal = {key:'above_normal', color: '#52ae32'}
const circle_size = 30
const jokeSize = 5

export default class JokeResults extends Component{
    constructor(props){
        super(props);
        this.state = {

          feedback: this.props.affectiveScores > 3 ? 
          'Your mood is great today! Keep smiling!' : 
            (this.props.affectiveScores > 1) ? 
            'Your mood is good today! Spread the smile!'
          :
          "Cheer up!",


          moodLevel: 
          this.props.affectiveScores > 3 ? 
          'a' : 
            (this.props.affectiveScores > 1) ? 'n'
            :
            'b',

        };
        this.props.returnMoodLevel(this.state.moodLevel)

    }
    returnMoodLevel = (moodLevel) => {

        return (moodLevel)
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>

                    {/* <View style={styles.moodLevel}>
                        <Text style={styles.level}>
                            {this.state.moodLevel}
                        </Text>
                    </View> */}


                    <View style={styles.logoWrapper}>
                        <AnimatedCircularProgress
                            style={styles.circular_progress}                        
                            size={250}
                            width={10}
                            fill={this.props.affectiveScores*100/jokeSize}
                            tintColor={this.props.affectiveScores > 3 ? above_normal.color : 
                                        (this.props.affectiveScores > 1) ? normal.color
                                        :
                                        below_normal.color}
                        //   onAnimationComplete={}
                            backgroundColor="#dadada" 
                            >
                            
                            {
                                (fill) => (
                                    <Image
                                        //style={styles.rightArrow}
                                      source= {this.props.affectiveScores > 3 ? require('../asset/aboveNormal.png') : 
                                        (this.props.affectiveScores > 1) ? require('../asset/normal.png')
                                        :
                                        require('../asset/belowNormal.png')}
                                     />
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>

                    
                    
                    {/*} Your Cognitive Score {this.props.cognitiveScores} */}
                    {/*Your Affective Score {this.props.affectiveScores} */}
                    
                    
                        <Text style={styles.h2Center}>
                            {
                                this.state.feedback
                            }
                        </Text>
                        
                    
                   

                </View>

                
                       
            </View>
        )
    }
}
