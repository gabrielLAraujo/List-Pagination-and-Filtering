// Function that stores DOM required elements.
const studentList = document.getElementsByClassName("student-list")[0].children;
const pageHeader = document.getElementsByClassName("page-header cf")[0];
const page = document.querySelector(".page");
const studentItem = document.querySelector(".student-item");
const studentDetails = document.querySelector(".student-details");
let studentsSearched = [];

// Functions that creates required DOM elements.

const createElement = (element, attribute = '', value = '', ...children) => {
  let created = document.createElement(element);
  if (attribute != '') {
    created.setAttribute(attribute, value);
  }
  children.forEach(child => {
    if (typeof child === "string") {
      created.appendChild(document.createTextNode(child));
    }
  });
  return created;
};

// Functions that manipulates DOM elements.

const appendPageLinks = (list) => {
  const numberOfPages = Math.ceil(list.length / 10);
  if (document.querySelector(".pagination") != null) {
    document.querySelectorAll(".pagination")[0].remove();
  }
  let ul = createElement("ul", "class", "pagination");
  for (let i = 0; i < numberOfPages; i++) {
    let li = createElement("li", "class", "pagination");
    let a = createElement("a", "", "", (i + 1).toString());
    a.addEventListener("click", () => {
      showPage(studentList, i + 1);
      document.getElementsByTagName("input")[0].value = "";
    });

    li.appendChild(a);
    ul.appendChild(li);
  }
  page.appendChild(ul);
};
// function that hide a certain list of students
const hideStudents = (list) => {
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = 'none';
  }
};

// function that show a certain list of students and show a set of ten as a page
const showPage = (list, page) => {
  const lastIndex = page * 10;
  const firstIndex = lastIndex - 9;
  hideStudents(studentList);
  for (let i = 0; i < list.length; i++) {
    if (i + 1 >= firstIndex && i + 1 <= lastIndex) {
      list[i].style.display = "";
    }
  }

};
// function that search for a string value 
const search = (value, list) => {
  const names = document.getElementsByTagName("h3");
  const emails = document.getElementsByClassName("email");
  for (let i = 0; i < names.length; i++) {
    if (names[i].textContent.indexOf(value) != -1 || emails[i].textContent.indexOf(value) != -1) {
      studentsSearched.push(list[i]);
    }
  }
  showPage(studentsSearched, 1);
  appendPageLinks(studentsSearched);
};
// function that creates elements and add events to it 
const createSearchElements = (list) => {
  let div = createElement("div", "class", "student-search");
  let input = createElement("input", "placeholder", "Search for students...");
  let button = createElement("BUTTON", "", "", "Search");

  button.addEventListener("click", () => {
    const value = input.value;
    search(value, list);
  });
  div.appendChild(input);
  div.appendChild(button);
  pageHeader.appendChild(div);
};

document.getElementsByTagName('h2')[0].addEventListener("click", () => {
  showPage(studentList, 1);
});
createSearchElements(studentList);
showPage(studentList, 1);
appendPageLinks(studentList);