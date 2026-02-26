let data;

function getFormData() {
  data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value.toString(),
    seats: (document.getElementById("guests").selectedIndex)
  };
  postToServer(data);
}

function postToServer(data) {
  if (data.name == "") {
    console.log("Operaion failed");
    return;
  }
  const server = fetch("http://localhost:9090/formdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Indicate the content type
    },
    body: JSON.stringify(data),
  });
  server
    .then((res) => {
      if(res.status == 200){
        alert("Data saved Successfully")
      }
    })
    .catch((res) => {
      console.log(res);
      alert("Please re-enter your data")
    });
}
