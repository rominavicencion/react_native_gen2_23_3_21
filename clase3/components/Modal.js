import React from 'react'
import { View, StyleSheet, Button, Modal } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
    // opacity: 0.5,
    backgroundColor: 'rgba(112,128,144,0.5)',
  },
});

class ModalComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleModal = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <View style={styles.container}>
        <Button title="Abrir Modal" onPress={this.toggleModal} />
        <Modal
          transparent
          visible={isOpen}
          animationType="fade"
        >
          <View style={styles.modalContainer}>
            <Button title="Cerrar Modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    )
  }
}

export default ModalComponent;
