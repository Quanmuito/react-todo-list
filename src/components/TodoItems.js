import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItems extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '8px',
            margin: '10px 0px',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={ this.getStyle() }>                
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {" "}{" "}{" "}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}


// Props types
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default TodoItems
