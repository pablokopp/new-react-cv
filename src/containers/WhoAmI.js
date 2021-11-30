import React from "react";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
const WhoAmI = () => {
  return (
    <div className="whoAmI ">
      <Title cnTitle="whoAmI" text="QUIEN SOY" />
      <Paragraph
        cnPar="whoAmI"
        text="Soy un Front End Dev buscando una empresa en la cual aportar mis características únicas para desarrollar. Me comencé a interesar en el desarrollo hace algunos años comenzando a convertir ese interés en conocimientos sólidos en el 2020. Actualmente manejo HTML, CSS, Javascript, Git y ReactJs como mis principales herramientas de trabajo. A esto se le suman el uso de librerías de componentes (Material Ui, Semantic Ui), Firebase, Storybook, nomenclatura BEM, estructura de componentes estilo Atom Design, SASS, entre otras tecnologías que le suman a mi desarrollador. Además soy un bailarín y animador profesional, lo que me da un background de creatividad, adaptabilidad y disciplina para encarar nuevas experiencias y aprendizajes."
      />
    </div>
  );
};

export default WhoAmI;
