import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, FlatList, Dimensions, View } from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window')

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

const styles = StyleSheet.create({ 
    CardBody: {
       flex: 1,
       width: width - 20,
       height: height / 4,
       backgroundColor: 'white',
       margin: 10,
       padding: 15,
       borderRadius: 20,
    },
    Text_CardTypeImage: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
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
});

const CarouselCreditCard = ({item}) => {
    return (
    <View style={styles.CardBody}>
        <View style={styles.Text_CardTypeImage}>
            <Text style={styles.Title}>Current Balance</Text>
            <FontAwesome5 name="cc-visa" light size={30} />
        </View>
        <View style={styles.CurrentBalance}>
            <View style={styles.USD_Sign}>
                <Text>USD</Text>
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
class CreditCardComponents extends Component {
    render() {
        return(
            <View>
                <FlatList data ={DATA} keyExtractor={(item, index) => 'key' + index} 
                    horizontal scrollEnabled snapToAlignment='center' pagingEnabled 
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <CarouselCreditCard item={item} />
                    }}/>
            </View>
        );
    } 
}

export default class Dashboard extends Component {
    render() {
        return (
            <View>
            <FancyHeader />
            <CreditCardComponents />
            </View>
        )
    }
}
