import { createProject } from "./create_project.js";
// import { todo } from "./todo.js";
import "./style.css";

const main = function () {
  const projectDialog = document.querySelector("#project-dialog");
  const addProject = document.querySelector("#new-project");
  const closeBtn = document.querySelector("#close-btn");
  const submitBtn = document.querySelector("#submit-btn");
  const form = document.querySelector("form");
  const inputProject = document.querySelector("#input-project");

  addProject.addEventListener("click", () => projectDialog.showModal());
  closeBtn.addEventListener("click", () => projectDialog.close());
  submitBtn.addEventListener("click", () => {
    form.requestSubmit();
    const newProject = inputProject.value;
    if (newProject !== "") {
      createProject(newProject);
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    projectDialog.close();
  });
};

main();
