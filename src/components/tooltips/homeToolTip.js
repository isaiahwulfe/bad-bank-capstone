import Tooltip from 'react-bootstrap/Tooltip';

const homeTip = (props) => {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Home, home on the range...
        </Tooltip>
    )
}
    
export default homeTip;