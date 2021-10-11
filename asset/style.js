import { StyleSheet } from 'react-native';



module.exports = StyleSheet.create({




    h1: {
        fontSize: 32,
        marginBottom: 20,
        textAlign:'center'
    },
    h2:{
        fontSize: 22,
        marginVertical: 10,
        textAlign:'left'
    },
    h2Center : {
        fontSize: 22,
        marginVertical: 10,
        textAlign:'center'
    },
    h3:{
        fontSize:18,
        marginTop:20,
        fontWeight:'bold'
    },
    p: {
        fontSize: 16,
        marginVertical:10
    },

    pxy: {
        padding: 20
    },
    px:{
        paddingHorizontal:20
    },

    container: {
        flex: 1,
        flexDirection:'column'
    },
    
    containerStatic:{
        
        padding:20,
        paddingTop:75,
        
    },

    row:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',  
    },



    /*HOME PAGE*/
    logoContainer: {
        width: '100%',
        height: '75%',
        paddingVertical:'30%',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    logoWrapper:{
        marginVertical:'20%'
    },

    logo: {
        width: 150,
        height: 201,
    },
    /*HOME PAGE*/

    btnContainer: {
       height:50,
       margin:20,
       marginTop: 'auto',
       backgroundColor:'#662483',
       borderRadius:5,
       padding:15,
       flexDirection: 'row',
       justifyContent:'center',
        alignItems:'center',
        shadowColor: 'white'

    },

    btn:{
        fontSize:16,
        color:'#ffffff',
        textAlign:'center',
        flexDirection: 'row'
    },

    btnErrorContainer:{
        height:50,
        margin:20,
        marginTop: 'auto',
        backgroundColor:'red',
        borderRadius:5,
        padding:15,
    },

    btnOutline:{
        height:30,
        borderWidth:1,
        borderColor:'#dadada',
        borderRadius:5, 
        paddingHorizontal:10,
        paddingVertical:6  
    },



    /*JOKE PAGE*/

    progressBar:{
        height:105,
        backgroundColor:'#d6007a',
    },

    jokeWrapper:{ 
        backgroundColor:'#662483',
        padding:20,
        paddingTop:35,
        minHeight:'50%',
        alignContent:'center',
        justifyContent:'center'
    },

    joke:{
        fontSize: 22,
        color:'#ffffff'
    },


    feedbackContainer:{
        paddingHorizontal:10,
        position:'absolute',
        top:'auto',
        bottom:20,
        left:0,
        width:'100%'
    },
    responseQuestion:{
      paddingHorizontal:10,
    //   flex: 1,
    },

    responseContainer:{
        flex: 1, 
        flexDirection: 'row'
    },

    btnResponse:{
        flex: 1, 
        flexDirection: 'row',
        marginHorizontal:10,
        backgroundColor:'#662483',
        borderRadius:5,
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        minHeight:50
    },

    txt:{
        color:'#ffffff'
    },

    icon:{
        marginLeft:10,
    },
    /*JOKE PAGE*/


   /*JOKE RESULT*/

    moodLevel:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'#dadada',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto'

    },

    level:{
        textAlign:'center',
        fontSize:22,

    },
    
    /*JOKE RESULT*/


    /*HISTORY*/
    calendarContainer:{
        paddingTop:75,
        paddingBottom:20

    },

    summaryContainer:{
        padding:20,
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    summary:{
        alignItems:'center'
    },
    emojis :{
        width:50,
        height:50
    },
    /*HISTORY*/
    historyAndFeeback: {
        padding:20,
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between'

    },


    /*ABOUT*/
        aboutContainer:{
            paddingVertical:75,
            paddingHorizontal:20
        },

    /*ABOUT*/


    /*SETTINGS*/
    switch:{
    },
    pickeCrontainer:{
        paddingHorizontal:10,
    },
    picker:{
        marginVertical:20
    }
    /*SETTINGS*/

});