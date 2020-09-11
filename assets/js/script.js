var sky_ele = document.getElementById("sky");
var html_ele = document.getElementById("html");
var body_ele = document.getElementById("body");
var inside = localStorage.sky;

resizeIframe();
function resizeIframe() {
  wid = window.innerWidth;
  var y = 100 + (wid - 2000) * 0.03
  new_width = (120 / y) * 50

  if (window.innerWidth < 700) { new_width = 120; }

  var ele = document.getElementById("camera");

  if (ele) {
    ele.setAttribute("camera", "fov:" + new_width);
  }
}


var checkExist = setInterval(function () {

  if (html_ele == null) {
    clearInterval(checkExist);
  }
  else if (html_ele && body_ele) {
    clearInterval(checkExist);
    delete_cover();

  }
}, 100);


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function delete_cover() {
  // await sleep(3000);
  html_ele.setAttribute("style", "overflow:visible; height:auto;");
  body_ele.setAttribute("style", "overflow:visible; height:auto");
  $('#cover').remove();
}

