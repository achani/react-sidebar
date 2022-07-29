import styled from "styled-components";
import { Colors } from "@blueprintjs/core";

export type ItemGroupProps = {
  location: string;
};

export const StyledSidebar = styled.div`
  background-color: ${Colors.DARK_GRAY1};
  color: ${Colors.WHITE};
  width: 60px;
  height: 100vh;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  position: sticky;
  top: 0px;
`;

export const ItemGroupContainer = styled.div<ItemGroupProps>`
  background-color: red;
`;

export const IconContainer = styled.span`
  height: 40px;
  width: 40px;
  color: grey;

  &:hover {
    color: white;
    transition: 0.1s ease-in all;
  }
`;

export const Text = styled.p<{ show: boolean }>`
  display: ${(p) => (p.show ? "inline" : "none")};
`;
export const StyledMenuItem = styled.div<any>`
  margin: 10px;
`;

// Toggler -----------------------------------------------------------------------------
export const TogglerContainer = styled.div`
  margin-left: auto;
  margin-right: 5px;
`;

export const Toggler = styled.div`
  cursor: pointer;
  transition: 0.2s ease-in all;
`;
