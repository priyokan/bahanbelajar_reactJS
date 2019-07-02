import React,{Component} from 'react'
import {Form,Button,Container} from 'react-bootstrap'

class Formreg extends Component{

    constructor(props){
        super(props)
        this.state={
            form:{
                title:'',
                content:''
            }
        }
    }

    

    render(){
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
                method:'POST',
                body:formData
            };

            fetch('http://localhost:5000/notes',setting)
        }
        return(
            <Container>
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
                    <Form.Control type="text" name='content' onChange={handleChange} placeholder="Masukan Kontent Note" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {this.state.form.title}
            {this.state.form.content}
            </Container>
        )
    }
}
export default Formreg