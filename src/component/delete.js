import React,{Component} from 'react'
import {Modal,Button,ButtonToolbar} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import { Router,Redirect } from 'react-router'

class MyVerticallyCenteredModal extends Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <h4>Hapus Notes</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <p>
                Apakah anda yakin?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Tidak
            </Button>
            <Button variant="danger" onClick={this.handleClose}>
              hapus
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class App extends Component {
  
    render() {
      let modalClose = () =>{
        this.props.history.replace('/')
      }
  
      return (
        <ButtonToolbar>
            
          <MyVerticallyCenteredModal
            show={true}
            onHide={modalClose}
          />
        </ButtonToolbar>
      );
    }
  }


export default App
