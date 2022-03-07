const fileJson = "./WardList.json";

function loadWardData() {
  fetch(fileJson)
    .then((response) => response.text())
    .then((data) => {
      // Do something with your data
      console.log(data);
    });
}

loadWardData();
