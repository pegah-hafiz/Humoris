import React, {Component} from 'react';
import { StyleSheet, Text, View , ScrollView, Picker, TouchableOpacity, Image, NavigatorIOS} from 'react-native'
import Switch from 'react-native-switch-pro'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigation, { Tab , NavigationComponent } from 'react-native-material-bottom-navigation'

import styles from '../asset/style'

import settingIcon from '../asset/settings-work-tool.png'


export default class Setting extends Component{
    static navigationOptions = {
         tabBarLabel: 'Setting',
         tabBarIcon: () => (<Image source={settingIcon} style={{width:24 , height:24}} />)
         /* No more header config here! */
       };
    constructor(props){
        super(props)
        this.state = {
            allowPushNotifications: false,
            chosenDate: new Date(),
            hour: '9',
            edit: false,
            save: false
          }
    }
    setDate = (newDate) => {
        this.setState({
            chosenDate: newDate
        })
    }
    handleNotification = () => {
        this.setState({
            allowPushNotifications: !this.state.allowPushNotifications
        })
    }
    showTimePicker = () =>{
        this.setState({
            edit: true
        })
    }
    saveTime = () => {
        this.setState({
            save: true,
            edit:false
        })
    }
    cancelTime = () => {
        this.setState({
            save: false,
            edit: false
        })
    }

    render() {
        
        return (
            <View style={styles.container}>

                <View style={styles.containerStatic}>
       
                    <Text style={styles.h1}> Setting </Text>
                
                    <View style={styles.row}>
                        <View>
                            <Text style={styles.pushText}> 
                                Allow Push Notification
                            </Text>
                        </View>

                        <Switch
                            width={40}
                            height={21}
                            onSyncPress ={this.handleNotification}
                            // backgroundInactive = '#929292'
                            // backgroundActive = '#d6007a'
                            // circleColorInactive = '#fff'
                            // circleColorActive = '#fff'
                            style={styles.swtich}
                            defaultValue={true}
                        />
                    </View>

                </View>

           {/* ---------------------------- */}

                           


                {
                    this.state.allowPushNotifications && 
                    <View>
                        
                        <View style={styles.pxy}>
                            <View style={styles.row}>
                                <View>
                                    <Text style={styles.notificationText}> 
                                        Everyday at: {this.state.hour}:00
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={this.showTimePicker} style={styles.btnOutline}>
                                    <Text> 
                                        {this.state.edit ? 'Select Time':'Edit'} 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        {
                        this.state.edit && 
                            <View style={styles.pickerContainer}>            
                                <Picker
                                    selectedValue={this.state.hour}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) => this.setState({hour: itemValue})}>
                                    <Picker.Item label="1:00" value="1" />
                                    <Picker.Item label="2:00" value="2" />
                                    <Picker.Item label="3:00" value="3" />
                                    <Picker.Item label="4:00" value="4" />
                                    <Picker.Item label="5:00" value="5" />
                                    <Picker.Item label="6:00" value="6" />
                                    <Picker.Item label="7:00" value="7" />
                                    <Picker.Item label="8:00" value="8" />
                                    <Picker.Item label="9:00" value="9" />
                                    <Picker.Item label="10:00" value="10" />
                                    <Picker.Item label="11:00" value="11" />
                                    <Picker.Item label="12:00" value="12" />
                                    <Picker.Item label="13:00" value="13" />
                                    <Picker.Item label="14:00" value="14" />
                                    <Picker.Item label="15:00" value="15" />
                                    <Picker.Item label="16:00" value="16" />
                                    <Picker.Item label="17:00" value="17" />
                                    <Picker.Item label="18:00" value="18" />
                                    <Picker.Item label="19:00" value="19" />
                                    <Picker.Item label="20:00" value="20" />
                                    <Picker.Item label="21:00" value="21" />
                                    <Picker.Item label="22:00" value="22" />
                                    <Picker.Item label="23:00" value="23" />
                                    <Picker.Item label="00:00" value="20" />
                                </Picker>
                                                

                                <View style={styles.row}>

                                    <TouchableOpacity onPress={this.cancelTime} style={styles.btnResponse}>
                                        <Text style={styles.txt}>CANCEL</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this.saveTime} style={styles.btnResponse}>
                                        <Text style={styles.txt}>SAVE</Text>
                                    </TouchableOpacity>

                                </View>


                            </View>
                        }

                    </View>
                }

            </View>
            )
        
    }
 
}
 

// const styles = StyleSheet.create({
//     header: {
//         marginTop: 50,
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderBottomWidth: 1,
//         borderBottomColor: '#dadada'
//      },
//      arrow: {
//          position: 'absolute',
//        //  top: 50,
//          right: 40,
//          width: 30,
//          height: 30,
//          flex:1,
//         // borderWidth: 0.1,
//          borderRadius: 15,
//         alignSelf: 'stretch',
 
//      },
//     title:{
//         marginTop:20,
//         marginLeft: 20,
//         marginBottom: 20,
//         textAlign: 'left',
//         fontSize: 20,
//         fontWeight: 'bold'
//     },
//     mainContainer : {
//         marginTop: 50,
//         flex: 1,
//         backgroundColor: '#dadada',
        
//     },
//     pushText:{
//         fontSize: 15,
//         position: 'absolute',
//         top: 25,
//         left: 50
//         //marginRight: 50,
//         //marginTop: 25,
//        // marginBottom: 25,
//        // marginLeft: 20
//     },
//     notificationText: {
//         fontSize: 15,
//         position: 'absolute',
//         top: 25,
//         left: 50
//     },
//     pushNotificationContainer:{
//         flexDirection: 'row',
//      //   paddingLeft: 50,
//         backgroundColor: '#ffffff',
//         height: 70,
//         width:'100%',
//         marginBottom: 10,
//       //  marginRight: 20,
//       //  marginLeft: 20
//        // paddingLeft:10
        
//     },
//     notificationContainer:{
//         flexDirection: 'row',
//      //   paddingLeft: 50,
//         backgroundColor: '#ffffff',
//         height: 70,
//         width: '100%',
//      //   marginRight: 20,
//       //  marginLeft: 20,
//         marginBottom: 10
//     },
//     pickerContainer:{
//         flexDirection: 'row',
//      //   paddingLeft: 50,
//      //   backgroundColor: '#ffffff',
//         height: 120,
//         marginRight: 20,
//         marginLeft: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
        
//     },
//     swtich:{
//         position: 'absolute',
//         top: 25,
//         right: 50
//       //  marginTop: 25,
//        // marginBottom: 25,
//       //  marginRight: 20
//     },
//     editText:{
//         fontSize: 15,
//         color: '#35b6b4'
//     },
//     editContainer:{
//         position: 'absolute',
//         top: 25,
//         right: 50,
//     },
//     saveOrCancelContainer: {
//         flexDirection: 'row',
//         //   paddingLeft: 50,
//         //   backgroundColor: '#ffffff',
//            height: 50,
//            marginRight: 20,
//            marginLeft: 20,
//            justifyContent:'center',
//            alignItems: 'center'
           
//     },
//     pickerANDSave:{
//       //  flex: 1,
//         backgroundColor: '#ffffff',
//         height: 300,
//         width: '100%'
//     },
//     save:{
//         marginRight: 20,
//         marginTop: 25,
//         marginBottom: 25,
//         fontSize:15,
//         color: '#35b6b4'
//     },
//     cancel:{
//         marginLeft: 20,
//         marginTop: 25,
//         marginBottom: 25,
//         fontSize:15,
//         color: '#35b6b4'
//     }
// })