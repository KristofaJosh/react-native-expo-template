import { createAction } from "@reduxjs/toolkit";

const slice = "accounts";

export const resetAppAction = createAction(`${slice}/resetApp`);