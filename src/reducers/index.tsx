
import { DictionaryAction } from "../actions";
import { CREATE_DICTIONARY } from "../constants/index";
import { IStoreState } from "../types/IStoreState";

export function dictionary(state: IStoreState, action: DictionaryAction): IStoreState {
  switch (action.type) {
      case CREATE_DICTIONARY:
      return {...state, dictionaries: [...state.dictionaries, {dictionaryElements: []} ] };
    default:
      return state;
  }
}
