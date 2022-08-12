import { useState, useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";

const AddComment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comment, setComment] = useState("");
  return (
    <>
      <Button
        onClick={onOpen}
        className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] text-white"
      >
        Add comment
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <form>
            <ModalHeader>Add a comment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="space-y-3">
                <Input
                  type="text"
                  value={comment}
                  className="font-normal"
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                mr={3}
                onClick={() => {
                  onClose();
                  setComment("");
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!comment}
                colorScheme="red"
                className="font-normal text-zinc-50"
              >
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddComment;
