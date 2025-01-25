// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/root-reducers";
import { AppDispatch } from "@/redux/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()