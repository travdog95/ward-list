const fileJson = "./WardList.json";
const mainContainerElement = document.querySelector(".main-container");

async function loadWardData() {
  const response = await fetch(fileJson);

  if (response.status >= 200 && response.status <= 299) {
    const data = await response.json();
    //populate html
    loadHtml(data);
  } else {
    mainContainerElement.innerHTML(`Error loading file (${fileJson})`);
  }
}

const loadHtml = (members) => {
  members.forEach((member) => {
    const memberElement = document.createElement("div");
    memberElement.innerHTML = member["Preferred Name"];
    mainContainerElement.append(memberElement);
  });
};

loadWardData();
