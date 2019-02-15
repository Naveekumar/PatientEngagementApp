import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableHighlight
} from 'react-native';

import { Colors } from '../styles';
import { Strings } from '../localizations';
//import Login from './Login';

import { Actions } from 'react-native-router-flux';

class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.container}
                    source={require('../assets/BSWH-welcome.png')}>

                    <Image style={styles.image}
                        source={require('../assets/logo_baylor.png')}
                    />

                    <View style={styles.header}>
                        <Text style={styles.headerText}>{Strings.welcome_to}</Text>
                        <Text style={styles.headerText}>{Strings.my_bsw_health}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableHighlight onPress={() => Actions.login()}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}> {Strings.sign_in} </Text>

                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}> {Strings.register} </Text>

                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}> {Strings.find_a_doctor} </Text>

                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        alignSelf: 'center',
        marginTop: 40,
    },
    header: {
        marginTop: 10,
        flexDirection: 'column',
        alignSelf: 'center'
    },
    headerText: {
        fontSize: 30,
        color: '#ffffff',
        textShadowColor: 'rgba(34,34,34,0.9)',
        textShadowOffset: { width: -1, height: 5 },
        textShadowRadius: 10,
        alignSelf: 'center'

    },
    buttonContainer: {
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 60,
        justifyContent: 'flex-end',
    },
    button: {
        width: '80%',
        backgroundColor: Colors.red,
        padding: 15,
        marginTop: 15,
        borderRadius: 13,
        marginRight: 40,
        marginLeft: 40,


    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 17
    },

});

export default Welcome;