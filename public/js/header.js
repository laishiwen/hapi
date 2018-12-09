import "@babel/polyfill"

import "../css/reset.css"
import "../css/animate.css"
import "../css/style.less"
import "../css/pace-theme-corner-indicator.css"

var paceOptions = {
  elements: false,
  restartOnRequestAfter: false
}

import("./pace.min.js").then((Pace) => {
  Pace.start()

  Pace.on("hide", function () {
    var loading = document.getElementById("loading")
    loading.setAttribute("hidden", false)
  })
}).catch(res => {
  console.log(res)
})
