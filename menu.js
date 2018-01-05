import React from 'react';
import { StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ListView,
  Button,
  TouchableOpacity,
        } from 'react-native';

import firebase from 'react-native-firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "fireb-c693f.firebaseapp.com",
  databaseURL: "https://fireb-c693f.firebaseio.com",
  storageBucket: "fireb-c693f.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {

          // get children as an array
          var items = [];
          snap.forEach((child) => {
            items.push({
              title: child.val().title,
              _key: child.key
            });
          });

          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
          });

        });
      }

  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();

    this.itemsRef.set({
        title:'4488',
        author:'sws'
    });
    this.itemsRef.update({ author: 'kar' });

    this.state = {
      dataSource: new ListView.DataSource({
                  rowHasChanged: (row1, row2) => row1 !== row2,
                })
    };
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }



  render() {
    return (
    <View style={{flex:1}}>
      <View style={styles.first}>
        <View style={styles.second}>
             <View style={styles.third}>
               <TouchableOpacity  onPress={()=>{}} style = {styles.buttonset}>
                  <Text style={styles.Textlook}>主菜</Text>
               </TouchableOpacity>
             </View>

             <View style={styles.borderset}></View>

             <View style={styles.third}>
                <TouchableOpacity onPress={()=>{}} style = {styles.buttonset}>
                  <Text style={styles.Textlook}>麵食</Text>
                </TouchableOpacity>
             </View>
        </View>

        <View style={styles.borderset}></View>

        <View style={styles.second}>
             <View style={styles.third}>
                 <TouchableOpacity onPress={()=>{}} style = {styles.buttonset}>
                   <Text style={styles.Textlook}>湯品</Text>
                 </TouchableOpacity>
             </View>

             <View style={styles.borderset}></View>

             <View style={styles.third}>
                 <TouchableOpacity onPress={()=>{}} style = {styles.buttonset}>
                    <Text style={styles.Textlook}>副菜</Text>
                 </TouchableOpacity>
             </View>
        </View>

        <View style={styles.borderset}></View>

        <View style={styles.second}>
              <View style={styles.third}>
                  <TouchableOpacity onPress={()=>{}} style = {styles.buttonset}>
                     <Text style={styles.Textlook}>甜點</Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.borderset}></View>

              <View style={styles.third}>
                  <TouchableOpacity onPress={()=>{}} style = {styles.buttonset}>
                     <Text style={styles.Textlook}>水果</Text>
                  </TouchableOpacity>
              </View>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 80,
    marginBottom: 16,
    width: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  first: {
    flex: 9,
    flexDirection: 'column'
  },
  second: {
    flex:1,
    flexDirection:'row'
  },
  third: {
    flex:1,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonset: {
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:200,
  },
  Textlook: {
    fontSize:25,
    color:'#000000'
  },
  borderset: {
    borderWidth:1,
    borderColor:'#666666'
  }

});
