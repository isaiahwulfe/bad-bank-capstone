import React from 'react';
import Card from 'react-bootstrap/Card';

const MyCard = (props) => {
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <Card className={classes()} style={{marginTop: '3rem', width: "100%"}}>
        <Card.Header style={{textAlign: "center", backgroundColor: "black"}}>{props.header}</Card.Header>
        <Card.Body>
          {props.title && (
            <div style={{borderRadius:"3px 18px 18px 10px", border:"3px solid goldenrod", backgroundColor:"goldenrod", paddingTop:".75rem", marginBottom:".75rem"}}>
              <Card.Title style={{textAlign: "center"}}>{props.title}</Card.Title>
            </div>
          )}
          {props.text && (<Card.Text style={{textAlign: "center"}}>{props.text}</Card.Text>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </Card.Body>
        <Card.Footer className="text-muted" style={{textAlign: "center", backgroundColor: "black"}}><p>Bad Bank. Bad Business.</p></Card.Footer>
      </Card>      
    );    
  }

export default MyCard;