const socialLinksList = document.querySelector(".social-links");

const numberOfLinks = socialLinksList.childElementCount;
let linkIndex = -1;
let currentLink = null;

function selectNextLink() {
  linkIndex = linkIndex < numberOfLinks - 1 ? linkIndex + 1 : 0;
  focusOnLink();
}

function selectPreviousLink() {
  linkIndex = linkIndex > 0 ? linkIndex - 1 : numberOfLinks - 1;
  focusOnLink();
}

function unfocusOnLink() {
  if (currentLink !== null) {
    currentLink.classList.remove("selected");
  }
}

function focusOnLink() {
  unfocusOnLink();
  currentLink = socialLinksList.children[linkIndex].children[0];
  if (currentLink !== null) {
    currentLink.classList.add("selected");
  }
}

function unselectLinks() {
  unfocusOnLink();
  linkIndex = -1;
  currentLink = null;
}

function followLink() {
  if (currentLink === null) {
    return;
  }
  currentLink.click();
}

document.addEventListener("keydown", (e) => {
  let pressedKey = e.key;
  switch (pressedKey) {
    case "Enter":
      followLink();
      break;
    case "ArrowUp":
      selectPreviousLink();
      break;
    case "ArrowDown":
      selectNextLink();
      break;
    case "Escape":
      unselectLinks();
  }
});

socialLinksList.addEventListener("mouseover", () => {
  unselectLinks();
});
