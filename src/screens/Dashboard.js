import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FancyHeader = () => { 
    return(
        <View style={{  
            position: 'absolute',
            width: '100%',
            height: '14%',
        }}>
            <LinearGradient
                  colors={[ '#17f9f2', '#b0f9a9']}
                  style={{ flex: 1 }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={
                      { borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        width: '100%',
                        height: '100%',
                    }
                  }
                >
                <Text>Kuma</Text>
            </LinearGradient>
        </View>

    );
}

export default class Dashboard extends Component {
    render() {
        return (
            <FancyHeader />
        )
    }
}
