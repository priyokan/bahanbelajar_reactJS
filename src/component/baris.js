import React,{Component} from 'react'

class Baris extends Component{
    render(props){
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.content}</td>
                <td>@mdo</td>
            </tr>
        )
    }
}
export default Baris