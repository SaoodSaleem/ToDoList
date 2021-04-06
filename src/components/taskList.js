import React, { Component } from "react"
import { connect } from "react-redux"
import {List, ListItem, ListItemText, Button, Container} from "@material-ui/core"
import {changeStatus, deleteTask} from "../redux/actions"

class TaskList extends Component{

    state = {
        value: null
    }

    render(){
        return(
            <Container>
            <List>
                  {
                      !!this.props.form ? this.props.form.form.map( item => (
                        <ListItem style = {{border: 'solid', borderWidth: '1px', borderColor: 'grey', borderRadius: '5px', marginBottom: '0.5rem'}}>
                        <ListItemText style={{ textDecoration: !! item.status == false ? 'line-through' : 'none'}}
                        >{item.name}</ListItemText>
                        <Button disabled = {!!item.status == false ? true: false} variant="contained" color="primary" style={{marginRight: '1rem'}} onClick = {() => this.props.dispatch(changeStatus(item.id,this.props.form))}>
                        {!!item.status == false ? 'Completed': 'Mark as Complete'}
                        </Button>
                        <Button variant="contained" color="secondary" onClick = {() => this.props.dispatch(deleteTask(item.id,this.props.form))}>
                        Delete
                        </Button>
                      </ListItem>
                      )
                      ) : null
                  }

            </List>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    form: state.formReducer
})
export default connect(mapStateToProps)(TaskList)