import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getDocs, clickedDocs} from "../../../actions/docsActions";
import Searchbar from "../Certificate/Searchbar";

const Formats = ({doc: {doc}, getDocs, clickedDocs}) => {

    useEffect(() => {
        getDocs();
    }, [])

    const onDocs = (tar) => {
        clickedDocs(tar);
    }

    return (
        <div className="col left">
            <Searchbar/>
            <div className="contact-list">
                <ul>
                    {doc !== null && doc.map(d => {
                        return (
                            <li key={d.id}>
                                <button type="button" onClick={() => onDocs(d.id)}>{d.name}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    doc: state.doc
})

export default connect(mapStateToProps, {getDocs, clickedDocs})(Formats);
