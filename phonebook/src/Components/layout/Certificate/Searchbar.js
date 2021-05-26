import React, {useRef} from 'react';
import {searchDocs, getDocs} from "../../../actions/docsActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const Searchbar = ({searchDocs}) => {
    const text = useRef('')
    const onChange = () => {
        searchDocs(text.current.value);
    }

    return (
        <div className="search-box">
            <input ref={text} type="text" className="inp-sch" placeholder="검색어를 입력하세요." onChange={onChange}/>
        </div>
    )
}
Searchbar.propTypes = {
    searchDocs: PropTypes.func.isRequired,
    getDocs: PropTypes.func.isRequired,
}
export default connect(null, {searchDocs, getDocs})(Searchbar);