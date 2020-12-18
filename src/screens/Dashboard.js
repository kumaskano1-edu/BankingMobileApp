import React, { Component } from 'react'
import { StyleSheet, Text,Image, FlatList, Dimensions, View } from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";
import Theme from "../../config/MainTheme";
import MyLinearGradient from "../components/styling/LinearGradient"
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
            <MyLinearGradient />
        </View>

    );
}

const Constants = {
    marginTop: 10,
    marginBottom: 5,
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
        alignItems: 'center',
    },
    Title: {
        fontSize: 17,
        color: 'grey',
    },
    CardImageIcon: {
        width: 65,
        height: 50,
        resizeMode: "contain"
    },
    CurrentBalanceContainer: {
        flexDirection: 'row',
        marginBottom: Constants.marginBottom
    },
    USD_Sign: {
        backgroundColor: Theme.mainColor,
        padding: 4,
        borderRadius: 10,
        shadowOffset:{width: width-50, height: 2},
        shadowOpacity: 3,
        shadowRadius: 15,
        elevation: 1.5
    },
    USD_Sign_Text: {
        color: "white",
        paddingHorizontal: 6,
        fontSize: 18
    },
    Balance: {
        fontSize: 24,
        margin: 2,
        marginLeft: 10,
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
            <Image style={styles.CardImageIcon} source={require("../../assets/media/dashboard/visa_icon.png")} />
        </View>
        <View style={styles.CurrentBalanceContainer}>
            <View style={styles.USD_Sign}>
                <Text style={styles.USD_Sign_Text}>USD</Text>
            </View>
            <Text style={styles.Balance}>{item.balance}</Text>
        </View>
        <View style={styles.CardNumberContainer}>
            <Text style={styles.CardNumber}>{
                '**** **** **** ' + item.number.substr(15,4)
            }</Text>
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
                     scrollEventThrottle={200}
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
