import { connect } from "react-redux";
import {Dispatch} from "redux";
import * as actions from "../actions";
import {DictionaryCollection} from "../components/DictionaryCollection";
import { IStoreState } from "../types/IStoreState";

export function mapStateToProps({ dictionaries }: IStoreState) {
  return {
    dictionaries,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.DictionaryAction>) {
  return {
    onCreateNewItem: () => dispatch(actions.createDictionary()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DictionaryCollection);
