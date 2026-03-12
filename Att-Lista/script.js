const input = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

function createItem(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    itemList.appendChild(li);
}

addButton.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") {
        return;
    }

    createItem(text);
    input.value = "";
    input.focus();
});

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addButton.click();
    }
});