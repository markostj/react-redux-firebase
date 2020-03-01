import React from "react";

const ProjectDetails = props => {
  //preko propsa dobijemo detalje o ruti
  const id = props.match.params.id;
  return (
    <div className="project-details">
      <div className="project-details__card">
        <h1 className="project-details__card__title">Project Title - {id}</h1>
        <p className="project-details__card__content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          explicabo quidem corporis earum, nostrum exercitationem, cum illo
          numquam nulla deleniti consequatur nam cumque rem accusamus! Aliquam
          neque doloremque recusandae eligendi!
        </p>
        <p className="project-details__card__author">
          Posted by Marko Stjepanek
        </p>
        <p className="project-details__card__date">13th July, 4pm</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
