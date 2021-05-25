import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux'; // reducer와 연결하기 위해 필요한 connect
import PropTypes from 'prop-types';
import Accordion from "./Accordion";
import M from 'materialize-css/dist/js/materialize.min'
import {getDocs} from "../../../actions/docsActions";
import Searchbar from "../Certificate/Searchbar";
import Paper from "../Certificate/Paper";

const formatStyle = {
    border: "0px",
    width: "350px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}

const Formats = ({doc: {doc}, getDocs}) => {

    useEffect(() => {
        getDocs();
    }, [])

    return (
        <Fragment>
            <ul className="collection with-header"
                style={formatStyle}
            >
                <li className="collection-header" style={{background: "transparent"}}>
                    <h1 className="center" style={{background: "transparent"}}>Phone Book</h1>
                </li>
                <Searchbar/>
                <Accordion/>
            </ul>
        </Fragment>
    );
};
const mapStateToProps = state => ({
    doc: state.doc
})

export default connect(mapStateToProps, {getDocs})(Formats);


