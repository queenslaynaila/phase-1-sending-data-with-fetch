function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      let id = user.id;
      let p = document.createElement("p");
      p.textContent = id;
      document.body.appendChild(p);
    })
    .catch(function (error) {
      let e = document.createElement("p");
      e.textContent = error.message;
      document.body.appendChild(e);
    });
}

submitData("Steve", "steve@steve.com");
