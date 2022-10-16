import { HStack, Input } from '@chakra-ui/react';
import { ChangeEvent, FC, memo, useState } from 'react';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

type Props = {
  isLoading: boolean;
  onClickSearch: (imei: string, day: string) => void;
};

// 無名関数だとLinterで指摘される。
export const SearchBox: FC<Props> = memo(function SearchBox(props) {
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
    <HStack p={2} borderRadius={'md'}>
      <Input width={'25%'} placeholder="IMEI" value={imei} onChange={onChangeImei} />
      <Input width={'25%'} placeholder="2022-10-01" value={day} onChange={onChangeDay} />
      <PrimaryButton loading={isLoading} onClick={() => onClickSearch(imei, day)}>
        Search
      </PrimaryButton>
    </HStack>
  );
});
