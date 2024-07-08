const collapses = document.querySelectorAll(".collapse__title");
const classActiveForTitle = "collapse__title_active";

function firstOpenCollapse() {
  collapses[0].classList.add(classActiveForTitle);
  collapses[0].nextElementSibling.style.maxHeight =
    collapses[0].nextElementSibling.scrollHeight + "px";
}

firstOpenCollapse();

collapses.forEach((collapse) => {
  collapse.addEventListener("click", openCollapse);
});

function openCollapse() {
  !this.classList.contains(classActiveForTitle) && removeClassActiveForTitle();

  const content = this.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    this.classList.remove(classActiveForTitle);
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    this.classList.add(classActiveForTitle);
  }
}

function removeClassActiveForTitle() {
  collapses.forEach((collapse) => {
    collapse.nextElementSibling.style.maxHeight = null;
    collapse.classList.remove(classActiveForTitle);
  });
}
