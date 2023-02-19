const getUsersPromise = async () => {
    const response = await fetch(" https://reqres.in/api/users?page=2");
    const data = await response.json();
  
    return data;
  };
  
  getUsersPromise().then((data) => {
    let usersArr = data.data;
    const container = document.querySelector(".container");
  
    usersArr.forEach((user) => {
      let avatar = document.createElement("div");
      avatar.classList.add("avatar");
      avatar.innerHTML = `
      <div class="img">
            <img
              src="${user.avatar}"
              alt="${user.first_name + " " + user.last_name}"
            />
          </div>
          <div class="id">ID:${user.id}</div>
          <div class="name">Name: ${
            user.first_name + " " + user.last_name
          }</div>
          <div class="email">Email: ${user.email}</div>
          `;
  
      container.append(avatar);
    });
  }).catch((err) => {
    const container = document.querySelector(".container");
    container.innerHTML =
      "<h1>Sorry failed to connect</h1>";
    console.log("Rejected ", err);
  });
  
  /*getUsersPromise().catch((err) => {
    const container = document.querySelector(".container");
    container.innerHTML =
      "<h1>Sorry failed to connect</h1>";
    console.log("Rejected ", err);
  });*/