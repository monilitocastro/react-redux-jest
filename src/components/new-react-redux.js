import React from "react";
import {connect, useSelector, useDispatch} from 'react-redux';

const containerStyle = {
    display: "flex"
}


const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}


const NewReactRedux = (props) => {
    const dispatch = useDispatch();
    const number = useSelector(state => state.number);
    const addOne = () => {
        dispatch({type: 'ADD_ONE'});
    }
    const minusOne = () => {
        dispatch({type: 'MINUS_ONE'});
    }
    return (<>
        <h1> {number}</h1>
        <div style={containerStyle}>
            <button type="button" id="newMinus"
                style={buttonStyle}
                onClick={
                    ev => minusOne()
            }>-</button>
            <button type="button" id="newAdd"
                style={buttonStyle}
                onClick={
                    ev => addOne()
            }>+</button>
        </div>
    </>)
}

export default NewReactRedux
