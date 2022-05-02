import { forwardRef } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';

const withdrawToolTip = (props) => {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Take money out of your account
        </Tooltip>
    )
}

export default withdrawToolTip;