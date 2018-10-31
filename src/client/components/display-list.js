import React from 'react';
import { ListGroup, ListGroupItem, Card } from 'reactstrap';

const DisplayList = ({ list }) => (
  <Card>
    <div className="scroll">
      <ListGroup>
        {list && list.map(item => <ListGroupItem key={item.id}>{item}</ListGroupItem>)}
      </ListGroup>
    </div>
  </Card>
);
export default DisplayList;
