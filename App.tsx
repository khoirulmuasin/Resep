import React, { useState, useEffect } from "react";
import {
  View, Text, FlatList, TouchableOpacity, StatusBar, Image, ScrollView,
  ImageBackground
} from "react-native";
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
      nama: 'Ikan'
    },
  ]);

  const [dataTrending, setDataTrending] = useState([
    { namaResep: 'Ayam Goreng Mantap', author: 'Adit', image: require('./src/image/poto1.jpg') },
    { namaResep: 'Ayam Goreng Manis', author: 'Denis', image: require('./src/image/poto2.jpg') },
    { namaResep: 'Ayam Goreng Asam', author: 'Ikbal', image: require('./src/image/poto3.jpg') },
    { namaResep: 'Ayam Goreng Pahit', author: 'Ayu', image: require('./src/image/poto4.jpg') },
  ]);

  const [dataVideo, setDataVideo] = useState([
    {
      namaResep: 'Ayam Goreng Hidup',
      author: 'Adit',
      image: require('./src/image/poto4.jpg'),
      length: '10:10',
    },
    {
      namaResep: 'Ayam Goreng Mati',
      author: 'Denis',
      image: require('./src/image/poto3.jpg'),
      length: '07:50',
    },
    {
      namaResep: 'Ayam Goreng Mabuk',
      author: 'Ikbal',
      image: require('./src/image/poto2.jpg'),
      length: '03:10',
    },
    {
      namaResep: 'Ayam Goreng Goll',
      author: 'Ayu',
      image: require('./src/image/poto1.jpg'),
      length: '11:02',
    },
  ])

  const [KategoriSeleksi, SetKategoriSeleksi] = useState({
    nama: 'Ayam'
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5f5' }}>
      <ScrollView>
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
            showsHorizontalScrollIndicator={false}
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
          marginBottom: 10,
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
        <View>
          <FlatList
            data={dataTrending}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10, }}
            renderItem={({ item }) => <TouchableOpacity
              style={{
                marginRight: 5,
                backgroundColor: '#fff',
                elevation: 3,
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
              }}>
              <Image source={item.image} style={{
                width: 200, height: 150,
                marginTop: 10,
                marginBottom: 10,
                resizeMode: 'cover',
                borderRadius: 3,
              }} />
              <Text
                style={{
                  color: '#212121',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {item.namaResep}</Text>
              <Text
                style={{ color: '#212121' }}>
                {item.author}</Text>
            </TouchableOpacity>}
          />
        </View>
        <View style={{
          marginHorizontal: 20,
          marginBottom: 10,
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
            }}>Video Masak</Text>
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
        <View>
          <FlatList
            data={dataVideo}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10, }}
            renderItem={({ item }) => <TouchableOpacity
              style={{
                marginRight: 5,
                backgroundColor: '#fff',
                elevation: 3,
                paddingHorizontal: 15,
                paddingVertical: 8,
                marginBottom: 10,
                borderRadius: 15,
                marginLeft: 5,
              }}>
              <ImageBackground
                source={item.image}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  marginBottom: 10,
                  borderRadius: 3,
                }}
                resizeMode={'stretch'}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{
                    flexDirection: 'row',
                  }}>
                    <View>
                      <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        paddingTop: 4,
                        paddingBottom: 5,
                      }}>
                        <Icon style={{
                          marginLeft: 5
                        }} name="play-circle-outline" size={15} color="#bdbdbd" />
                      </View>
                    </View>
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      paddingRight: 10,
                      paddingTop: 2,
                      paddingBottom: 4,
                    }}>
                      <Text style={{ color: '#ffffff' }}>{item.length}</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <Text
                style={{
                  color: '#212121',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {item.namaResep}</Text>
              <Text
                style={{ color: '#212121' }}>
                {item.author}</Text>
            </TouchableOpacity>}
          />
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', paddingTop: 5, }}>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
          <Icon style={{
            marginLeft: 5
          }} name="home" size={25} color="#4169e1" />
          <Text style={{ color: '#4169e1' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
          <Icon style={{
            marginLeft: 5
          }} name="search" size={25} color="#bdbdbd" />
          <Text style={{ color: '#bdbdbd' }}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
          <Icon style={{
            marginLeft: 5
          }} name="file-tray-outline" size={25} color="#bdbdbd" />
          <Text style={{ color: '#bdbdbd' }}>Kategori</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
          <Icon style={{
            marginLeft: 5
          }} name="person-circle-outline" size={25} color="#bdbdbd" />
          <Text style={{ color: '#bdbdbd' }}>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;