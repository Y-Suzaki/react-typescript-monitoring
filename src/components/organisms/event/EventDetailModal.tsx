import { FC, memo } from 'react';
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const EventDetailModal: FC<Props> = memo(function EventDetailModal(props) {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={4}>
        <ModalHeader>Event detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={2}>
            <HStack>
              <Text>aaaa</Text>
              <Text>aaaa</Text>
            </HStack>
            <HStack>
              <Text>aaaa</Text>
              <Text>aaaa</Text>
            </HStack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
