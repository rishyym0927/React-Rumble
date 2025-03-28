import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://picsum.photos/1920/1080') no-repeat center center/cover;
  ${(props) => (props.$blur ? "filter: blur(5px);" : "filter: none;")}
  transition: filter 0.5s ease-in-out;
  z-index: -1;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 400px;
  max-width: 90%;
  text-align: center;
  color: black;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #007bff;
  color: black;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  &:hover {
    background: #0056b3;
  }
  position: relative;
  z-index: 10;
  display: ${(props) => (props.$hidden ? "none" : "inline-block")};
`;

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Background $blur={isOpen} />
      <Button onClick={() => setIsOpen(true)} $hidden={isOpen}>Open Modal</Button>
      <AnimatePresence>
        {isOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              <h2>Welcome to the Modal</h2>
              <p>This modal smoothly pops up with a background blur effect.</p>
              <p>You can add more content here, such as descriptions, forms, or interactive elements.</p>
              <p>For example, include a newsletter signup or user feedback form.</p>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
