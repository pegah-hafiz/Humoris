import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image, TabBarIOS, NavigationIOS, NavigatorIOS} from 'react-native'
import { TextButton, RaisedTextButton } from 'react-native-material-buttons'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigation, { Tab , NavigationComponent } from 'react-native-material-bottom-navigation'
import styles from '../asset/style'

import History from './History'
import Setting from './Setting'
import About from './About'
import JokeQuiz from './JokeQuiz'

import home from '../asset/home-2.png'
import calendar from '../asset/calendar.png'

const quotes = [
    'Every time you are able to find some humor in a difficult situation, you win! ',
    'No matter how difficult the situation is, always treat everything in a positive way.',
    '"A day without laughter is a day wasted"\n-Charlie Chaplin',
    '"Let a smile be your umbrella."\n-Irving Kahal & Francis Wheeler',
    '"Laughter is an instant vacation."\n-Milton Berle',
    'Humor is a great way to lighten any atmosphere, and laughing is a surfire way brighten your outlook.',
    '"If love is the treasure, laughter is the key."\n-Yakov Smirnoff'

]
const circle_size = 50
const menu_size = 30


export default class Homepage extends Component{
    static navigationOptions = {
       // title: 'Humoris',
        tabBarLabel: 'Home',
        tabBarIcon: () => (<Image source={home} style={{width:24 , height:24}} />),
        
        
      };
    constructor(props){
        super(props)
        this.state = {
            todayTest: false,
            activeTab: 0,
            selectedTab: 'home'
        }
    
    }
    handleStartLaugh =() => {
        this.setState({
            todayTest: true
        })

        //link to joke quiz
        this.props.navigation.navigate('JokeQuiz')
    }

    
     
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>

                    <View style={styles.logoWrapper}>
                        <Image
                            source={require("../asset/logo.png")}
                            style={styles.logo}
                            resizeMode={'cover'}
                        />

                   
                    </View>    

                    <View style={styles.container}>
                        <Text style={styles.h2Center}>
                            {quotes[Math.floor(Math.random() * Math.floor(quotes.length))]}
                        </Text>
                    </View>

                </View>
                
                    <RaisedTextButton
                        title ={!this.state.todayTest ? "Let's laugh!" : "Checkout Histry"}
                        titleColor='white'
                        style={styles.btnContainer}
                        titleStyle={styles.btn}
                        onPress={this.handleStartLaugh}
                    />
               

            </View>
        )
    }
}



