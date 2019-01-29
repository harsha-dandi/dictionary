import * as React from "react";
import {Button, Col, Grid, Row} from "react-bootstrap";
import { IProductDictionary } from "../types/IProductDictionary";
import {CeWindow} from "./CeWindow";
import Dictionary from "./Dictionary";
import "./Hello.css";

export interface IProps {
  dictionaries: IProductDictionary[];
  onCreateNewItem?: () => void;
}

export interface IState {
  showModal: any;
}

export class DictionaryCollection extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
      super(props);

      this.state = {showModal: false};
      this.setHideModal = this.setHideModal.bind(this);
      this.setShowModal = this.setShowModal.bind(this);
    }

    public render() {
    const {dictionaries, onCreateNewItem} = this.props;
    const {showModal} = this.state;
    return (
      <div>

        <CeWindow show={showModal} hideModal={this.setHideModal}>

        </CeWindow>

      <Grid>
                <Row className="text-center">
                      < Col md = {
                        12
                      } >

                        <Button bsStyle="primary" bsSize="large" onClick={onCreateNewItem} >+</Button>
                        </Col>
                </Row>

                <Row className="text-center mt-5 p-3">
                {
                      dictionaries.map((x, i) => {
                        return <Dictionary key={i} elements={x.dictionaryElements} tableId={i}
                        showModal={this.setShowModal} />;
                      })
                      }
                </Row>

      </Grid>
       </div>

    );
  }

    private setShowModal() {
      this.setState({showModal: true});
  }

    private setHideModal() {
    this.setState({showModal: false});
}
}
