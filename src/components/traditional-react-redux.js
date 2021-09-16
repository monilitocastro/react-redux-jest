import React from "react";
import {connect} from 'react-redux';

const containerStyle = {
    display: "flex"
}


const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}


const TraditionalReactRedux = (props) => {
    const addOne = () => {
        props.dispatch({type: 'ADD_ONE'});
    }
    const minusOne = () => {
        props.dispatch({type: 'MINUS_ONE'});
    }
    return (<>
        <h1> {
            props.number
        }</h1>
        <div style={containerStyle}>
            <button type="button" id="traditionalMinus"
                style={buttonStyle}
                onClick={
                    ev => minusOne()
            }>-</button>
            <button type="button" id="traditionalAdd"
                style={buttonStyle}
                onClick={
                    ev => addOne()
            }>+</button>
        </div>
    </>)
}

const mapStateToProps = (state) => {
    return {number: state.number};
}
export default connect(mapStateToProps)(TraditionalReactRedux);
