import React,{Component} from 'react'
import {Modal,Form,Button,ButtonToolbar} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import { Router,Redirect } from 'react-router'

class MyVerticallyCenteredModal extends Component {
   
    render(props) {
        const handleClose = () =>{
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
          // size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <h4>Hapus Notes</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>            
          <Form onSubmit={handleSubmit}>
                <h1>Add Note</h1>
                <Form.Group controlId="formTitle">
                    <Form.Label>Judul Note</Form.Label>
                    <Form.Control value={this.state.form.title} type="text" name="title" onChange={handleChange} placeholder="masukan judul Note" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Content Note</Form.Label>
                    <Form.Control value={this.state.form.content} type="text" name='content' onChange={handleChange} placeholder="Masukan Kontent Note" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Tidak
            </Button>
            <Button variant="danger" onClick={handleClose}>
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
