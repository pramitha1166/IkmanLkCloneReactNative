import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './style'
import adds from './adds'
import AddItem from './AddItem'

const AddList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={adds}
                renderItem={({item}) => (
                    <AddItem title={item.title} images={item.images} price={item.price} type={item.type} member={item.member} navigation={navigation} />
                )}
                numColumns={2}
                keyExtractor={(item, index) => index}
                contentContainerStyle={{paddingBottom: 60}}
            />
        </View>
    )
}

export default AddList