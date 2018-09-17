import React from "react";

import Header from "app/header/components";
import { StyledContent, StyledMainComponent } from "./styles";

export const MainComponent = () => (
  <StyledMainComponent>
    <Header />
    <StyledContent />
  </StyledMainComponent>
);

MainComponent.displayName = "MainComponent";

export default MainComponent;
