import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { RootState, StoreProvider } from "app/providers";
import { I18nextProvider } from "react-i18next";
import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import i18nForTests from "shared/config/i18n/i18nForTests";

export interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<RootState>;
}

export const renderComponent = (
  component: ReactNode,
  { route = "/", initialState }: RenderComponentOptions = {},
) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as RootState}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
