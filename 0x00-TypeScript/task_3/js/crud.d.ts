import { RowID, RowElement } from "./interface.ts";

type insertRow = (row: RowElement) => RowID;
type deleteRow = (rowId: RowID) => boolean;
type updateRow = (rowId: RowID, row: RowElement) => boolean;

export {
	insertRow,
	deleteRow,
	updateRow,
}
