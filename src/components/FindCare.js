import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from '../styles';
import { Strings } from '../localizations';


class FindCare extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.findCareOrGetHelp}>
                    <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: 17 }}>{Strings.find_care_or_get_help}</Text>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <View style={[styles.docContainer, { marginTop: 15 }]}>
                        <Image source={require('../assets/find_a_doc_icon_40_px.png')} />
                        <View style={styles.docText}>
                            <Text style={[styles.docText, { color: Colors.red, fontSize: 18 }]}>
                                {Strings.schedule_an_appt}
                            </Text>
                            <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.book_an_appointment_with_your}</Text>
                            <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.doctors_or_explore_options}</Text>

                        </View>
                    </View>
                    <TouchableHighlight onPress={() => Actions.getCareOnline()}>
                        <View style={[styles.docContainer, { marginTop: 15 }]}>
                            <Image source={require('../assets/find_a_loc_icon_40_px.png')} />
                            <View style={styles.docText}>
                                <Text style={[styles.docText, { color: Colors.red, fontSize: 18 }]}>
                                    {Strings.get_care_online}
                                </Text>
                                <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.get_care_without_going_into_the_doctors}</Text>
                                <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.office}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>



                    <View style={[styles.docContainer, { marginTop: 15 }]}>
                        <Image source={require('../assets/find_a_doc_icon_40_px.png')} />
                        <View style={styles.docText}>
                            <Text style={[styles.docText, { color: Colors.red, fontSize: 18 }]}>
                                {Strings.find_a_doctor}
                            </Text>
                            <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.find_doctors_in_your_network_see}</Text>
                            <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.their_detailed_profiles_and_seemlessly}</Text>
                            <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.schedule_appointments}</Text>
                        </View>
                    </View>

                    <View style={[styles.docContainer, { marginTop: 15 }]}>
                        <Image source={require('../assets/find_a_loc_icon_40_px.png')} />
                        <View style={styles.docText}>
                            <Text style={[styles.docText, { color: Colors.red, fontSize: 18 }]}>
                                {Strings.find_a_location}
                            </Text>
                            <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.search_for_clinics_doctors_offices}</Text>
                            <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.emergency_medical_centers_walkin}</Text>
                            <Text style={[styles.docText, { color: Colors.blackTwo, fontSize: 16 }]}>{Strings.clinics_and_more_near_you}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>{Strings.if_this_is_an_emergency_please_contact_911}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    viewStyle: {
        backgroundColor: Colors.red,
        height: 100,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'

    },
    docContainer: {
        flexDirection: 'row',

    },
    docText: {
        flexDirection: 'column',
        marginLeft: 12,

    },
    bottomContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    findCareOrGetHelp: {
        height: 30,
        backgroundColor: '#669933'
    },
    bottomText: {
        color: Colors.blackTwo,
        fontSize: 17,
        fontWeight: 'normal'
    }


});

export default FindCare;
