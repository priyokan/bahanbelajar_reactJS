import React,{Component} from 'react'
import {Modal,Button,ButtonToolbar} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import { Router,Redirect } from 'react-router'

class MyVerticallyCenteredModal extends Component {
   
    render(props) {
        const handleDone = () =>{
            fetch(`http://localhost:5000/notes/${this.props.props.match.params.idNotes}`, {
                method: 'DELETE',   
            })
            .then(response => response.json())
            .then(response => {
                this.props.props.history.replace(`/tabelberubah`)
            })
            
        }
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
            {this.props.props.match.params.idNotes}
                Apakah anda yakin?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Tidak
            </Button>
            <Button variant="danger" onClick={handleDone}>
              hapus
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class App extends Component {

    componentDidMount() {
        
      }
    render() {
    const props = this.props;
      let modalClose = () =>{
        this.props.history.replace('/tabel/1')
      }
  
      return (
        <ButtonToolbar>
            
          <MyVerticallyCenteredModal
            show={true}
            onHide={modalClose}
            props={props}
          />
        </ButtonToolbar>
      );
    }
  }


export default App
