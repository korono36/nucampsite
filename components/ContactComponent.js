import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';


const contactInfo = [
    {
        id: 0,
        name: '1 Nucamp Way',
        address: 'Seattle WA 98001',
        country: 'USA',
        phone: '1-206-555-1234',
        email: 'campsites@email.com'
    }
]

class Contact extends Component{
    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card
                        title='Contact Information'
                        wrapperStyle={{margin: 20}}>
                        <Text>1 Nucamp Way</Text>
                        <Text>Seattle, WA</Text>
                        <Text style={{marginBotton: 10}}>U.S.A</Text>
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text>Email: campsites@nucamp.co</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}
  

export default Contact;