import React, {Fragment, useEffect, useRef, useState} from "react";
import {calcNumber, getNumber, minusNumber, setUndo, popUndo, setRedo, popRedo} from '../actions/numberActions'
import {connect} from "react-redux";

// input값을 가진 후에, reducer로 던져야한다, action(+/-)과 함께

const Button = ({currVal: {currVal, undo, redo}, calcNumber, setUndo, getNumber, popUndo, setRedo, popRedo}) => {
    useEffect(() => {
        getNumber();
    }, [])

    const text = useRef();
    const [number, setNumber] = useState('')
    const [status, setStatus] = useState(true);
    const [statusRedo, setStatusRedo] = useState(true);

    const checkValidity = (value) => {
        if (!value || isNaN(value)) {
            alert("숫자만 입력 가능합니다");
            return false;
        } else {
            return true;
        }
    };

    const handleNumber = (target) => {
        let num;
        if (checkValidity(number)) {
            if (target === "+") {
                num = parseInt(number) + currVal
            } else {
                num = currVal - parseInt(number)
            }

            // tempArray.push(num)
            // console.log(tempArray)

            calcNumber(num)
            setUndo(num)

            setNumber('')
        }

        checkUndo();
    }

    const checkUndo = () => {
        if (undo.length > 0) {
            setStatus(false);
        } else if (undo.length === 0) {
            setStatus(true);
            setStatusRedo(true);
        }
    }

    const handleUndo = (e) => {
        let temp = [...undo]; // for deep copy
        // console.log('! ',temp.pop())
        // console.log(undo)
        popUndo();
        let num = temp.pop()
        setRedo(num)
        setStatusRedo(false)
        if (undo.length !== 0) {

        } else {
            setStatus(true)
        }
        // let tempUndo = undo;
        // let popNum = tempUndo.pop()
        // // setUndo()
        // popUndo();
        // if (undo.length > 0) {
        //     setStatus(false);
        // }else if (undo.length === 0) {
        //     setStatus(true);
        // }
    }

    // redo 한번 클릭하면 redo pop하면서 currVal 바구고, 다시 undo에 push
    const handleRedo = (e) => {
        if (redo.length === 1) {
            setStatusRedo(true)
        }
        console.log(redo);
        let temp = [...redo];
        let num = temp.pop()
        setUndo(num);
        // setRedo()
        popRedo();
        // setUndo()
    }

    return (
        <Fragment>
            <input id="inputbox" className="input"
                   ref={text} value={number}
                   onChange={e => setNumber(e.target.value)}/>
            <div className="btnGroup">
                <button id="undoButton" className="btn" disabled={status} onClick={e => handleUndo(e)}>
                    Undo
                </button>
                <button id="addButton" className="btn" onClick={e => handleNumber(e.target.innerText)}>
                    +
                </button>
                <button id="subButton" className="btn" onClick={e => handleNumber(e.target.innerText)}>
                    -
                </button>
                <button id="redoButton" className="btn" disabled={statusRedo} onClick={e => handleRedo(e)}>
                    Redo
                </button>
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    currVal: state.currVal,
})
export default connect(mapStateToProps, {calcNumber, getNumber, setUndo, popUndo, setRedo, popRedo})(Button);
