import {
  Button,
  Classes,
  Dialog,
  Intent,
  Label,
  TextArea,
} from "@blueprintjs/core";
import React from "react";
import { useState } from "react";
import './Login.css';

export default function FoundryLogin() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [token, setToken] = useState("");
  const handleLoginButtonClick = React.useCallback(
    () => setIsOpen(!isOpen),
    []
  );
  const handleClose = React.useCallback(() => setIsOpen(false), []);
  const handleTokenUpdate = (e: React.MouseEvent<HTMLElement>) => {
    console.log("Handle token update Logic");
  };
  return (
    <div>
      <Button
        onClick={handleLoginButtonClick}
        className={Classes.MINIMAL}
        icon="user"
        text="Login"
      />
      <Dialog
        title="Login to Foundry"
        isOpen={isOpen}
        icon="user"
        onClose={handleClose}
      >
        <Label className="label">Enter your foundry token below: </Label>
        <TextArea
          growVertically={true}
          large={true}
          intent={Intent.PRIMARY}
          value={token}
          onChange={(e) => {
            setToken(e.target.value);
          }}
          style={{ margin: "2em" }}
        />

        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button
              onClick={handleTokenUpdate}
              intent={Intent.PRIMARY}
              text="Update Token"
            />
            <Button onClick={handleClose}>Close</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}


export function CSLogin() {
  return (
    <Button className={Classes.MINIMAL} icon="blocked-person" />
  )
}

