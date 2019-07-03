import React,{Component} from 'react'
import {Modal,Form,Button,ButtonToolbar} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import { Router,Redirect } from 'react-router'

class MyVerticallyCenteredModal extends Component {
  
  constructor(props){
      super(props)
      this.state={
          form:{
              title:this.props.props.match.params.titleNote,
              content:this.props.props.match.params.contentNote,
          }
      }
    }

    render(props) {
      const handleChange = (evt) => {
        const {value, name}= evt.target
        this.setState(prevstate => ({
            form: {
                ...prevstate.form,
                [name]: value
            }
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = this.state.form
        const formData = new FormData()
        formData.append('title',form.title)
        formData.append('content',form.content)

        const setting ={
            method:'PUT',
            body:formData
        };

        fetch(`http://localhost:5000/notes/${this.props.props.match.params.idNotes}`,setting)
        .then(()=>{
            this.setState({
                form:{
                    title:'',
                    content:'',
                }
            })
            this.props.props.history.replace('/tabelberubah')
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
            <h4>Edit Notes</h4>
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
          <Modal.Body>            
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
               
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Tidak
            </Button>
            <Button variant="info" type="submit">
                    Submit
                </Button>
            
          </Modal.Footer>
          </Form>
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
