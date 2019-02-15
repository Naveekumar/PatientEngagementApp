import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import { Strings } from '../localizations/Strings';
import { Colors } from '../styles';

import { Actions } from 'react-native-router-flux'

class Dashboard extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <ImageBackground style={styles.containerStyle}
                    source={require('../assets/BSWH-Dashboard.png')}>
                    <View style={styles.cardStyle}>
                        <View style={{ backgroundColor: 'rgba(255,0,51,0.7)', height: 150, flexDirection: "row", justifyContent: 'space-between' }}>
                            <Image style={{ margin: 25 }}
                                source={require('../assets/calender-Icon.png')}
                            />

                            <View style={{ flexDirection: "column", justifyContent: 'space-around', marginRight: 25 }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 25, color: '#ffffff', marginTop: 5 }}>{Strings.appointment}</Text>
                                </View>
                                <Text style={{ fontSize: 30, color: '#ffffff' }}>Oct 24, 2018</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 27, color: '#ffffff', marginBottom: 5 }}>10:30 am</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 15, backgroundColor: 'rgba(255,255,255,0.5)' }}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../assets/add-Icon.png')} />
                                <Text style={{ fontSize: 20, marginLeft: 8 }}>{Strings.new}</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../assets/seeAll-Icon.png')} />
                                <Text style={{ fontSize: 20, marginLeft: 8 }}>{Strings.see_all}</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.cardStyle}>
                        <View style={{ backgroundColor: 'rgba(255,0,51,0.7)', height: 100, flexDirection: "row", justifyContent: 'space-between' }}>
                            <Image style={{ margin: 20 }}
                                source={require('../assets/messages.png')}
                            />
                            <View style={{ flexDirection: "column", justifyContent: 'space-between', marginRight: 25 }}>
                                <Text style={{ fontSize: 25, color: '#ffffff', marginTop: 15 }}>{Strings.messages}</Text>

                                <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
                                    <Text style={{ fontSize: 30, color: '#ffffff' }}>2</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 15, backgroundColor: 'rgba(255,255,255,0.7)' }}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../assets/add-Icon.png')} />
                                <Text style={{ fontSize: 20, marginLeft: 8 }}>{Strings.new}</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../assets/seeAll-Icon.png')} />
                                <Text style={{ fontSize: 20, marginLeft: 8 }}>{Strings.see_all}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        {/* <Image style={{ width: '100%' }}
                            source={require('../assets/Dashboardbutton.png')} >
                        </Image> */}


                        <TouchableHighlight onPress={() => Actions.FindCare()}
                            style={{
                                width: '80%',
                                marginTop: 15,
                                marginLeft: 40,
                                marginRight: 40,
                                marginBottom: 15,
                                backgroundColor: Colors.red,
                                alignItems: 'center',
                                padding: 15,
                                borderRadius: 1
                            }}>

                            <Text style={{ color: "#ffffff" }}>Find Care</Text>
                        </TouchableHighlight>

                    </View>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    viewStyle: {
        backgroundColor: Colors.red,
        flexDirection: "row",
        paddingTop: 15,
        height: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9,
        elevation: 2,
        justifyContent: 'space-between'

    },
    welcomeStyle: {
        fontSize: 22,
        color: '#ffffff',
        paddingLeft: 30
    },
    iconStyle: {
        fontSize: 20,
        color: '#ffffff',
        paddingRight: 30
    },
    cardStyle: {
        borderWidth: 1,
        borderColor: '#FF0000',
        borderBottomWidth: 1,
        shadowColor: '#0000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,

    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default Dashboard;