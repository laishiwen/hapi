import("./jquery.min.js").then(($) => {
  $(function () {
    var getHeight = function (ele) {
      return ele.offsetHeight || ele.clientHeight
    }

    var html = document.documentElement

    var navigation = document.getElementById("navigation")

    var year = $("#year")

    var banner = $("#banner")

    var navigationHeight = getHeight(navigation)

    var height = getHeight(html)

    var scrollHeight = height / 2

    year.html((new Date()).getFullYear())

    banner.height(height - navigationHeight)

    $(document).scroll(function () {
      var scrollTop = $(this).scrollTop()

      var tools = $(".tools")
      if (scrollTop > scrollHeight) {
        tools.show()
      } else {
        tools.hide()
      }
    })

    $("a[href]").click(function () {
      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        var $target = $(this.hash)
        $target = ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]")
        if ($target.length) {
          var targetOffset = $target.offset().top - 50
          $("html,body").animate({
            scrollTop: targetOffset
          },
          800)
          return false
        }
      }
    })
  })
}).catch(res => {
  console.log(res)
})

import("./wow.min.js").then((res) => {
  var wow = new res.WOW(
    {
      animateClass: "animated",
      offset: 0,
      callback: function (e) {
        // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  )
  wow.init()
}).catch(res => {
  console.log(res)
})
