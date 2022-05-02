import Tooltip from 'react-bootstrap/Tooltip';

const createToolTip = (props) => {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Create a new account
        </Tooltip>
    )
}

export default createToolTip;