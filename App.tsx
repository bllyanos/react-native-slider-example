import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

const Carousel = ({ images }) => {
  if (images && images.length) {
    return (
      <View style={styles.scrollController}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {
            images.map(image => <Image style={styles.image} source={image.source} />)
          }
        </ScrollView>
      </View>
    );
  }
}

export default function App() {
  const images = [
    {
      source: require('./assets/smash.jpg')
    },
    {
      source: require('./assets/jokersmash.jpg')
    },
  ];
  return (
    <View style={styles.container}>
      <Carousel images={images} />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollController: {
    height
  },
  image: {
    width,
    height,
  },
});
