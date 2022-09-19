import { types } from "../types/types";

export const abrirAcordeon = (bool) => ({
    type: types.acordeonOpen, payload: bool
})