import { Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import Modal from 'react-native-modal';
import ImageViewScreen from '../image-view';

const { height, width } = Dimensions.get('screen');
interface ModalContextType {
  listImage: string[];
  modalVisible: boolean;
  openModal: (listImage: string[]) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export const ModalImageViewProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listImage, setListImage] = useState<string[]>([]);

  const openModal = (listImage: string[]) => {
    setListImage(listImage);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <ModalContext.Provider
      value={{ listImage, modalVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalImageView: React.FC = () => {
  const { listImage, modalVisible, closeModal } = useModal();
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={closeModal}
      style={styles.modal}>
      <ImageViewScreen images={listImage} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
});
