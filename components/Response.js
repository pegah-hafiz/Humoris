import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native'

export default class Response extends Component{
    constructor(props){
        super(props)
        this.state = {
            score: null
        }
    }
    handleMeh = () => {
        this.setState({
            score: 0
        })
    }
    handleHappy = () => {
        this.setState({
            score: 1
        })
    }
    render() {
        return (
            <View >
                <Text style={styles.title}>
                Correct or Incorrect
                </Text>

                <Text style={styles.body}>
                How much did you enjoy reading this joke?
                </Text>

               <View style= {styles.emoji_container}>
               
                    <TouchableOpacity style={styles.emoji} onPress={()=>{alert("You clicked me")}}>
                        <Image source={require("../asset/meh.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.emoji} onPress={()=>{alert("You clicked me")}}>
                        <Image source={require("../asset/happy.png")}/>
                    </TouchableOpacity>

              </View>
              <TouchableHighlight onPress={this.handleArrow} style={styles.rightArrow_container} underlayColor='pink'>
                            <Image
                                style={styles.rightArrow}
                                source={require('../asset/right-arrow.png')}
                            />
            </TouchableHighlight>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 10,
        color: '#000000',
        fontWeight: 'bold',
    },
    body: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    },
    emoji_container: {
        flexDirection: 'row',
       justifyContent: 'center'
    },
    emoji:{
        padding: 10,
        margin: 10
    },
    rightArrow_container: {
        alignItems: 'center',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    rightArrow: {
        width: 35,
        height: 35,
        marginRight: 15
    }
  });