import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getInitialData} from '../thunks/ProductsThunk';

const DisplayScreen = () => {
  const [name, setName] = useState('');
  const Dispatch = useDispatch();
  const {isFetching, productData} = useSelector(state => state.todo);
  const [products, setProducts] = useState('');

  // useEffect(() => {
  //   Dispatch(getInitialData());
  // }, []);
  const apiCall = () => {
    Dispatch(getInitialData());
  };

  const ListData = ({item}) => {
    // console.log(Dispatch);
    return (
      <TouchableOpacity style={styles.itemRow}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Fetch Data" onPress={() => apiCall()} />
      <FlatList
        data={productData}
        renderItem={item => ListData(item)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnSize: {
    backgroundColor: 'red',
    marginRight: 50,
    marginLeft: 50,
    width: 80,
    borderRadius: 2,
  },
  placeholder: {
    width: '70%',
    height: 70,
    margin: 5,
    marginLeft: 10,
    borderColor: 'purple',
    borderWidth: 1,
    fontSize: 15,
    marginTop: 10,
    marginRight: 10,
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
    height: 300,
    margin: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 20,
  },
  itemRow: {
    margin: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
});

export default DisplayScreen;
