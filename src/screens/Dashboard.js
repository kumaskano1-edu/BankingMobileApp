import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, FlatList, View } from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
const DATA = [{
    number: "2234 2213 4222 2444",
    cardholder: "Kumas Karaev",
    expire: "01/24",
    balance: 3211.00,
},
{
    number: "2234 4222 2444 4444",
    cardholder: "KOKODKE",
    expire: "02/21",
    balance: 22221.00,
},
]
const FancyHeader = () => { 
    return(
        <View style={{  
            position: 'absolute',
            width: '100%',
            height: '50%',
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
            </LinearGradient>
        </View>

    );
}


class CreditCardComponents extends Component {

    renderItem = ({item}) => {
        return(
        <View style={styles.cardContainer}>
            <View style={styles.Text_CardTypeImage}>
                <Text style={styles.Title}>Current Balance</Text>
                <FontAwesome5 name="cc-visa" light size={30} />
            </View>
            <View style={styles.CurrentBalance}>
                <View style={styles.USD_Sign}>
                    <Text color='#FFFFF'>USD</Text>
                </View>
                <Text style={styles.Balance}>{item.balance}</Text>
            </View>
            <View style={styles.CardNumberContainer}>
                <Text style={styles.CardNumber}>{item.number}</Text>
            </View>
            <View style={styles.Cardholder_ExpiryDate}>
                <Text>{item.cardholder}</Text>
                <Text>{item.expire}</Text>
            </View>
        </View>
        )
    }
    render() {
        return(
            <View>
                <FlatList
                data={DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.number}
            />
          </View>
        );
    } 
}

export default class Dashboard extends Component {
    render() {
        return (
            <View>
            <FancyHeader/>
            <CreditCardComponents />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: '5%',
        borderRadius: 22,
        margin: 11,
        marginLeft: '5%',
        marginRight: '5%',
    },
    Text_CardTypeImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Title: {
        fontSize: 17,
        color: "lightgrey" 
    },
    CardTypeImage: {},
    CurrentBalance: {
        flexDirection: 'row',
    },
    USD_Sign: {
        backgroundColor: "#17f9f2",
        borderRadius: 9,
        padding: '2%',
    },
    Balance: {
        padding: '1%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    CardNumber: {
        fontSize: 18
    },
    Cardholder_ExpiryDate: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})  