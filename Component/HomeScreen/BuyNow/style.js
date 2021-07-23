import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    buyNowContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        padding: 20,
        backgroundColor: '#fff',
        borderBottomColor: '#dcdcde',
        borderBottomWidth: 0.8,
        justifyContent: 'space-between'
    },
    buyNowAdd: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buyNowAddText: {
        fontSize: 20,
        fontFamily: ''
    },
    switchBtn: {
        flex: 1
    }
})

export default styles