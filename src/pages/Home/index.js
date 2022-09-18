import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';


const list = [
    {
        id: 1,
        label: 'Steam - Game',
        value: '245,00',
        date: '12/09/2022',
        type: 0 // despesas
    },

    {
        id: 2,
        label: 'Pix - Niuton',
        value: '2.245,00',
        date: '12/09/2022',
        type: 1 // despesas
    },

    {
        id: 3,
        label: 'Salário',
        value: '2.545,00',
        date: '12/09/2022',
        type: 1 // despesas
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Neviton Velho"/>
        <Balance saldo="20.000,00" despesas="-200,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList 
            style={styles.list} 
            data={list} 
            keyExtractor={(item)=> String(item.id)} 
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) => <Movements data={item} /> }
        />
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,

  },


  list:{
    marginStart: 14,
    marginEnd: 14,

  }
});
