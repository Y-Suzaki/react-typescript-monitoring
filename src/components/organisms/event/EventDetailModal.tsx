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
import { EventDetail } from '../../../types/api/event_detail';

type Props = {
  detail: EventDetail | null;
  isOpen: boolean;
  onClose: () => void;
};

export const EventDetailModal: FC<Props> = memo(function EventDetailModal(props) {
  const { detail, isOpen, onClose } = props;

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
              <Text>{detail?.date_time}</Text>
            </HStack>
            <HStack>
              <Text>aaaa</Text>
              <Text>{detail?.event_type}</Text>
            </HStack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
