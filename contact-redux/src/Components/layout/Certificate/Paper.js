import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {clickedDocs} from "../../../actions/docsActions";

const Paper = ({click}) => {
    useEffect(() => {
    }, [])
    return (
        <div className="col right">
            <div className="details">
                {
                    click &&
                    (<ul className="info" key={click.id}>
                        <li>이름: {click.name} {click.first}</li>
                        <li>휴대폰: {click.phone}</li>
                        <li>SNS: {click.sns}</li>
                        <li>주소: {click.address}</li>
                    </ul>)}
                {click &&
                <p className="emptyset">{click.intro}</p>}

            </div>
        </div>
    )
}
const mapStateToProps = (state) => (
    {
        click: state.doc.click
    }
)

export default connect(mapStateToProps,
    {
        clickedDocs
    }
)(Paper)