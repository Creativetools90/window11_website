// show menu bar
let winIcon = document.querySelector(".win11");
let start = document.querySelector(".start");
let tark_bar = document.querySelector(".taskBar");
let wallpaper = document.querySelector(".wallpaper_img");
let shutdown = document.querySelector(".shutdown");
let logs_option = document.querySelector(".drop_log");
let dialog = document.querySelector(".dialog");
let refesh = document.querySelector(".refesh");
let theme = document.querySelector(".theme");
let theme_App = document.querySelector(".theame");
let close_btn = document.querySelector(".close");
let setting = document.querySelector(".setting");
let wall_list = document.getElementsByClassName("t_wall");

function Win32_jsEngine() {
  winIcon.addEventListener("click", () => {
    start.classList.toggle("show_start_bar");
  });
  wallpaper.addEventListener("click", () => {
    start.classList.remove("show_start_bar");
  });
  shutdown.addEventListener("mouseover", () => {
    logs_option.classList.toggle("show_log");
  });
  logs_option.addEventListener("mouseleave", () => {
    logs_option.classList.toggle("show_log");
  });
  // block right click
  block_rightclick();
  // show dialog
  showdialog();
  changeTheme();
  CurrentTime();

}
Win32_jsEngine();
// change wallpaper
function chamge_wallpaper() {
  console.log("change wallpaper")
  let wall_length = wall_list.length;
  for (let i = 0; i < wall_length; i++) {
    wall_list[i].addEventListener("click", function () {
      wallpaper.src = wall_list[i].src;
    })
  }
}
// block right click
function block_rightclick() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    // console.log("right click")
  });

  console.log("Right click disabled");
}

function showdialog() {
  let c_x;
  let c_y;
  // show dialog
  wallpaper.addEventListener("dblclick", function (e) {
    c_x = e.clientX;
    c_y = e.clientY;
    // console.log(c_x , c_y);
    dialog.classList.add("show_dialog");
    // set position
    dialog.style.left = `${c_x}px`;
    dialog.style.top = `${c_y}px`;
  });
  // hide dialog bar
  wallpaper.addEventListener("click", () => {
    dialog.classList.remove("show_dialog");
  });
  dialog.addEventListener("click", () => {
    dialog.classList.remove("show_dialog");
  });
}

// do refesh page
refesh.addEventListener("click", () => {
  console.log("Refech");
});
// change theme
function changeTheme() {
  // show theme bar
  theme.addEventListener("click", () => {
    theme_App.style.display = "block";
  });
  setting.addEventListener("click", () => {
    theme_App.style.display = "block";
  });

  close_btn.addEventListener("click", () => {
    theme_App.style.display = "none";
  });
  chamge_wallpaper();
}

// set current time in task bar

function CurrentTime() {
  let time_bar = document.querySelector(".time");
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  // let time = `${hr}:${min}`;
  let time = date.toLocaleTimeString();
  time_bar.textContent = time;
}

