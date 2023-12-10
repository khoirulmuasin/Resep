import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {

  const [Kategori, setKategori] = useState([
    {
      nama: 'Ayam'
    },
    {
      nama: 'Jagung'
    },
    {
      nama: 'Minuman'
    },
    {
      nama: 'Ceker'
    },
    {
      nama: 'Nasi'
    },
    {
      nama: 'Kopi'
    },
    {
      nama: 'Anggur'
    },
    {
      nama: 'Sapi'
    },
    {
      nama: 'Ayam'
    },
  ]);

  const [KategoriSeleksi, SetKategoriSeleksi] = useState({
    nama: 'Ayam'
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5f5' }}>
      <StatusBar backgroundColor='#f5f5f5f5' barStyle={'dark-content'} />
      <View style={{
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20,
      }}>
        <Text style={{
          fontSize: 28, fontWeight: 'bold',
          color: '#212121'
        }}>Resep<Text style={{ color: '#4169e1' }}>ku</Text></Text>
      </View>
      <View>
        <FlatList
          data={Kategori}
          horizontal
          showsVerticalScrollIndicator={false}
          style={{ marginLeft: 10, }}
          renderItem={({ item }) => <TouchableOpacity
            style={{
              marginRight: 5,
              backgroundColor: KategoriSeleksi.nama == item.nama ? '#4169e1' : '#fff',
              elevation: 3,
              paddingHorizontal: 15,
              paddingVertical: 8,
              marginBottom: 10,
              borderRadius: 15,
              marginLeft: 5,
            }}>
            <Text
              style={{ color: KategoriSeleksi.nama == item.nama ? '#fff' : '#212121' }}>
              {item.nama}</Text>
          </TouchableOpacity>}
        />
      </View>
      <View style={{
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row',
      }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 18, fontWeight: 'bold',
            color: '#212121'
          }}>Trending</Text>
        </View>
        <TouchableOpacity style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
        }}>
          <Text style={{ fontSize: 14, }}>Lihat Semua</Text>
          <Icon name="chevron-forward" size={20} color="#bdbdbd" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;