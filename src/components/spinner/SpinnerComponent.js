import { SpinnerContainer, SpinnerOverlay } from "./SpinnerComponent.styles";

import React from "react";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} isLoading />
  );
};

export default WithSpinner;