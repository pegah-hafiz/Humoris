import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TouchableHighlight , ScrollView} from 'react-native'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import Response from './Response'
import ProgressBar from 'react-native-animated-progress-bar'
import styles from '../asset/style'

const joke_stems = ['A man notices a person is crying. He asks: What has happened? He says: The elephant is dead. The man asks: Was the elephant your pet? The man answers:',
'A patient visits his doctor and asks: Will I be able to play piano after the surgery? The Doctor replies: Yes. Then, the patient says:',
'Why was the teacher wearing sunglasses to school?',
'Why was school easier for cave people?', 'A man walks into a chemist’s and says, “Can I have a bar of soap, please?” The chemist says, “Do you want it scented” And the man says:',
'Why elephant does not participate in military service?']

const choice_score = [
    [
        ['Yes, it was my pet.',1] ,['It’s a joyful day', 1], ['I have to bury it', 2], ['I didn’t pay for my bills',0] 
    ],
    [
        ['Ok, I feel calm now.',1] ,['Great! I never could before.', 2], ['There is a stain on your jacket.', 0], ['I didn’t use my health insurance.',1] 
    ],
    [
        ['Because the head of the department asked her.',1] ,['Because she has a blind sister.', 0], ['Because she has bright students.', 2], ['Because of the sunny weather.',1] 
    ],
    [
        ['Because there was no history to study.',2] ,['Because they didn’t have chairs.', 0], ['Because of the stones carved in the caves', 1], ['Because they lived together in their cave',1] 
    ],
    [
        ['No, I’ll take it with me now.',2] ,['I will be working tomorrow.', 0], ['No, I’m allergic to scented soaps.', 1], ['Yes, I love these soaps!',1] 
    ],
    [
        ['Because elephant is an animal.',1], ['Because the weather is warm.',0],['Because elephant has flat feet.',2], ['Because elephants are powerful.', 1]
    ]
]  
    

export default class Joke extends Component{
    constructor(props){
        super(props);
        this.state = {
            activateError: false,
            askResponse: false,
            score: null,
            isCorrect: null,
            disableJoke: false,
            affectiveResponse: null,
            page: 'Test'
        };
    }
    handlesScore = (value) => {
        
        this.setState({
            score: choice_score[this.props.jokeIndex-1][value][1]
            
        })
    }
    handleArrow = () => {
        
        this.setState({
            activateError: this.state.score===null,
            isCorrect: this.state.score===2,
            disableJoke: this.state.score!==null
        })
    }
    handleHappy = () => {

        const scoreInfo = [true, 1, this.state.score, this.props.jokeIndex]
        
        this.setState({
            activateError: false,
            askResponse: false,
            score: null,
            isCorrect: null,
            disableJoke: false,
            affectiveResponse: null
        })
        this.props.handlerFromJokeStem(scoreInfo)
    }
    handleMeh = () => {
        const scoreInfo = [true, 0, this.state.score, this.props.jokeIndex]

        this.setState({
            activateError: false,
            askResponse: false,
            score: null,
            isCorrect: null,
            disableJoke: false,
            affectiveResponse: null
            
        })
        this.props.handlerFromJokeStem(scoreInfo)
    }
    handleFromJokeStem = (scoreInfo) => {
        
        return (scoreInfo)
       
    }

    render() {

       let searchForPunchline = () => {

           for(let i=0;i<choice_score.length; i=i+1) {
            if (choice_score[this.props.jokeIndex-1][i][1]===2) 
             return (choice_score[this.props.jokeIndex-1][i][0])
           }
           
       
       }
       
       return (


            <View style={styles.container}>
            
                <ScrollView>

                    <View style={styles.jokeWrapper}>
                        <Text style={styles.joke}>
                            {this.props.jokeIndex}- {joke_stems[this.props.jokeIndex-1]}
                        </Text>
                    </View>  

                    
                    <ProgressBar
                        progress={this.props.progress}
                        backgroundStyle={{backgroundColor: "#662483", padding: 2}}
                        progressStyle={{backgroundColor: "#f8d100", height: 10}}
                        incompleteStyle={{backgroundColor: "#662483"}} 
                        
                    />
                   
                    <View style={styles.pxy}>
                        {
                            !this.state.disableJoke 
                            ?
                            <Text style={styles.h2}>
                                Which of the following can be the funniest punchline?
                            </Text>
                            : 
                            <Text style={styles.h2}>
                                {searchForPunchline()}
                            </Text>
                        }
                        {
                            !this.state.disableJoke && 
                            <RadioGroup
                            onSelect = {this.handlesScore} style={styles.radioButtons}
                            activeColor = '#000000'
                            color = '#000000'
                         
                            >
                                <RadioButton value={choice_score[this.props.jokeIndex-1][0][1]} disabled = {this.state.disableJoke}>
                                    <Text>{choice_score[this.props.jokeIndex-1][0][0]}</Text>
                                </RadioButton>

                                <RadioButton value={choice_score[this.props.jokeIndex-1][1][1]} disabled = {this.state.disableJoke}>
                                    <Text>{choice_score[this.props.jokeIndex-1][1][0]}</Text>
                                </RadioButton>

                                <RadioButton value={choice_score[this.props.jokeIndex-1][2][1]} disabled = {this.state.disableJoke}>
                                    <Text>{choice_score[this.props.jokeIndex-1][2][0]}</Text>
                                </RadioButton>

                                <RadioButton value={choice_score[this.props.jokeIndex-1][3][1]} disabled = {this.state.disableJoke}>
                                    <Text>{choice_score[this.props.jokeIndex-1][3][0]}</Text>
                                </RadioButton>
                            </RadioGroup>
                        }
    

                    </View>

                        
                    </ScrollView>


                            {/* CHECK ANSWER */}
                            {
                                this.state.activateError && this.state.score===null 
                                ?
                                <View style={styles.btnErrorContainer}>
                                    <Text style={styles.btn}>
                                        PLEASE SELECT A CHOICE
                                    </Text>
                                </View>
                                :
                                (!this.state.disableJoke &&
                                <TouchableOpacity onPress={this.handleArrow} style={styles.btnContainer}>
                                    <Text style={styles.btn}> 
                                        CHECK MY ANSWER
                                    </Text>
                                </TouchableOpacity>
                                )
                            }


                            {/* FEEDBACK */}

                            {
                                this.state.isCorrect!==null && !this.state.activateError &&
                                <View style={styles.feedbackContainer}>
                                    
                                    <View style={styles.responseQuestion}>
                                        <Text style={styles.h2}>
                                            How did you enjoy this joke?
                                        </Text>
                                    </View>
                    
                                    <View style= {styles.responseContainer}>
                                        <TouchableOpacity style={styles.btnResponse} onPress={this.handleMeh}>
                                            <Text style={styles.txt}>
                                            MEH
                                            </Text> 
                                            <Image style={styles.icon} source={require("../asset/meh.png")}/>
                                        </TouchableOpacity>
                    
                                        <TouchableOpacity style={styles.btnResponse} onPress={this.handleHappy}>
                                            <Text style={styles.txt}>
                                            FUNNY
                                            </Text> 
                                            <Image style={styles.icon} source={require("../asset/happy.png")}/>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            }
                            
                       
            </View>
                    
        )
    }
}
