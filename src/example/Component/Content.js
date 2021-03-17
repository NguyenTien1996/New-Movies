import React from 'react';
import './Common/Common.css'

const Content = (props) => {
    return(
        <div className={`content  ${props.theme} `}>
            <div className="p-5">
            <h3 className="display-4">tieu de</h3>
            <p className={`content-text ${props.color}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
            </div>
        </div>
        )
}
export default Content;