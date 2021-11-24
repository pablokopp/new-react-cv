import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";

const StudyExp = ({ swhere, swhen, show, sdesc }) => {
  return (
    <div className="study--exp">
      <Title cnTitle="studyWhere" text={swhere} />
      <Paragraph cnPar="studyWhen" text={swhen} />
      <Title cnTitle="studyHow" text={show} />
      <Paragraph cnPar="studyDesc" text={sdesc} />
    </div>
  );
};

export default StudyExp;
