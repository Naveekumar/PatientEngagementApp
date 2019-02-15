import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
            markers: [],
            mapStyle: null
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.03,
                        longitudeDelta: 0.03,
                    },
                    markers: [{
                        latlng: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        },
                        title: 'marker test',
                        description: 'ta ta ra',
                    }],
                });
            }, (error) => {
                console.log(error);
                this.setState({
                    region: {
                        latitude: 17.4494,
                        longitude: 78.3725,
                        latitudeDelta: 0.03,
                        longitudeDelta: 0.03,
                    },
                    markers: [{
                        latlng: {
                            latitude: 17.4494,
                            longitude: 78.3725,
                        },
                        title: 'Value Labs',
                        description: 'ta ta ra',
                    },
                    {
                        latlng: {
                            latitude: 17.4511,
                            longitude: 78.3663,
                        },
                        title: 'Hostel',
                        description: 'ta ta ra',
                    }],
                });
            },
        );
    }


    onRegionChange = (region) => {
        this.setState({ region });
    }

    render() {

        const { region } = this.props;
        const { markers } = this.props;
        console.log(region);
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}>

                    {this.state.markers.map((marker, index) => (
                        <MapView.Marker
                            key={index}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}

                        />
                    ))}
                </MapView>
            </View>
        );
    }
}
