import React, {Component} from "react";
import { ListGroup, ListGroupItem, Label, Button } from 'reactstrap';
import { completeTask, deleteTask } from "../redux/actions/formAction";
import { connect } from "react-redux";

class TaskList extends Component{
    constructor(props){
        super(props);
        console.log(this.props.form)
    }

    render(){
        return(
            <div>
            <ListGroup>
                <Label style={{textAlign: "center", fontSize: "30px"}}>TASK LIST</Label>
                {this.props.form.tasks? this.props.form.tasks.map(task => (
                    <ListGroupItem><p style ={ { 
                        textDecoration: task.status == "complete" ? 'line-through' : 'none'
                     } }>{ task.name }</p>
                    <Button
                    onClick = {() => deleteTask(task.id)}
                    color = "danger">DELETE</Button>
                    <Button
                    onClick = {() => completeTask(task.id)}
                    color = "success">COMPLETE</Button>
                    </ListGroupItem>
                )) : null}
            </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    form: state.form,
})

export default connect(mapStateToProps,{completeTask, deleteTask})(TaskList)