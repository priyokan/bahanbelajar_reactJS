import React,{Component} from 'react'
import {Modal,Button,ButtonToolbar} from 'react-bootstrap'

class Delete extends Component{    
    constructor(...args) {
        super(...args);
    
        this.state = { modalShow: false };
      } 
    render(h) {
        let modalClose = () => this.setState({ modalShow: false });
        return(
        <div>
            <ButtonToolbar>
                <Button
                variant="primary"
                onClick={() => this.setState({ modalShow: true })}
                >
                Launch vertically centered modal
                </Button>

                <Delete
                show={this.state.modalShow}
                onHide={modalClose}
                />
            </ButtonToolbar>
            <Modal
                {...this.props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros.
                </p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
}

export default Delete
