import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const BottumItems = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonTxt}>Call</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonTxt}>Chat</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 60,
        marginTop: 10,
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: '#139476',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        width: 180,
        borderRadius: 10,
    },
    buttonTxt: {
        color: '#fff'
    }
})

export default BottumItems