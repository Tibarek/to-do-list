import { Project } from "./project.js";

export const createProject = function (pName) {
  const projectList = document.querySelector(".project-list");

  pName = new Project(pName);
  const projectTitle = document.createElement("button");
  projectTitle.textContent = pName.getTitle();
  projectList.appendChild(projectTitle);
};
