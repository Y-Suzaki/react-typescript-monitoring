import { FC, memo, useCallback } from 'react';
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MenuIconButton } from '../atoms/button/MenuIconButton';
import { MenuDrawer } from './MenuDrawer';

// 無名関数だとLinterで指摘される。
export const Header: FC = memo(function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // react-router-dom v6以降は、useHistoryではなく、useNavigateで画面遷移を行う。
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate('/home');
  }, []);
  const onClickSetting = useCallback(() => {
    navigate('/home/setting');
  }, []);
  const onClickUserManagement = useCallback(() => {
    navigate('/home/user_management');
  }, []);

  return (
    <>
      <Flex as="nav" bg="teal.700" color="gray.50" align="center" justify="space-between" padding={{ base: 2, md: 3 }}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            Drive Backoffice
          </Heading>
        </Flex>
        <Flex fontSize="sm" align="center" flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={5}>
            <Link onClick={onClickUserManagement}>UserManagement</Link>
          </Box>
          <Link onClick={onClickSetting}>Setting</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
