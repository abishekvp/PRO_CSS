setInterval(()=>{
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM":"AM";

    if(h>12){
        h = h - 12;
    }

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;


    hh.style.strokeDashoffset = 510 - (510 * h) / 12;
    mm.style.strokeDashoffset = 630 - (630 * m) / 60;
    ss.style.strokeDashoffset = 760 - (760 * s) / 60;

    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`;
})

// Social

function flipCover (css, options) {
    var options = options || {}
    if (typeof css === "object") {
      options = css
    } else {
      options.css = css
    }
  
    var css = options.css
    var url = options.url
    var text = options.text || css
    var width = options.width
    var height = options.height
  
    var $section = $(".flip-cover-" + css).addClass(css + "-section")
    var $button = $("<div>").addClass(css + "-button")
    var $cover = $("<div>").addClass(css + "-cover")
    var $outer = $("<div>").addClass(css + "-outer")
    var $inner = $("<div>").addClass(css + "-inner")
  
    if (width) {
      $section.css("width", width)
    }
  
    if (height) {
      $section.css("height", height)
  
      var lineHeight = ':after{ line-height: ' + height + ';}'
      var $outerStyle = $('<style>').text('.' + css + '-outer' + lineHeight)
      $outerStyle.appendTo($outer)
      var $innerStyle = $('<style>').text('.' + css + '-inner' + lineHeight)
      $innerStyle.appendTo($inner)
    }
  
    $cover.html($outer)
    $inner.insertAfter($outer)
  
    $button.html($("<a>").text(text).attr("href", url))
  
    $section.html($button)
    $cover.insertAfter($button)
   }
  
  
  
  flipCover({
    css: "dribbble",
    url: "https://dribbble.com/vveleva",
    text: "vveleva",
    width: "80px"
  })
  
  flipCover("twiter", {
    url: "https://twitter.com/vveleva",
    text: "vveleva",
    width: "80px"
  })
  
  flipCover("linkedin", {
    url: "https://linkedin.com/in/vveleva",
    text: "vveleva",
    width: "80px"
  })
  
  flipCover("email", {
    text: "vvveleva @gmail",
    width: "80px",
    height: "50px"
  })
  