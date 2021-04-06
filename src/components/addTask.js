import React, {Component} from "react"
import {TextField, Button, AppBar, Typography} from "@material-ui/core"
import {Container, Col, Row} from "react-grid"
import { connect } from "react-redux"
import {addTask} from "../redux/actions"
class AddTask extends Component {
    state = {
        value: null
    }
    updateState = e =>{
    this.setState({
        value: e.target.value
    })
    }

    render(){
        console.log(this.props)
        console.log(this.state)
        return (
            <Container fluid>
                <AppBar position="static">
                    <span style={{textAlign: 'center'}}><Typography variant="h6" style = {{textAlign: 'center', height: '50px', fontSize: '4rem', padding: '3rem', paddingTop: '0rem', display: 'inline-block'}} >
                    To-Do List
                    </Typography>
                    <p style={{display: 'inline-block', marginLeft: '-2rem'}}>(Using Redux)</p>
                    </span>

                </AppBar>
                <Row>
                    <Col md={4}></Col>
                    <Col
                    md={4}
                    >
                    <TextField id="outlined-basic" label="Task" variant="outlined" style = {{marginTop: '1rem', marginRight: '0.5rem'}} onChange={this.updateState}
                    />
                    <Button variant="contained" color="primary" style = {{marginTop: '1.5rem'}} onClick = {() => this.props.dispatch(addTask(this.state.value,this.props.form))}> Add Task </Button>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    form: state.formReducer
})

export default connect(mapStateToProps)(AddTask)