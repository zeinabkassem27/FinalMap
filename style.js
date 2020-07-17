import { Dimensions } from "react-native";  

const a=930;
let w= Math.round(Dimensions.get('screen').width)*2+20;  
let h= Math.round(Dimensions.get('screen').height)+50;  

 module.exports = {
    "container": {
     /*  flex:1,
      flexDirection: 'column', */
       position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      "map": {
        height:'90%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0 ,
      },
      "signup_view":{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      
      },
      "signup_text":{
        //color:'white',
        fontSize:17,
        textAlign:'right',
        paddingRight:7,
        color:'#4d4d4d',
        paddingBottom:3,
        marginBottom:10,
      },
      "signup_inner_view":{
        marginTop:'10%',
        marginLeft:'5%',
        marginRight:'5%'
      },
      "backgroundImage":{
        resizeMode:'cover'
      },
      "image": {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:w,
        height:h,
        transform: [{ rotate: '40deg' }]
      },
      "ViewButton":{
        marginBottom:'55%',
        marginLeft:'10%',
        marginRight:'10%'
      },
      "ViewImage":{
        width:120,
        height:250
      },
      "ButtonViews":{
        backgroundColor:'#f2b305',
        height:'10%',
        width:500,
        flexDirection:'row',
        justifyContent: 'space-around' 
      },
      'Text1':{
        marginTop:'18%',
        color:'#242f3e',
        fontSize:27,
        
      },
      'Text2':{
        marginTop:'12%',
        color:'#242f3e',
        fontSize:27,
      },
      'InputTitle':{
        fontSize:22,
        color:'#4d4d4d',
       
      },
      'TextSign':{
        marginTop:'4%',
        fontSize:22,
        borderBottomColor: '#f2b305',
        borderBottomWidth: 2,
        marginLeft:'65%',
        color:'#525050',
      },
      'TextSignin':{
        backgroundColor:'#525050',
        height:'18%',
        color:'#f2b305',
        fontSize:30,
        paddingRight:'24%',
        paddingTop:'1%',
        borderRadius:10,
        marginTop:'2%'
      },
      'TextSignins':{
        backgroundColor:'#525050',
        height:'10%',
        color:'#f2b305',
        fontSize:30,
        paddingRight:'24%',
        paddingTop:'1%',
        borderRadius:10,
        marginTop:'2%'
      },
      'ExpertBar':{
        marginTop:600,
        flexDirection:'row',
        justifyContent: 'space-around',
        backgroundColor:'#f2b305',
        height:'50%',
       
      },
      'ExpertButton':{
        color:'#242f3e',
        fontSize:22,
        marginTop:'10%'
      },
      'ExpertButtons':{
        color:'#242f3e',
        fontSize:22,
        marginTop:'25%'
      },
      'ExpertEditView':{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
      },
      'ExpertEditV1':{
        backgroundColor:'#525050',
        width:'45%'
      },
      'ExperEditB1':{
        backgroundColor:'#f2b305',
        width:'45%',
        height:50,
        borderRadius:20
      },
      'ExpertEditV1Text':{
        fontWeight:'bold',
        color:'#f2b305',
        fontSize: 25,
        marginRight:'35%',
        marginTop:'3%'
      },
      'ExpertEditV2Text':{
        fontWeight:'bold',
        color:'#525050',
        fontSize: 25,
        marginRight:'35%',
        marginTop:'3%'
      },
      'WelcomeButtonz':{
        backgroundColor:'#f2b305',
        fontSize:35,
        color:'#242f3e',
        height:50,
        width:150,
        paddingRight:'7%',
        borderRadius:10,
        marginTop:'20%',
        marginLeft:'59%'
      },
      'logoImage':{
        width:'60%',
        height:'60%',
        marginLeft:'35%',
        marginTop:'5%',
        transform: [{ rotate: '13deg' }]
      },
      'SignUpImage':{
        height:'40%',
        width:'40%',
        marginTop:'12%' ,
        marginLeft:'25%'
      },
      'SignINImage':{
        height:'40%',
        width:'40%',
        marginBottom:'20%',
        marginLeft:'20%'
      },
      'MapViwClientt':{
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
       // color:'red',
       backgroundColor:'white',
       height:250,
      },
      'ClientViewForm':{
        width:'100%',
      },
      'IconView':{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      'MapViwText':{
        fontSize:30,
        color:'#525050',
        borderBottomColor: '#f2b305',
        borderBottomWidth: 2,
        marginRight:'7%',
        marginLeft:'12%',
        marginBottom:'2%',
        paddingBottom:'2%',
        paddingRight:'2%',
        marginTop:'2%'
      },
      'MapViwText1':{
        fontSize:30,
        color:'#525050',
        borderBottomColor: '#f2b305',
        borderBottomWidth: 2,
        marginRight:'7%',
        marginLeft:'12%',
        marginBottom:'3%',
        paddingBottom:'3%',
        paddingRight:'2%',
        paddingLeft:'46%'
      }
}