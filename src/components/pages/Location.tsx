import { Box, Divider, VStack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Header } from '../organisms/Header';
import { SearchBox } from '../organisms/location/SearchBox';
import { LocationList } from '../organisms/location/LocationList';
import { useLocationList } from '../../hooks/useLocationList';

// 無名関数だとLinterで指摘される。
export const Location: FC = memo(function Setting() {
  const { getLocationList, locationList, isLoading } = useLocationList();

  const onClickSearch = (imei: string, day: string) => {
    console.log(`onClickSearch ${imei} ${day}`);
    getLocationList(imei, day);
  };

  return (
    <>
      <Header />
      <VStack align={'left'} bgColor={'white'} borderRadius={'md'} shadow={'md'} m={4}>
        <SearchBox isLoading={isLoading} onClickSearch={onClickSearch} />
        <Divider />
        <LocationList locationList={locationList} />
      </VStack>
    </>
  );
});
