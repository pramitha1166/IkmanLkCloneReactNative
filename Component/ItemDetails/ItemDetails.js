import React, {useEffect, useState} from 'react'
import { AsyncStorage, FlatList, SafeAreaView } from 'react-native'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native'
import ImageSlider from './ImageSlider'
import BottumItems from './BottumItems'

const detials = [
        {
            title: 'Location',
            desc: 'Negambo, Gampaha'
        },
        {
            title: 'Brand',
            desc: 'Nissan'
        },
        {
            title: 'Model',
            desc: 'Sunny'
        },
        {
            title: 'Trim / Edition',
            desc: 'N17 Sunny'
        },
        {
            title: 'Transmission',
            desc: 'Manual'
        },
        {
            title: 'Body type',
            desc: 'Saloon'
        },
        {
            title: 'Fuel type',
            desc: 'Saloon'
        },
        {
            title: 'Engine Capacity',
            desc: '1300cc'
        },
        {
            title: 'Mileage',
            desc: '103,000 km'
        },
        {
            title: 'Category',
            desc: 'Cars'
        },
        {
            title: 'Posted',
            desc: '12 Jul 7.57 AM'
        }
    ]


const PriceSection = ({price, title}) => {
    return (
        <View style={styles.priceContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: 200}}>
                <View style={styles.priceTag}>
                    <Text style={styles.priceTagText}>{price}</Text>
                </View>
                <Text style={styles.priceTagTextSub}>Negotible</Text>
            </View>
            <Text style={styles.priceSaleBy}>For sale by Shameer</Text>
            <SafeAreaView>
                <FlatList 
                style={{marginTop: 20, marginBottom: 20}}
                data={detials}
                renderItem={({item}) => (
                    <DescriptionListItem title={item.title} desc={item.desc} />
                )}
                />
            </SafeAreaView>
            
        </View>
    )
}

const Description = () => {
    return (
        <View style={styles.descDecContainer}>
            <Text style={styles.descHeader}>Description</Text>
            <Text style={styles.desc}>working distance to the Heightlevel road and to Dehivala road in Maharahgama town. Kitchen is Available</Text>
        </View>
    )
}

const DescriptionListItem = ({title, desc}) => {
    return (
        <View style={styles.descItemContainer}>
            <Text style={styles.descTitle}>{title}: </Text>
            <Text style={styles.descDec}>{desc}</Text>
        </View>
    )
}

const ItemDetails = () => {

    
    const [item, setItem] = useState({})

    const getItemDetails = async() => {
        try {
            let item = await AsyncStorage.getItem('AddItem')
            setItem(JSON.parse(item))
        } catch (error) {
            alert('Falied to fetch data')
        }
        
    }


    useEffect(() => {        
       getItemDetails()
    },[])


    return (
        <View>
            <ScrollView>
                <SafeAreaView>
                    <ImageSlider images={item.images} />
                </SafeAreaView>
                
                <PriceSection price={item.price} title={item.title}/>
                <Description />
                <BottumItems />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    priceContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
    },
    title: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 25
    },
    priceTag: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ffcc04',
        width: 120,
        borderTopRightRadius: 2-0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceTagText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    priceTagTextSub: {
        color: '#6b7272',
        marginTop: 15
    },
    priceSaleBy: {
        color: '#6b7272',
        marginTop: 10,
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        borderBottomColor: '#6b7272'
    },
    descTitle: {
        fontWeight: 'bold'
    },
    descItemContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5
    },  
    descDecContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
        marginTop: 10,
        paddingBottom: 10
    },
    descHeader: {
        fontWeight: 'bold'
    }, 
    desc: {
        color: '#6b7272'
    }
})

export default ItemDetails

