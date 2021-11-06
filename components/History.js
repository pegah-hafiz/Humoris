import React, {Component} from 'react'
import { StyleSheet, Text, View, PanResponder, TouchableOpacity, Image } from 'react-native'
import {LocaleConfig} from 'react-native-calendars'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { AnimatedCircularProgress, CircularProgress } from 'react-native-circular-progress'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigation, { Tab , NavigationComponent } from 'react-native-material-bottom-navigation'
import styles from '../asset/style'
import calendarIcon from '../asset/calendar-2.png'

LocaleConfig.locales['en'] = {
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.'],
    dayNames: ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'],
    dayNamesShort: ['S','S','M','T','W','T','F']
};
  
LocaleConfig.defaultLocale = 'en'

const below_normal = {key:'below_normal', color: '#ea5b0c'}
const normal = {key:'normal', color: '#61c3d9'}
const above_normal = {key:'above_normal', color: '#52ae32'}
const circle_size = 30



export default class History extends Component{
    static navigationOptions = {
        tabBarLabel: 'History',
        tabBarIcon: () => (<Image source={calendarIcon} style={{width:24 , height:24}} />),
      }
    constructor(props){
        super(props)
        this.state ={
        //   color: this.props.navigation.state.params.todayColor
           
         //  displayTodayScore: this.props.navigation.state.params.displayTodayScore
           
        };
        
    }

    
    render() {

      
        const currentdate = new Date();
        
        let day = currentdate.getDate();
        let month = currentdate.getMonth() + 1;

        if(month<10){
            month = '0' + month
        }
        if(day<10){
            day = '0' + day
        }
        const year = currentdate.getFullYear();
        
        const today = String(year) + '-' + String(month) + '-' + String(day);
        
        const color_info = () =>{
            return (
                
            <View style={styles.palete_label_container}>
            
                <View style={styles.label_palete_container}> 
                    <Text style={styles.label_palete}>Below Normal</Text>
                    <Text style={styles.label_palete}>Normal</Text>
                    <Text style={styles.label_palete}>Above Normal</Text>                            
                </View>
                <View style= {styles.color_palete_container}>
                    <View style={styles.color_indicator_below}></View>
                    <View style={styles.color_indicator_normal}/>
                    <View style={styles.color_indicator_above}/>                        
                </View>
                                   
             </View>
            )
        }
        return (
            <View style={styles.container}>

                
                <View style={styles.calendarContainer}>
                    <Calendar
                    // Initially visible month. Default = Date()
                    current= {new Date()}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2018-01-01'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2019-01-01'}
                    // Handler which gets executed on day press. Default = undefined
                  //  onDayPress={(day) => {alert(today)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                  //  onMonthChange={(month) => {console.log('month changed', month)}}
                    // Hide month navigation arrows. Default = false
                    hideArrows={false}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                   // renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={2}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    markedDates={{
                        [today]: {selected:true, selectedColor: String(this.props.today_color)},
                       // '2018-04-23': {selected: true, selectedColor: normal.color},
                        '2018-05-01': {selected: true, selectedColor: normal.color},
                       // '2018-04-19': {selected: true, selectedColor: above_normal.color},
                       // '2018-04-25': {selected: true, selectedColor: below_normal.color},
                       // '2018-04-21': {selected: true, selectedColor: normal.color} ,
                       // '2018-04-20': {selected: true, selectedColor: above_normal.color} ,
                        '2018-05-02': {selected: true, selectedColor: above_normal.color},
                        '2018-05-03': {selected: true, selectedColor: above_normal.color}  ,
                        '2018-05-05': {selected: true, selectedColor: below_normal.color}, 
                        '2018-05-07': {selected: true, selectedColor: normal.color},                                                               
                     }}
                    />
                   </View>
                   <View style={styles.feedbackContainer}> 
                   <View style={styles.px}>
                       <Text style={styles.h2}>
                           Your mood summary this month:
                       </Text>
                   </View>
               

                   <View style={styles.summaryContainer}>
             
                       <View style={styles.summary}>
                           <AnimatedCircularProgress
                               size={100}
                               width={10}
                               fill={45}
                               tintColor={below_normal.color}
                               onAnimationComplete={() => console.log('onAnimationComplete')}
                               backgroundColor="#dadada" 
                               >
                               {
                                   (fill) => (
                                    <Image
                                    style={styles.emojis}
                                    source= {require('../asset/belowNormal.png')}
                                    />
                                   )
                               }
                           </AnimatedCircularProgress> 
                           {/*<Text>Below Normal</Text>*/}
                       </View>

                       <View style={styles.summary}>
                           <AnimatedCircularProgress
                               size={100}
                               width={10}
                               fill={25}
                               tintColor={normal.color}
                               onAnimationComplete={() => console.log('onAnimationComplete')}
                               backgroundColor="#dadada" 
                               >
                               {
                                   (fill) => (
                                    <Image
                                    style={styles.emojis}
                                    source= {require('../asset/normal.png')}
                                    />
                                   )
                               }
                           </AnimatedCircularProgress>
                           {/*<Text>Normal</Text> */}
                       </View>

                       <View style={styles.summary}>
                           <AnimatedCircularProgress
                               size={100}
                               width={10}
                               fill={30}
                               tintColor={above_normal.color}
                               onAnimationComplete={() => console.log('onAnimationComplete')}
                               backgroundColor="#dadada" 
                               >
                               {
                                   (fill) => (
                                    <Image
                                    style={styles.emojis}
                                    source= {require('../asset/aboveNormal.png')}
                                    />
                                   )
                               }
                           </AnimatedCircularProgress>
                         
                           
                
                          {/*} <Text>Above Normal</Text> */}
                       </View>
                   
                   </View>

               </View>
             {/*}  <Image source={require("../asset/logo.jpg")} style={styles.logo} />    */}                    

       
       </View>
   )
}
}




