import type { RootState, AppDispatch } from "../store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setLogger } from "../actions/appActions";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useLogger = (text: string) => {
    const dispatch = useAppDispatch();
    return () => {
    dispatch(
        setLogger({
          logger: true,
          loggerText: text,
        })
      );
      const timeout = setTimeout(
        () =>{
          dispatch(
            setLogger({
              logger: false,
              loggerText: ``,
            })
          );
          clearTimeout(timeout)
        },
        5000
      );
    }
};
