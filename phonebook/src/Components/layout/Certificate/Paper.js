import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {clickedDocs} from "../../../actions/docsActions";

const displayStyle = {
    width: "400px",
    borderRadius: "7px",
    padding: "10px 15px 0 25px",
    height: "640px",
}


const Paper = ({click}) => {
    useEffect(() => {
    }, [])
    return (

        <div style={displayStyle} className="card">
            {click &&
            (<table>
                    <tbody>
                    <tr>
                        <td style={{textAlign: "center"}}><h2>{click.name}</h2></td>
                    </tr>
                    <tr>
                        <td>Family Name : {click.name}</td>
                    </tr>
                    <tr>
                        <td>First Name: {click.first}</td>
                    </tr>
                    <tr>
                        <td>Phone : {click.phone}</td>
                    </tr>
                    <tr>
                        <td>SNS : {click.sns}</td>
                    </tr>
                    <tr>
                        <td>Address: {click.address}</td>
                    </tr>
                    <tr>
                        <td>Intro: {click.intro}</td>
                    </tr>
                    </tbody>
                </table>
            )}
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