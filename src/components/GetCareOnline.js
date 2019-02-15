import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from '../styles';
import { Strings } from '../localizations';


class GetCareOnline extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 23, color: Colors.darkBlue }}>{Strings.skip_the_doctors_office}</Text>
                    <Text style={{ fontSize: 23, color: Colors.darkBlue }}>{Strings.with_an_e_visit}</Text>
                </View>

                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column', margin: 10, alignItems: 'center' }}>
                        <Image source={require('../assets/page_1.png')} />
                        <Text style={{ fontSize: 18, color: Colors.greyishBrown }}>{Strings.online}</Text>
                        <Text style={{ fontSize: 18, color: Colors.greyishBrown }}>{Strings.interview}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', margin: 10, alignItems: 'center' }}>
                        <Image source={require('../assets/getcare_icon_2.png')} />
                        <Text style={{ fontSize: 18, color: Colors.greyishBrown }}>{Strings.diagnosis_by}</Text>
                        <Text style={{ fontSize: 18, color: Colors.greyishBrown }}>{Strings.a_clinician}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', margin: 10, alignItems: 'center' }}>
                        <Image source={require('../assets/getcare_icon_3.png')} />
                        <Text style={{ fontSize: 18, color: Colors.greyishBrown }}>{Strings.response}</Text>
                        <Text style={{ fontSize: 18, color: Colors.greyishBrown }}>{Strings.prescription}</Text>
                        <Text style={{ fontSize: 18, color: Colors.greyishBrown }}>{Strings.if_needed_in_1hr}</Text>
                    </View>
                </View>

                <TouchableHighlight onPress={() => Actions.mapsScreen()} style={styles.startEVisitButton}>
                    <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: 17 }}>{Strings.start_e_visit}</Text>
                </TouchableHighlight>

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ color: Colors.darkBlue, fontSize: 22, paddingTop: 15, paddingBottom: 5 }}>{Strings.symptoms_we_treat}</Text>
                    <Text style={styles.textStyle}>{Strings.cold_flu_allergies}</Text>
                    <Text style={styles.textStyle}>{Strings.skin_conditions}</Text>
                    <Text style={styles.textStyle}>{Strings.tobacco_cessation}</Text>
                    <Text style={styles.textStyle}>{Strings.stomach_and_digestive_issues}</Text>
                    <Text style={styles.textStyle}>{Strings.minor_eye_conditions}</Text>
                    <Text style={styles.textStyle}>{Strings.vaginal_yeast_infection}</Text>
                    <Text style={styles.textStyle}>{Strings.bladder_infection}</Text>

                </View>


                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Dont see an option that works for you? Set up an </Text>
                        <Text style={styles.buttonText}> {Strings.office_visit_with_a_doctor} </Text>
                        <Text style={[styles.buttonText, { fontSize: 18, color: Colors.red }]}> {Strings.find_a_doctor} </Text>

                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    startEVisitButton: {
        width: '70%',
        backgroundColor: Colors.red,
        padding: 15,
        alignSelf: 'center',
        borderRadius: 8,
        marginRight: 30,
        marginLeft: 30
    },
    buttonContainer: {
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#EEEEEE',
        padding: 15,
    },
    buttonText: {
        color: Colors.greyishBrown,
        fontSize: 17
    },
    textStyle: {
        color: Colors.greyishBrown,
        fontSize: 18,
         margin: 3
    }

});

export default GetCareOnline;
