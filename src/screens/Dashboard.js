import React, { Component } from 'react'
import { StyleSheet, Text,Image, FlatList, Dimensions, View } from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window')

const DATA = [{
    number: "2234 2213 4222 2444",
    cardholder: "Kumas Karaev",
    expire: "01/24",
    balance: "3,250.00"
},
{
    number: "2234 4222 2444 4444",
    cardholder: "KOKODKE",
    expire: "02/21",
    balance: "55,250.00",
},
{
    number: "1111 4222 2444 4444",
    cardholder: "dawdadw",
    expire: "02/21",
    balance: "5,250.00",
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

const Constants = {
    marginTop: 10,
    marginBottom: 10,
    largeFont: 20,
    mediumFont: 17 ,
    smallerFont: 10
}


const styles = StyleSheet.create({ 
    Container: {},
    CardBody: {
        backgroundColor: 'white',
        padding: 20,
        width: width-45,
        borderRadius: 15,
        marginHorizontal: 10,
        shadowOffset:{width: width-50, height: 2},
        shadowOpacity: 5,
        shadowRadius: 15,
        elevation: 5
    },
    Text_CardTypeImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Title: {
        fontSize: 17,
        marginBottom: Constants.marginBottom,
        color: 'grey',
    },
    CurrentBalanceContainer: {
        flexDirection: 'row',
        marginBottom: Constants.marginBottom
    },
    USD_Sign: {
        backgroundColor: '#17f9f2',
        padding: 8,
        borderRadius: 10
    },
    USD_Sign_Text: {
        color: "white",
    },
    Balance: {
        fontSize: 22,
        margin: 2,
        marginLeft: 5,
        fontWeight: '700'
    },
    CardNumberContainer: {
        marginBottom: Constants.marginBottom
    },
    CardNumber: {
        fontSize: 22
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
        <View style={styles.CurrentBalanceContainer}>
            <View style={styles.USD_Sign}>
                <Text style={styles.USD_Sign_Text}>USD</Text>
            </View>
            <Text style={styles.Balance}>{item.balance}</Text>
        </View>
        <View style={styles.CardNumberContainer}>
            <Text style={styles.CardNumber}>{item.number}</Text>
        </View>
        <View style={styles.Cardholder_ExpiryDate}>
            <Text style={styles.cardholder}>{item.cardholder}</Text>
            <Text style={styles.expire}>{item.expire}</Text>
        </View>
    </View>
    )
}
class CreditCardComponents extends Component {
    render() {
        return(
            <View styles={styles.Container}>
                <FlatList data ={DATA} keyExtractor={(item, index) => 'key' + index} 
                    horizontal 
                    scrollEnabled 
                    pagingEnabled 
                    snapToAlignment="center"
                    snapToInterval={width-25}
                    contentContainerStyle={{paddingHorizontal: 10}}
                     scrollEventThrottle={50}
                     decelerationRate={"normal"}
                     showsHorizontalScrollIndicator={false}
                    renderItem={CarouselCreditCard} />
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
