import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore, RootState } from "app/providers";

interface StoreProviderProps {
  initialState?: RootState;
  children?: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ initialState, children }) => {

  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
