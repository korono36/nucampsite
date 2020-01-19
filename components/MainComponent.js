import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Reservation from './ReservationComponent';
import { View, Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions,
    fetchPartners } from '../redux/ActionCreators';
    
    
    const mapDispatchToProps = {
        fetchCampsites,
        fetchComments,
        fetchPartners,
        fetchPromotions
    };
    

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { 
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />

            }),
        },

        
        
        CampsiteInfo: { screen: CampsiteInfo },
        About: { screen: About},
        Contact: { screen: Contact}
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
                    name='home'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);
const ReservationNavigator = createStackNavigator(
    {
        Reservation: { screen: Reservation }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='tree'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        Home: { screen: About }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
                    name='info-circle'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Home: { screen: Contact }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
                    name='address-card'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);

const ReservationNavigator = createStackNavigator(
    {
        Reservation: { screen: Reservation }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
                    name=''
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigatorOptions: {
              drawerIcon:({tintColor}) => [
                  <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                  />
              ]  
            } 
        },
        Directory: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator },
        Home: { screen: HomeNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
})

export default connect(null, mapDispatchToProps)(Main);