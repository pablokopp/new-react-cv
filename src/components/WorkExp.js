import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";

const WorkExp = ({ jwhere, jwhen, jhow, jdesc }) => {
  return (
    <div className="work--exp">
      <Title cnTitle="workWhere" text={jwhere} />
      <Paragraph cnPar="workWhen" text={jwhen} />
      <Title cnTitle="workHow" text={jhow} />
      <Paragraph cnPar="workDesc" text={jdesc} />
    </div>
  );
};

export default WorkExp;
