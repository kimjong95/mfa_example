import { Button } from "@career-up/ui-kit";
import React from "react";
import IconDefault from "../assets/icon-default";
import * as css from "./connection.css";

interface ConnectionProps {
  name: string;
  picture: string | null;
  role: string;
  networkCount: number;
}

const Connection: React.FC<ConnectionProps> = ({
  name,
  picture,
  role,
  networkCount,
}) => {
  return (
    <div className={css.wrapper}>
      <div>
        {picture === null && <IconDefault />}
        {picture !== null && <img className={css.picture} src={picture} />}
      </div>
      <div className={css.name}>{name}</div>
      <div className={css.role}>{role}</div>
      <div className={css.networkCount}>공통 1촌 {networkCount}명</div>
      <div>
        <Button>1촌 맺기</Button>
      </div>
    </div>
  );
};

export default Connection;
