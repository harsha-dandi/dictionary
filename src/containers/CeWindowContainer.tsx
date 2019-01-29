import { connect } from "react-redux";
import {Dispatch} from "redux";
import * as actions from "../actions";
import {CeWindow} from "../components/CeWindow";
import { IDictionaryItem } from "../types/IDictionaryItem";
import { IStoreState } from "../types/IStoreState";

export function mapDispatchToProps(dispatch: Dispatch<actions.DictionaryAction>) {
  return {
    onCreateNewRow: (dictionaryItem: IDictionaryItem, dictionaryId: number) => {
          return dispatch(actions.addRow({ row: dictionaryItem, dictionaryId }));
      },
  };
}

export default connect(null, mapDispatchToProps)(CeWindow);
