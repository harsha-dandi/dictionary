import * as React from "react";
import {Button, Col, Panel, Table} from "react-bootstrap";
import { IDictionaryItem } from "../types/IDictionaryItem";

export interface IProps {
  elements: IDictionaryItem[];
  tableId: number;
  showModal?: any;
}

export interface IState {
  elements: IDictionaryItem[];
}

const dictStyle={
  margin: "10px",
};

class Dictionary extends React.PureComponent<IProps, IState> {
constructor(props: IProps) {
super(props);
this.state = {elements: [...this.props.elements]};
}

public render() {
  const {showModal} = this.props;
  return (

<Col lg={4} md={6} xs={12}>
<Panel bsStyle="primary" style={dictStyle}>
<Button bsStyle="danger" className="pull-right" bsSize="small">X</Button>
<Button bsStyle="warning" className="pull-left" bsSize="small" onClick={showModal}>+</Button>
<Panel.Heading>
        <Panel.Title componentClass="h3">
            Dictionary {this.props.tableId}
        </Panel.Title>
</Panel.Heading>
<Panel.Body>
<Table striped bordered condensed hover responsive>
  <thead>
    <tr>
      <th>From</th>
      <th>To</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.elements.map((x) => {
           return <tr>
           <td>{x.from}</td>
           <td>{x.to}</td>
           <td><Button bsStyle="warning" bsSize="small">Edit</Button></td>
           <td><Button bsStyle="danger" bsSize="small" className="ml-3">Delete</Button></td>
          </tr>;
        })
    }
   </tbody>
</Table>
        </Panel.Body>
</Panel>
              </Col>

      );
    }
  }

export default Dictionary;
