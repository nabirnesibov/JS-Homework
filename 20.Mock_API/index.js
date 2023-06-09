let list = document.querySelector(".row");
let edit = document.querySelector(".fa-pen");


async function allData() {
  list.innerHTML = "";
  await fetch("http://localhost:8000/users")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((element) => {
        list.innerHTML += `
        <div class="col-5 d-flex justify-content-between align-items-center bg-secondary p-3 my-4">
        <div>
          <h3>${element.firstname}</h3>
          <p>${element.email}</p>
        </div>
        <div>
        <a style="background:transparent" href="edit.html?id=${element.id}"id=${element.id} onclick=editData("${element.id}")><i class="fa-solid fa-pen text-success" ></i></a>
        <a style="background:transparent" id=${element.id} onclick=deleteData("${element.id}")><i class="fa-solid fa-trash-can text-danger" ></i></a>  
        </div>
      </div>
        `;
      })
    );
}
allData();

function deleteData(id){
  fetch(`http://localhost:8000/users/${id}`,{method:"DELETE"})
}

edit.addEventListener("click",function(e){
  e.preventDefault()
 window.location.href="./edit.html"
})

