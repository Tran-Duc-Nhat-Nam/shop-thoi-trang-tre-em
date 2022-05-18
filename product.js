function playButton(id) {
    var audio = document.getElementById(id);
  if (audio.paused) {
    audio.play();
    audio.volume = 0.5;
  } else {
    audio.pause();
  }
}

function moveBanner(number, button) {
  document.getElementById("ib_1").style.transform =
    "translateX(" + number + "px)";
  var b = document.querySelectorAll(".selector");
  b.forEach((element) => {
    var o = window
      .getComputedStyle(element)
      .getPropertyValue("opacity");
    if (o == 1) {
      element.style.opacity = 0.35;
    }
  });
  button.style.opacity = 1;
}

function openSideNavBar(e) {
  if (e.target == document.getElementById("side_navigation_button")) {
    var obj = document.getElementById("side_nav_bar");
    if (
      window.getComputedStyle(obj).getPropertyValue("transform") !=
      "matrix(1, 0, 0, 1, 0, 0)"
    ) {
      obj.style.transform = "translateX(0px)";
    } else {
      obj.style.transform = "translateX(-1000px)";
    }
  }
}

function openSubSideNavBar(obj) {
  var child_obj = obj.querySelectorAll('.sub')
  if (
    window.getComputedStyle(child_obj[0]).getPropertyValue("opacity") !=
    "0"
  ) {
    document.getElementById(banner_descripsion).innerHTML = window.getComputedStyle(child_obj[0]).getPropertyValue("opacity")

  } else {
    document.getElementById(banner_descripsion).innerHTML = window.getComputedStyle(child_ob[0]).getPropertyValue("opacity")

  }
}

function openHTML(name) {
  window.open(name + ".html", "_self");
}


