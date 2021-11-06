import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigation, { Tab , NavigationComponent } from 'react-native-material-bottom-navigation'
import styles from '../asset/style'


import aboutIcon from '../asset/icon.png'

export default class About extends Component{
    static navigationOptions = {
        tabBarLabel: 'About',
        tabBarIcon: () => (<Image source={aboutIcon} style={{width:24 , height:24}} />)
        /* No more header config here! */
      };
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                 <ScrollView>
                    <View style={styles.containerStatic}>
                    
               
                    <Text style={styles.h1}>
                        About Humoris
                    </Text>
                    
                    <Text style={styles.p}>
                        Humoris is a new engaging way to track your mood. We use jokes to brighten your day and predict your mood!
                    </Text>
                    
                    <Text style={styles.h3}>Why jokes?</Text>
                    <Text style={styles.p}>
                    Jokes are one of the most popular humor assessment tools. The jokes presented in the app are scientifically designed to assess your sense of humour.
                    </Text>
                    

                    <Text style={styles.h3}>Why track mood?</Text>
                    <Text style={styles.p}>
                    Research suggest that tracking daily mood prevents depression. Also, your short-term mood each day can result in a long-term positive well-being.
                    </Text>

                    <Text style={styles.h3}>Why should I use this app to assess my sense of humor?</Text>
                    <Text style={styles.p}>Sense of humor is one of the indicators of mood disorder. Humoris uses a validated method to capture the appreciation level called "Affective Response".
                    You will choose the suitable emoticon based on your appreciation level of the joke for this part.</Text>

                    <Text style={styles.h3}>How can the system predict my mood based on jokes?</Text>
                    <Text style={styles.p}> Emoticons can help us capture your emotion which would lead to mood prediction.</Text>

                    </View>
                </ScrollView>
            </View>
        )
    }
}