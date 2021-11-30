var tik = setInterval(() => {
  var lyf = document.getElementById('digit')
  lyf.classList.toggle("digit");
  if (lyf.innerText == 0) {
    document.getElementById('container').classList.toggle("containeroverlay")
    window.location="./MyBirthday/MyBirthday.html";
    clearInterval(tik)
  } else {
    lyf.innerText -= 1
  }
  lyf.classList.toggle("digit");
}, 1000)