import Tooltip from 'react-bootstrap/Tooltip';

const loginToolTip = (props) => {
    return (
        <Tooltip id="button-tooltip" {...props}>
            See every account and all balances
        </Tooltip>
    )
}

export default loginToolTip;