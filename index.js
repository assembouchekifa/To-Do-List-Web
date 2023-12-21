let addButton = document.getElementById("buttonSand");
let divg = document.getElementById("big");
let i = 0;
for (let index = 0; index < window.localStorage.length; index++) {
  let inputAdd = document.getElementById("textAdd");
  let div = document.createElement("div");
  let boutton = document.createElement("button");
  let divapp = document.createElement("div");
  div.classList.add("divc");
  divapp.classList.add("task");
  boutton.classList.add("removButton");
  boutton.innerHTML = "remov";
  div.appendChild(divapp);
  div.appendChild(boutton);
  divapp.innerHTML = window.localStorage.getItem(
    window.localStorage.key(index)
  );
  divg.appendChild(div);
  i++;
  document.querySelectorAll(".removButton").forEach((ele) => {
    ele.addEventListener("click", () => {
      ele.parentElement.remove();
    });
  });
}
addButton.addEventListener("click", () => {
  if (document.getElementById("textAdd").value == "") {
  } else {
    let inputAdd = document.getElementById("textAdd");
    let div = document.createElement("div");
    let boutton = document.createElement("button");
    let divapp = document.createElement("div");
    div.classList.add("divc");
    divapp.classList.add("task");
    boutton.classList.add("removButton");
    boutton.innerHTML = "remov";
    div.appendChild(divapp);
    div.appendChild(boutton);
    divapp.innerHTML = inputAdd.value;
    divg.appendChild(div);
    while (true) {
      if (window.localStorage.getItem(i.toString()) == null) {
        window.localStorage.setItem(i.toString(), inputAdd.value);
        break;
      } else {
        i++;
      }
    }
    document.querySelectorAll(".removButton").forEach((ele) => {
      ele.addEventListener("click", () => {
        ele.parentElement.remove();
        console.log(ele.parentElement.firstElementChild.innerHTML);
        for (let index = 0; index < window.localStorage.length; index++) {
          if (
            window.localStorage.getItem(window.localStorage.key(index)) ==
            ele.parentElement.firstElementChild.innerHTML
          ) {
            window.localStorage.removeItem(window.localStorage.key(index));
            break;
          }
        }
      });
    });
  }
});
document.querySelectorAll(".removButton").forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.parentElement.remove();
    console.log(ele.parentElement.firstElementChild.innerHTML);
    for (let index = 0; index < window.localStorage.length; index++) {
      if (
        window.localStorage.getItem(window.localStorage.key(index)) ==
        ele.parentElement.firstElementChild.innerHTML
      ) {
        window.localStorage.removeItem(window.localStorage.key(index));
        break;
      }
    }
  });
});