// const styles = StyleSheet.create({
//     header: {
//        marginTop: 50,
//        width: '100%',
//        height: 100,
//        borderBottomWidth: 1,
//        borderBottomColor: '#dadada'
//     },
//     info: {
//         position: 'absolute',
//         top: 50,
//         left: 20,
//         width: circle_size,
//         height: circle_size,
//         flex:1,
//        // borderWidth: 0.1,
//         borderRadius: circle_size/2,
//        alignSelf: 'stretch',
//        backgroundColor:'#000000',
//        borderColor: '#000000'

//     },
//     setting:{
//         position: 'absolute',
//         top: 50,
//         right: 30,
//         width: circle_size,
//         height: circle_size,
//         flex:1,
//        // borderWidth: 0.1,
//         borderRadius: circle_size/2,
//        alignSelf: 'stretch',
//       // backgroundColor:'#000000',
//       // borderColor: '#000000'
//     },
//     title: {
//         fontSize: 16,
//         textAlign: 'center',
//         marginTop: 50,
//         marginLeft: 10,
//         color: '#000000',
//         fontWeight: 'bold',
//     },
//     body: {
//         fontSize: 14,
//         textAlign: 'center',
//         marginBottom: 10,
//         marginTop: 20,
//         color: '#000000',
//         fontWeight: 'bold'        
//     },
//     calendar: {
//         margin: 10
//     },
//     container_progress: {
//         margin: 20,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     circular_progress: {
//         padding: 10,
//         alignItems: 'center'
//     },
//     circle_label: {
//         textAlign: 'center',
//         backgroundColor: 'transparent',
//         fontSize: 12,
//         width: '100%'
//     },
//     color_indicator_normal : {
//         margin: 10,
//         width: circle_size,
//         height: circle_size,
//         borderRadius: circle_size/2,
//         backgroundColor: normal.color
//     },
//     color_indicator_below : {
//         margin: 10,        
//         width: circle_size,
//         height: circle_size,
//         borderRadius: circle_size/2,
//         backgroundColor: below_normal.color
//     },
//     color_indicator_above: {
//         margin: 10,     
//         width: circle_size,
//         height: circle_size,
//         borderRadius: circle_size/2,
//         backgroundColor: above_normal.color
//     },
//     color_palete_container : {
//         margin: 10,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     label_palete: {
//         fontSize:10,
//         padding:20
   
//      //   textAlign: 'center'
 
//     },
//     label_palete_container:{
//         flexDirection:'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     palete_label_container : {
//         flexDirection: 'row'
//     },
//     logo_container: {
//     },
//     logo: {
//         position: 'absolute',
//         bottom: 10,
//         left: 30,
//         width:circle_size,
//         height:circle_size,
//         justifyContent: 'flex-end'
   
//     }
//   });