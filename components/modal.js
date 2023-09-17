function showModal(imageUrl) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `<img src="${imageUrl}" alt="Large Image" class="modal-image">`;

  document.body.appendChild(modal);

  modal.addEventListener("click", () => {
    modal.remove();
  });
}

document.addEventListener("click", (event) => {
  if (
    event.target.tagName === "IMG" &&
    event.target.parentElement.classList.contains("recipe-item")
  ) {
    const imageUrl = event.target.src;
    showModal(imageUrl);
  }
});
