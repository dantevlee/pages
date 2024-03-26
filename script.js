const date = document.getElementById("date");
const weight = document.getElementById("weight");
const unit = document.getElementById("unit");
const notes = document.getElementById("text");
const tableResult = document.getElementById("tableResult");

document
  .getElementById("toDoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (tableResult.rows.length < 1) {
      addHeader();
    }
    addShit();
    resetShit();
  });

function addShit() {
  const tableRowEntry = document.createElement("tr");
  const dateEntry = document.createElement("td");
  const weightEntry = document.createElement("td");
  const unitEntry = document.createElement("td");
  const notesEntry = document.createElement("td");
  const actionEntry = document.createElement("td");

  dateEntry.textContent = date.value;
  weightEntry.textContent = weight.value;
  unitEntry.textContent = unit.value;
  notesEntry.textContent = notes.value;

  let removeButton = document.createElement("button");
  removeButton.textContent = "Delete";
  removeButton.onclick = function () {
    tableRowEntry.remove();
    if (tableResult.rows.length == 1) {
      tableResult.deleteRow(0);
    }
  };
  actionEntry.append(removeButton);

  tableRowEntry.append(dateEntry);
  tableRowEntry.append(weightEntry);
  tableRowEntry.append(unitEntry);
  tableRowEntry.append(notesEntry);
  tableRowEntry.append(actionEntry);
  tableResult.append(tableRowEntry);
}

function resetShit() {
  notes.value = "";
  weight.value = "";
  date.value = "";
}

function addHeader() {
  const hearderTable = document.createElement("tr");
  const headerDate = document.createElement("th");
  const headerWeight = document.createElement("th");
  const headerUnit = document.createElement("th");
  const headerNote = document.createElement("th");
  const headerAction = document.createElement("th");
  headerDate.textContent = "Date";
  headerWeight.textContent = "Weight";
  headerUnit.textContent = "Unit";
  headerNote.textContent = "Notes";
  headerAction.textContent = "Action?";

  hearderTable.append(headerDate);
  hearderTable.append(headerWeight);
  hearderTable.append(headerUnit);
  hearderTable.append(headerNote);
  hearderTable.append(headerAction);
  tableResult.append(hearderTable);
}
