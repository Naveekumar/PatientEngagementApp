import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    TextInput,
    Image,
    Switch,
    StyleSheet,
    TouchableHighlight,
    Text,
    Alert
} from 'react-native';

import { Strings } from '../localizations';
import { Colors } from '../styles';

import { Actions } from 'react-native-router-flux';

class Login extends Component {

    state = {
        switchValue: false,
        username: '',
        password: ''
    };

    onButtonPress() {
        const { username, password } = this.state;
        if (username === 'a' || password === 'a') {
            Actions.dashboard()
            this.setState({ username: '', password: '' })
        } else
            this.showAlert()
    }

    _handleToggleSwitch = () => this.setState(state => ({
        switchValue: !state.switchValue
    }));

    showAlert = () => {
        Alert.alert(
            '', 'Incorrect Username/password used',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    render() {

        return (

            <View style={styles.container}>
                <ImageBackground style={styles.container}
                    source={require('../assets/BSWH-login.png')}>

                    <Image style={styles.image}
                        source={require('../assets/logo_baylor.png')}
                    />

                    <Text style={styles.heading}>{Strings.my_bsw_health}</Text>

                    <View style={styles.inputsContainer}>

                        <TextInput style={styles.input}
                            placeholder="Username"
                            keyboardType="email-address"
                            placeholderTextColor="#000000"
                            value={this.state.username}
                            onChangeText={username => this.setState({ username })} />


                        <TextInput style={styles.input}

                            placeholder="password"
                            secureTextEntry={true}
                            placeholderTextColor="#000000"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })} />


                        <View style={styles.saveusername}>

                            <Text style={styles.text}>Save Username</Text>
                            <Switch
                                value={this.state.switchValue}
                                onValueChange={this._handleToggleSwitch}
                            />
                        </View>
                        <TouchableHighlight onPress={this.onButtonPress.bind(this)}
                            style={styles.button} >
                            <Text style={styles.buttonText}> {Strings.sign_in} </Text>

                        </TouchableHighlight>

                        <Image
                            style={{ alignSelf: 'center', marginBottom: 5 }}
                            source={require('../assets/fingerprint.png')}
                        />

                    </View>

                    <View style={styles.bottomContainer}>

                        <Text style={{ fontSize: 20, color: '#000000' }}>
                            {Strings.forgot}
                        </Text>


                        <TouchableHighlight >
                            <Text style={{ fontSize: 20, marginLeft: 5, color: '#000000', textDecorationLine: "underline" }}>{Strings.username}</Text>
                        </TouchableHighlight>

                        <Text style={{ fontSize: 20, marginLeft: 5, color: '#000000' }}>{Strings.or}</Text>

                        <TouchableHighlight>
                            <Text style={{ fontSize: 20, marginLeft: 5, color: '#000000', textDecorationLine: "underline" }}>{Strings.password}</Text>
                        </TouchableHighlight>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>

                        <TouchableHighlight>
                            <Text style={{ fontSize: 20, color: '#000000', textDecorationLine: "underline" }}>{Strings.register}</Text>
                        </TouchableHighlight>

                        <Text style={{ fontSize: 20, marginLeft: 15, marginRight: 15, color: '#000000' }}>
                            |
                        </Text>
                        <TouchableHighlight>
                            <Text style={{ fontSize: 20, color: '#000000', textDecorationLine: "underline" }}>
                                {Strings.find_a_doctor}
                            </Text>
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
        marginTop: 40
    },
    heading: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#000000',
        marginTop: 15
    },
    inputsContainer: {
        backgroundColor: 'rgba(119,119,119,0.4)',
        marginTop: 15
    },
    input: {
        flexDirection: 'row',
        fontSize: 19,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 15,
        height: 55,
        width: '80%',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 13
    },

    text: {
        fontSize: 19,
        marginRight: 5,
        color: '#000000',
        // margin: 15
    },

    saveusername: {
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'flex-end',
        marginRight: 40,

    },
    button: {
        width: '80%',
        marginTop: 15,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
        backgroundColor: Colors.red,
        alignItems: 'center',
        padding: 15,
        borderRadius: 13
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18
    },

    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },

});

export default Login;