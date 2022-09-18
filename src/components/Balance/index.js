import React from "react";

import { View, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native'
import { MotiView, MotiText } from 'moti'


export default function Balance({saldo, despesas}){
    return(
        <MotiView
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                delay: 300,
                duration: 900
            }}
        >

            <View style={styles.item}>
             <Text style={styles.itemTitle}>Saldo</Text>
             <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{saldo}</Text>
             </View>
            </View>

            <View style={styles.item}>
             <Text style={styles.itemTitle}>Gastos</Text>
             <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.gastos}>{despesas}</Text>
             </View>
            </View>

        </MotiView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:  '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingBottom: 22,
        paddingTop: 22,
        zIndex: 99,
    },

    item:{
        
    },

    itemTitle:{
        fontSize: 20,
        color: '#dadada',
        
    },

    content:{
        flexDirection: 'row',
        alignItems: 'center',

    },

    currencySymbol:{
        color: '#dadada',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71'
    },

    gastos:{
        fontSize: 22,
        color: '#e74c3c'
    }
})