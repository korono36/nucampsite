import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';


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
                <Card title ="Card with divider">
                    {

                    }
                </Card>
            </ScrollView>
        );
    }
}
  

export default Contact;