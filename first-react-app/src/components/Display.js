import {Fragment, useEffect} from "react";
import React from "react";
import {getNumber} from '../actions/numberActions'
import {connect} from "react-redux";

const Display = ({currVal: {currVal, undo}, getNumber}) => {
    useEffect(() => {
        getNumber();
    },[])

    return (
        <Fragment>
            <div id="valuebox" className="counter">
                {currVal}
            </div>
        </Fragment>
    )
};
const mapStateToProps = state => ({
    currVal: state.currVal
})

export default connect(mapStateToProps, {getNumber})(Display);