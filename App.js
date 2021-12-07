import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';

//ca-app-pub-1219874861745235/5176171062 android
//ca-app-pub-1219874861745235/5876499905 ios

export default class App extends Component {
  constructor(props){
    super(props)
    this.bannerAdId = Platform.OS === 'ios' ? 'ca-app-pub-3940256099942544/2934735716' : 
  'ca-app-pub-3940256099942544/6300978111';
    this.interstitialAdId = Platform.OS === 'ios' ? 'ca-app-pub-3940256099942544/4411468910'
    : 'ca-app-pub-3940256099942544/1033173712'
  }
  async componentDidMount() {
    AdMobInterstitial.setAdUnitID(this.interstitialAdId)
    await AdMobInterstitial.requestAdAsync( { servePersonalizedAds: false })
    await AdMobInterstitial.showAdAsync();
  }

  
  render() {
  return (
    <View style={styles.container}>
      
      <AdMobBanner
       bannerSize='banner'
       adUnitID={this.bannerAdId}
       servePersonalizedAds={false}

        ></AdMobBanner>
        
        <AdMobBanner
       bannerSize='smartBannerPortrait'
       adUnitID={this.bannerAdId}
       servePersonalizedAds={false}

        ></AdMobBanner>
        <AdMobBanner
       bannerSize='mediumRectangle'
       adUnitID={this.bannerAdId}
       servePersonalizedAds={false}

        ></AdMobBanner>
        <AdMobBanner
       bannerSize='smartBannerLandscape'
       adUnitID={this.bannerAdId}
       servePersonalizedAds={false}

        ></AdMobBanner>
        
        
        

      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
