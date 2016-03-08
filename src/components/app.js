import React from 'react'
import Paper from 'material-ui/lib/paper'
import AppBar from 'material-ui/lib/app-bar'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="body">
          <AppBar 
            title="Todo List"
            showMenuIconButton={false}
          />
          <Paper style={{
            width: '100%',
            padding: 50,
            textAlign: 'center'
          }} zDepth={1}
          rounded={false}>
          <AddTodo /> 
          <Footer />
          <VisibleTodoList />
        </Paper>
      </div>
    </div>
    )
  }
}
