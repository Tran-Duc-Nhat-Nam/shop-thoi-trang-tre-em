function darkMode()
{
    if (window.getComputedStyle(document.documentElement).getPropertyValue("--theme-color") != "#000000")
    {
        document.documentElement.style.setProperty('--theme-color', '#000000')
        document.documentElement.style.setProperty('--content-background-color', '#323232')
        document.documentElement.style.setProperty('--content-foreground-color', '#ffffff')
        document.documentElement.style.setProperty('--content-border-color', '#ffffff')
    }
    else
    {
        document.documentElement.style.setProperty('--theme-color', '#afeeee')
        document.documentElement.style.setProperty('--content-background-color', '#ffffff')
        document.documentElement.style.setProperty('--content-foreground-color', '#000000')
        document.documentElement.style.setProperty('--content-border-color', '#000000')
    }
}

function moveBanner(number, button) {
  var a = document.querySelectorAll(".slide");
  a.forEach((element) => {
    var i = window
      .getComputedStyle(element)
      .getPropertyValue("opacity");
    if (i == 1) {
      element.style.opacity = 0;
    }
  });
  document.getElementById("slide_" + number).style.opacity = 1;
  var b = document.querySelectorAll(".option");
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

function isFullscreen() {
  if (!window.screenTop && !window.screenY) {
    var a = document.getElementsByTagName("body")[0]
      var h = window.innerHeight - 18;
      a.style.height = h + "px";
      a.style.width = (2 * h) + "px";
      //alert((window.innerHeight - 18) + "x" + (window.innerWidth))
  }
}