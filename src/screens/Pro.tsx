import React, {useCallback, useEffect} from 'react';
import {Linking, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';

const Pro = () => {
  const {translatedLocale} = useTranslation();
  const {assets, colors, sizes} = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBarStyle('dark-content');
    };
  }, []);

  // const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  return (
    <Block padding={sizes.padding} color={colors.primarySoft} style={{flex: 1}}>
      <Block safe justify="center">
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text h4 center semibold marginBottom={sizes.sm}>
            {translatedLocale('termsPage.title')}
          </Text>

          <Text marginBottom={sizes.padding}>
            {translatedLocale('termsPage.appTemplate')}
          </Text>
          <Text marginVertical={sizes.padding}>
            {translatedLocale('termsPage.saveTime')}
          </Text>

          <Text>{translatedLocale('termsPage.usage')}</Text>

          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
            <Image
              source={assets.ios}
              color={colors.tertiarySoft}
              style={{height: 38, width: 82}}
            />
            <Image
              source={assets.android}
              color={colors.tertiarySoft}
              style={{height: 38, width: 140}}
            />
          </Block>

          <Button
            color={colors.tertiarySoft}
            onPress={() => navigation.goBack()}>
            <Text white bold transform="uppercase">
              Back Home
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Pro;
