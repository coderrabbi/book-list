const author = document.getElementById("author");
const title = document.getElementById("title");
const bookName = document.getElementById("bookName");
const publication = document.getElementById("publication");
const submitBtn = document.getElementById("submitBtn");
const tbody = document.getElementById("tbody");
const bookForm = document.getElementById("bookForm");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const authorValue = author.value;
  const titleValue = title.value;
  const bookNameValue = bookName.value;
  const publicationValue = publication.value;
  if (authorValue === "") {
    alert("author required");
  } else if (titleValue === "") {
    alert("title required");
  } else if (bookNameValue === "") {
    alert("book Name required");
  } else if (publicationValue === "") {
    alert("publication required");
  } else {
    const tableRow = document.createElement("tr");
    let recieveData = (myValue) => {
      let myData = document.createElement("td");
      myData.innerHTML = myValue;
      tableRow.appendChild(myData);
    };
    recieveData(authorValue);
    recieveData(titleValue);
    recieveData(bookNameValue);
    recieveData(publicationValue);

    //Remove Item

    const removeData = document.createElement("td");
    removeData.innerHTML = `<i class="far fa-times-circle"></i>`;
    tableRow.appendChild(removeData);
    removeData.addEventListener("click", () => tbody.removeChild(tableRow));
    tbody.appendChild(tableRow);
    handleReset();
  }
});

const handleReset = () => {
  author.value = "";
  title.value = "";
  bookName.value = "";
  publication.value = "";
};

// const authorData = document.createElement("td");
// authorData.innerHTML = authorValue;
// tableRow.appendChild(authorData);
// //title value
// const titleData = document.createElement("td");
// titleData.innerHTML = titleValue;
// tableRow.appendChild(titleData);
// //book name value
// const bookNameData = document.createElement("td");
// bookNameData.innerHTML = bookNameValue;
// tableRow.appendChild(bookNameData);
// //publication value
// const publicationData = document.createElement("td");
// publicationData.innerHTML = publicationValue;
// tableRow.appendChild(publicationData);
