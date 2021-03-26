import React from 'react';
import {StyleSheet, Button, Text, View, FlatList, Image} from 'react-native';


export default class Profile extends React.Component{

    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.getParam('title'),
        };
    };

    render(){
        const { navigate } = this.props.navigation;
        const text = this.props.navigation.getParam('text')
        const name = this.props.navigation.getParam('name')
        return(
            <View>
                <Text style={styles.baseText}>{'DAasdasdasdasdadte: ' + name}</Text>
                <Text style={styles.secondText}>{'Joke: '}</Text>
                <Text style={styles.thirdText}>{text}</Text>
            </View>   
            

        )
    }
}

const styles = StyleSheet.create({
    baseText: {
    fontSize: 18,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 20,
    },
    secondText: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 10,
    color: 'red',
    },
    thirdText: {
    fontSize: 30,
    marginTop: 5,
    marginLeft: 25,
    }
 })