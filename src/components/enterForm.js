import React, {Component} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import {addTask} from "../redux/actions/formAction"

class InputForm extends Component{

    state = {
        value: null
    }

    render(){
        const setValue = (e) =>{
            this.setState({value: e.target.value})
        }

        return(
            <div>
                <FormGroup style = {{textAlign: "center"}}> 
                <Label style={{textAlign: "center", fontSize: "30px", display: "block"}}>Enter Task</Label>
                    <Input 
                    style = {{display:"inline-block", width: "80%"}}
                    placeholder = "New task..." name = "Task" value = { this.state.value } onChange={ e => setValue(e) }/>
                    <Button
                    style = {{display:"inline-block"}}
                    onClick = { () => addTask(this.state.value) }
                    >Add Task</Button>
                </FormGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    form: state.form
})

export default connect(mapStateToProps, {addTask})(InputForm)