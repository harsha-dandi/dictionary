import * as React from "react";
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock, Modal} from "react-bootstrap";
import { IDictionaryRowPayload } from "../types/IDictionaryRowPayload";

export interface IProps {
  show: boolean;
  hideModal?: any;
  onCreateNewRow?: any;
  dictionaryId: number;
}

export interface IState {
  from: string;
  to: string;
  id: string;
}

export class CeWindow extends React.PureComponent<IProps, IState> {
constructor(props: IProps) {
super(props);

this.state =  {from: "", to: "", id: ""};
this.handleFromChange = this.handleFromChange.bind(this);
this.handleToChange = this.handleToChange.bind(this);
this.onCreateNewRow = this.onCreateNewRow.bind(this);
}

public render() {
    const { hideModal, show} = this.props;
    return (
        <Modal show={show} animation={false} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
            <Button onClick={hideModal} bsStyle="danger" bsSize="small" className="pull-right">X</Button>
          </Modal.Header>
          <Modal.Body>
              <form>
          <FormGroup
          controlId="from"
          validationState={this.getFromValidationState()}
        >
          <ControlLabel>From:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.from}
            placeholder="Enter text"
            onChange={this.handleFromChange}
          />
          <FormControl.Feedback />
          <HelpBlock>string length + duplicate record</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="to"
          validationState={this.getToValidationState()}
        >
          <ControlLabel>To:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.to}
            placeholder="Enter text"
            onChange={this.handleToChange}
          />
          <FormControl.Feedback />
          <HelpBlock>string length + duplicate record</HelpBlock>
        </FormGroup>
        </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onCreateNewRow}>Create</Button>
          </Modal.Footer>
        </Modal>
      );
    }

private getFromValidationState() {
    const length = this.state.from.length;
    if (length > 10) { return "success"; } else
    if (length > 5) { return "warning"; } else
    if (length > 0) { return "error"; }
    return null;
  }

private getToValidationState() {
    const length = this.state.to.length;
    if (length > 10) { return "success"; } else
    if (length > 5) { return "warning"; } else
    if (length > 0) { return "error"; }
    return null;
  }

private handleFromChange(e: any) {
    this.setState({from: e.target.value});
  }

private handleToChange(e: any) {
    this.setState({to: e.target.value});
  }

private onCreateNewRow(event: any){
    if (this.getFromValidationState() === "success" && this.getToValidationState() === "success")
    {
        const record = {row :
            {from: this.state.from, to: this.state.to, id: "someid"}, 
                        dictionaryId: this.props.dictionaryId };
        this.props.onCreateNewRow(record);
        return;
    }
    event.stopPropagation();
  }
}