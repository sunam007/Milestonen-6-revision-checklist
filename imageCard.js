// loadImages from Random User API;

console.log("i am added");
const loadImages = async () => {
  const url = `https://randomuser.me/api/?results=6`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  const { results } = data;
  //   console.log(results);
  const imageContainerDiv = document.getElementById("image-load");
  for (const i in results) {
    // console.log(results[i]);
    const { picture, name, cell, email, gender, location } = results[i];
    console.log(picture.large, name.first, name.last);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="col">
        <div class="card h-100">
            <img onclick="loadDetails('${name.first}', '${name.last}', '${gender}' , '${email}','${cell}','${location.country}','${picture.large}')" src="${picture.large}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${name.first} ${name.last}</h5>
        </div>
    </div>
    `;
    imageContainerDiv.appendChild(div);
  }
};

loadImages();

// load Details;

const loadDetails = (
  nameFirst,
  nameLast,
  gender,
  email,
  cell,
  country,
  url
) => {
  const detailContainerDiv = document.getElementById("image-detail");
  detailContainerDiv.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="col">
        <div class="card h-100">
            <img src="${url}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${nameFirst} ${nameLast}</h5>
            <p class="card-text" >Gender: ${gender} </p>
            <p class="card-text" >Email: ${email} </p>
            <p class="card-text" >Cell: ${cell} </p>
            <p class="card-text" >Country: ${country} </p>
        </div>
    </div>
    `;
  detailContainerDiv.appendChild(div);
};
