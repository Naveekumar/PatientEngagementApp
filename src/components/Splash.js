import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            Actions.welcome()
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                < ImageBackground style={{ flex: 1 }}
                    source={require('../assets/BSWH-splash.jpg')} />
            </View>
        );

    }

}


export default Splash;