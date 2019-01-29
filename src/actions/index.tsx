
import * as constants from "../constants";
import {  IDictionaryRowPayload } from "../types/IDictionaryRowPayload";

export interface ICreateNewDictionary {
    type: constants.CREATE_DICTIONARY;
}

export interface IAddRowToDictionary {
    type: constants.ADD_ROW;
    payload: IDictionaryRowPayload;
}

export type DictionaryAction = ICreateNewDictionary | IAddRowToDictionary;

export function createDictionary(): ICreateNewDictionary {
    return {
        type: constants.CREATE_DICTIONARY,
    };
}

export function addRow(payload: IDictionaryRowPayload): IAddRowToDictionary {
    return {
        type: constants.ADD_ROW,
        // tslint:disable-next-line:object-literal-sort-keys
        payload,
    };
}
