import { HStack, Input } from '@chakra-ui/react';
import { ChangeEvent, FC, memo, useState } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

type Props = {
  isLoading: boolean;
  onClickSearch: (imei: string) => void;
};

// 無名関数だとLinterで指摘される。
export const SearchBox: FC<Props> = memo(function SearchBox(props) {
  const { isLoading, onClickSearch } = props;
  const [imei, setImei] = useState('');

  const onChangeImei = (e: ChangeEvent<HTMLInputElement>) => {
    setImei(e.target.value);
  };

  return (
    <HStack p={2} borderRadius={'md'}>
      <Input width={'25%'} placeholder="IMEI" value={imei} onChange={onChangeImei} />
      <PrimaryButton loading={isLoading} onClick={() => onClickSearch(imei)}>
        Search
      </PrimaryButton>
    </HStack>
  );
});
