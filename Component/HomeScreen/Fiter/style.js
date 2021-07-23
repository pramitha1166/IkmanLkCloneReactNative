import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    filterContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        padding: 20,
        backgroundColor: '#fff',
        borderBottomColor: '#dcdcde',
        borderBottomWidth: 0.8
    },
    button: {
        flex: 2,    
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        borderRightWidth: 0.6,
        borderRightColor: '#dcdcde',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 15,
        marginLeft: 5,
        fontWeight: '500'
    },
    filterIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8
    }
})

export default styles