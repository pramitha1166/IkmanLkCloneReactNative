import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { AsyncStorage } from 'react-native';

const AddItem = ({title,price,images,type,member,navigation}) => {

    const toItemPage = async() => {

        try {
            let item = {
                title: title,
                price: price,
                images: images,
                type: type,
                member: member,
                navigation: navigation
            }
    
            await AsyncStorage.setItem('AddItem', JSON.stringify(item))
            navigation.navigate('Details')     
        } catch (err) {
            console.error(err)   
        }
       
    }

    return (
        <TouchableOpacity 
            activeOpacity={1}
            style={[styles.container, 
                {backgroundColor: type==='top' ? '#fefbde': '#fff',
                }]} 
            onPress={() => toItemPage()}>
            <Image style={styles.image} source={images[0]} />
            <View style={styles.bottum}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
                
                    {member ? 
                    ( 
                    <View style={styles.bottumIcon}>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <AntDesign name="checkcircle" size={18} color="#5bb6c7" />
                            <Text style={styles.bottumIconText}>Member</Text>
                        </View>
                        <Text style={styles.jusnow}>Just Now</Text>
                    </View>
                    )
                    : 
                    (
                    <View style={[styles.bottumIcon, {justifyContent: 'flex-end'}]}>
                        <View style={{display: 'flex', flexDirection: 'row',marginTop: 5}}>
                            <Text style={styles.jusnow}>Just Now</Text>
                        </View>
                    </View>
                    )
                }
                   
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 4,
        height: 280,
        flexDirection: 'column',
        borderRadius: 5,
        position: 'relative'
    },
    image: {
        flex: 1,
        width: '100%',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    bottum: {
        height: 100,
        padding: 5
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '800'
    },
    bottumIcon: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: 70,
        left: 5,
        width: '100%'
    },
    bottumIconText: {
        backgroundColor: '#ccd1cc',
        paddingHorizontal: 5, 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white',
        fontSize: 12,
        position: 'relative',
        left: -4,
        zIndex: -10,
        paddingLeft: 6,
        height: 15,
        top: 2,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    jusnow: {
        position: 'relative',
        right: 5,
        top: 4
    }
})


export default AddItem