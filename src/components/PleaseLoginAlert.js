import React from 'react'
import Login from './Modal';
import {Alert} from 'react-bootstrap'

function PleaseLoginAlert() {
    return (
        <>
        <div className='container fullH'>
            {/* <Alert varient="danger">
                <Alert.Link href="/">Please Login </Alert.Link>
            </Alert> */}
            <div class="alert alert-danger" role="alert">
               Login please!
            </div>
        </div>
        </>
    )
}

export default PleaseLoginAlert
