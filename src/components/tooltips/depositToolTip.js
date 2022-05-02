import Tooltip from 'react-bootstrap/Tooltip';

const depositToolTip = (props) => {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Make a deposit to your account
        </Tooltip>
    )
}

export default depositToolTip;