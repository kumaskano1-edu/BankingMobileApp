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
            <MyLinearGradient style={{ 
                         borderBottomLeftRadius: 35,
                        borderBottomRightRadius: 35,}}/>
        </View>

    );
}

const Constants = {
    marginTop: 10,
    marginBottom: 9,
    largeFont: 20,
    mediumFont: 17 ,
    smallerFont: 10
}


const styles = StyleSheet.create({ 
    Container: {},
    CardBody: {
        backgroundColor: 'white',
        padding: 12,
        paddingHorizontal: 20,
        width: width-45,
        borderRadius: 15,
        marginHorizontal: 10,
        shadowOffset:{width: width-50, height: 2},
        shadowOpacity: 10,
        shadowRadius: 15,
        elevation: 10
    },
    Text_CardTypeImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Title: {
        fontSize: 17,
        color: '#D3D3D3',
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
    USD_Sign_Text: {
        color: "white",
        fontSize: 18,
        padding: 10,
        width: "100%", 
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
        fontSize: 22,
        letterSpacing: 2.5
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
            <View>
                <MyLinearGradient style={{        elevation: 5
, width:58, height:40, paddingVertical: 10, flexDirection: 'row', borderRadius: 12, justifyContent: 'center',
        alignItems: 'center'}}>                
                    <Text style={styles.USD_Sign_Text}>USD</Text>
                </MyLinearGradient>
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
