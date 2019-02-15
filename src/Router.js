import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Splash from '../src/components/Splash';
import Welcome from '../src/components/Welcome';
import Login from '../src/components/Login';
import Dashboard from '../src/components/Dashboard';
import FindCare from '../src/components/FindCare';
import GetCareOnline from '../src/components/GetCareOnline';
import MapsScreen from '../src/components/MapsScreen';

import { Strings } from '../src/localizations/Strings';
import { Colors } from '../src/styles';

import { Actions } from 'react-native-router-flux';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={styles.navigationBar} >
            <Scene key="root">
                <Scene key="splash" component={Splash} hideNavBar initial />
                <Scene key="welcome" component={Welcome} hideNavBar />
                <Scene key="login" component={Login} hideNavBar />
                <Scene key="dashboard" component={Dashboard} title={Strings.welcome} titleStyle={{ alignSelf: 'center', color: Colors.white }} onLeft={() => Actions.login()} onRight={() => null} rightButtonImage={require('../src/assets/icons8-menu-24.png')} />
                <Scene key="FindCare" component={FindCare} onLeft={() => null} onRight={() => Actions.dashboard()} rightButtonImage={require('../src/assets/close_white_icon.png')} leftButtonImage={require('../src/assets/bswh_logo.png')} />
                <Scene key="getCareOnline" component={GetCareOnline} title={Strings.get_care_online} titleStyle={{ alignSelf: 'center', color: Colors.white }} onLeft={() => Actions.FindCare()} onRight={() => null} leftButtonImage={require('../src/assets/blue_left_arrow.png')} rightButtonImage={() => null} />
                <Scene key="mapsScreen" component={MapsScreen} hideNavBar />
            </Scene>
        </Router>
    );
}

const styles = StyleSheet.create({

    navigationBar: {
        backgroundColor: Colors.red,
    },
    title: {
        color: Colors.white,
        fontSize: 20,
        margin: 20,
        fontWeight: 'normal'
    }

});

export default RouterComponent;