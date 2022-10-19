import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { ChangeEvent, FC, memo, useState } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

type Props = {
  isLoading: boolean;
  onClickSearch: (imei: string, day: string) => void;
};

// 無名関数だとLinterで指摘される。
export const SearchDayBox: FC<Props> = memo(function SearchDayBox(props) {
  const { isLoading, onClickSearch } = props;
  const [imei, setImei] = useState('');
  const [day, setDay] = useState('');

  const onChangeImei = (e: ChangeEvent<HTMLInputElement>) => {
    setImei(e.target.value);
  };

  const onChangeDay = (e: ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };

  return (
    <HStack p={2} borderRadius={'md'} alignItems="flex-end">
      <FormControl width={'25%'}>
        <FormLabel fontSize="7px" color="red.400">
          IMEI (required)
        </FormLabel>
        <Input placeholder="Enter IMEI" required value={imei} onChange={onChangeImei} />
      </FormControl>
      <FormControl width={'25%'}>
        <FormLabel fontSize="7px">Day</FormLabel>
        <Input
          placeholder="Enter day. yyyy-MM-dd"
          _placeholder={{ color: 'gray.300' }}
          required
          value={day}
          onChange={onChangeImei}
        />
      </FormControl>
      <Box justifyContent="bottom">
        <PrimaryButton loading={isLoading} onClick={() => onClickSearch(imei, day)}>
          Search
        </PrimaryButton>
      </Box>
    </HStack>
  );
});
