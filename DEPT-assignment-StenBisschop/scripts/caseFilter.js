// filter option start with all work
filterSelection("all")

// toggle between hiding and showing the dropdown content
function dropMenu() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

function filterFunction() {
  var input, filter, menu, buttons, i;
  filter = input.value.toUpperCase();
  menu = document.getElementById("dropdown-menu");
  buttons = menu.getElementsByTagName("btn");
  for (i = 0; i < buttons.length; i++) {
    txtValue = buttons[i].textContent || buttons[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      buttons[i].style.display = "";
    } else {
      buttons[i].style.display = "flex";
    }
  }
}

function filterSelection(c) {
  var items, active, i;
  items = document.getElementsByClassName("filter-item");
  active = document.getElementById("active-filter");
  if (c == "all") c = " ";

  for (i = 0; i < items.length; i++) {
    RemoveClass(items[i], "show");
    if (items[i].className.indexOf(c) > -1) AddClass(items[i], "show");
  }
  if (c == " ") c = "all work"
  active.innerText = c;
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var menu = document.getElementById("dropdown-menu");
var btns = menu.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}