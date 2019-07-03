import React,{Component} from 'react';  
import {Table} from 'react-bootstrap';
import Baris from './baris'

class TableCoba extends Component{

    constructor(props){
        super(props);
        this.state={
            datas:[],
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/notes`)
         .then(result=>result.json())
         .then(result=>{
             this.setState({
                 datas: this.state.datas.concat(result)
             })
         })
      }

    // baris(i){
    //     let datas = this.state.datas
    //     let muncul = []

    //     datas.forEach(data => {
    //         muncul.concat(data)
    //     }) 
    //     console.log(muncul)
    // }

    render(){
        // console.log(this.state.datas)

        return(
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                       {this.state.datas.map((data,index)=>{
                           return(<Baris
                            id={data._id}
                            index={index+1}
                            title={data.title}
                            content={data.content}
                            key={data._id}
                            />)
                       })}     
                </tbody>
            </Table>
        )
    }
}
export default TableCoba