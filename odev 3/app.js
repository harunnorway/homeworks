// Initialize list items array
var items = [];

// Get list element
var list = document.getElementById("list");

// Add item function
function addItem() {
  // Get new item input
  var newItem = document.getElementById("newItem");

  // Check if input is empty
  if (newItem.value === "") {
    showToast("Please enter an item", "danger");
    return;
  }

  // Add item to items array
  items.push(newItem.value);

  // Create list item element
  var li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = newItem.value;

  // Create delete button element
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete-button");
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteButton.addEventListener("click", function() {
    deleteItem(li);
  });

  // Append delete button to list item element
  li.appendChild(deleteButton);

  // Append list item element to list
  list.appendChild(li);

  // Clear new item input
  newItem.value = "";

  showToast("Item added successfully", "success");
}

// Delete item function
function deleteItem(li) {
  // Remove item from items array
  items.splice(items.indexOf(li.innerText), 1);

  // Remove list item element from list
  list.removeChild(li);

  showToast("Item deleted successfully", "success");
}

// Mark item as done function
function markDone(li) {
  // Toggle "done" class on list item element
  li.classList.toggle("done");

  // Show success message
  showToast("Item marked as done", "success");
}

// Show toast message function
function showToast(message, type) {
  var toast = document.createElement("div");
  toast.classList.add("toast", "fade", "show");
  toast.setAttribute("role",
