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
    marginBottom: 12,
    largeFont: 20,
    mediumFont: 17 ,
    smallerFont: 10
}


const styles = StyleSheet.create({ 
    Container: {},
    CardBody: {
        backgroundColor: 'white',
        padding: 20,
        width: width-40,
        borderRadius: 15
    },
    Text_CardTypeImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Title: {
        fontSize: 17,
        marginBottom: Constants.marginBottom,
        fontWeight: '500',
        color: 'grey'
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
        fontWeight: '700'
    },
    Balance: {
        fontWeight: '700',
        fontSize: 20,
        margin: 2,
        marginLeft: 5
    },
    CardNumberContainer: {
        marginBottom: Constants.marginBottom
    },
    CardNumber: {
        fontSize: 20
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
                    horizontal scrollEnabled snapToAlignment='center' pagingEnabled 
                    scrollEventThrottle={16}
                    contentContainerStyle={{paddingHorizontal: 10}}
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
