// swup js
const options = {
  containers: ["#swup", "#swupMenu"],
  animateHistoryBrowsing: true,
};

const swup = new Swup(options);

// scrollbar
Scrollbar.use(OverscrollPlugin);
Scrollbar.init(document.querySelector('#scrollbar'), {
  damping: 0.05,
  renderByPixel: true,
  continuousScrolling: true,
});
Scrollbar.init(document.querySelector('#scrollbar2'), {
  damping: 0.05,
  renderByPixel: true,
  continuousScrolling: true,
});

// page loading
$(document).ready(function () {
  anime({
    targets: '.art-preloader .art-preloader-content',
    opacity: [0, 1],
    delay: 200,
    duration: 600,
    easing: 'linear',
    complete: function (anim) {}
  });
  anime({
    targets: '.art-preloader',
    opacity: [1, 0],
    delay: 2200,
    duration: 400,
    easing: 'linear',
    complete: function (anim) {
      $('.art-preloader').css('display', 'none');
      helper();
    }
  });
});
var bar = new ProgressBar.Line(preloader, {
  strokeWidth: 1.7,
  easing: 'easeInOut',
  duration: 1400,
  delay: 750,
  trailWidth: 1.7,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1);

// progressbars
var bar1 = new ProgressBar.Circle(circleprog1, {
  strokeWidth: 7,
  easing: 'easeInOut',
  duration: 1400,
  delay: 2500,
  trailWidth: 7,
  step: function (state, circle) {
    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});

var bar2 = new ProgressBar.Circle(circleprog2, {
  strokeWidth: 7,
  easing: 'easeInOut',
  duration: 1400,
  delay: 2600,
  trailWidth: 7,
  step: function (state, circle) {
    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});


var bar3 = new ProgressBar.Circle(circleprog3, {
  strokeWidth: 7,
  easing: 'easeInOut',
  duration: 1400,
  delay: 2700,
  trailWidth: 7,
  step: function (state, circle) {
    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});

var loadBar = new ProgressBar.Line(lineprog, {
  strokeWidth: 1.72,
  easing: 'easeInOut',
  duration: 100,
  delay: 0,
  trailWidth: 1.72,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

var bar4 = new ProgressBar.Line(lineprog0, {
  strokeWidth: 1.72,
  easing: 'easeInOut',
  duration: 1400,
  delay: 2800,
  trailWidth: 1.72,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});


var bar5 = new ProgressBar.Line(lineprog1, {
  strokeWidth: 1.72,
  easing: 'easeInOut',
  duration: 1400,
  delay: 2800,
  trailWidth: 1.72,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});


var bar6 = new ProgressBar.Line(lineprog2, {
  strokeWidth: 1.72,
  easing: 'easeInOut',
  duration: 1400,
  delay: 2900,
  trailWidth: 1.72,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});


var bar7 = new ProgressBar.Line(lineprog3, {
  strokeWidth: 1.72,
  easing: 'easeInOut',
  duration: 1400,
  delay: 3000,
  trailWidth: 1.72,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});


var bar8 = new ProgressBar.Line(lineprog4, {
  strokeWidth: 1.72,
  easing: 'easeInOut',
  duration: 1400,
  delay: 3100,
  trailWidth: 1.72,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});


var bar9 = new ProgressBar.Line(lineprog5, {
  strokeWidth: 1.72,
  easing: 'easeInOut',
  duration: 1400,
  delay: 3200,
  trailWidth: 1.72,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
// counters
anime({
  targets: '.art-counter-frame',
  opacity: [0, 1],
  duration: 800,
  delay: 2300,
  easing: 'linear',
});

anime({
  targets: '.art-counter',
  delay: 1300,
  opacity: [1, 1],
  complete: function (anim) {
    $('.art-counter').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
});


// Contact form
$('.art-input').keyup(function () {
  if ($(this).val()) {
    $(this).addClass('art-active');
    $('.art-submit-frame').removeClass('hide');
  } else {
    $(this).removeClass('art-active');
    $('.art-submit-frame').addClass('hide');
  }
});


// portfolio filter
$('.art-filter a').on('click', function () {
  $('.art-filter .art-current').removeClass('art-current');
  $(this).addClass('art-current');

  var selector = $(this).data('filter');
  $('.art-grid').isotope({
    filter: selector
  });
  return false;
});

// masonry Grid
$('.art-grid').isotope({
  filter: '*',
  itemSelector: '.art-grid-item',
  transitionDuration: '.6s',
});

// slider testimonials
var swiper = new Swiper('.art-testimonial-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 1400,
  autoplay: false,
  autoplaySpeed: 5000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.art-testi-swiper-next',
    prevEl: '.art-testi-swiper-prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 1,
    },
  },
});

// slider works
var swiper = new Swiper('.art-works-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 1400,
  autoplay: {
    delay: 4000,
  },
  autoplaySpeed: 5000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.art-works-swiper-next',
    prevEl: '.art-works-swiper-prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 1,
    },
  },
});

// slider blog
var swiper = new Swiper('.art-blog-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 1400,
  autoplay: {
    delay: 4000,
  },
  autoplaySpeed: 5000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.art-blog-swiper-next',
    prevEl: '.art-blog-swiper-prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 1,
    },
  },
});

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionDuration: 1200,
  buttons: [
    "zoom",
    "share",
    "slideShow",
    "thumbs",
    "close"
  ],
});

$('[data-fancybox="diplome"]').fancybox({
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionDuration: 1200,
  buttons: [
    "zoom",
    "slideShow",
    "thumbs",
    "close",
  ],
});

$('[data-fancybox="avatar"]').fancybox({
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionDuration: 1200,
  buttons: [
    "zoom",
    "close"
  ],
});

$('[data-fancybox="recommendation"]').fancybox({
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionDuration: 1200,
  buttons: [
    "zoom",
    "slideShow",
    "thumbs",
    "close",
  ],
});

$.fancybox.defaults.hash = false;

$('.current-menu-item a').clone().appendTo('.art-current-page');

$('.art-map-overlay').on('click', function () {
  $(this).addClass('art-active');
});

$('.art-info-bar-btn').on('click', function () {
  $('.art-info-bar').toggleClass('art-active');
  $('.art-menu-bar-btn').toggleClass('art-disabled');
});

$('.art-menu-bar-btn').on('click', function () {
  $('.art-menu-bar-btn , .art-menu-bar').toggleClass("art-active");
  $('.art-info-bar-btn').toggleClass('art-disabled');
});

$('.art-info-bar-btn , .art-menu-bar-btn').on('click', function () {
  $('.art-content').toggleClass('art-active');
});

$('.art-curtain , .art-mobile-top-bar').on('click', function () {
  $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
});

$('.menu-item').on('click', function () {
  if ($(this).hasClass('menu-item-has-children')) {
    $(this).children('.sub-menu').toggleClass('art-active');
  } else {
    $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
  }
});

// reinit
document.addEventListener("swup:contentReplaced", function () {

  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#scrollbar'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector('#scrollbar2'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  // Masonry Grid
  $('.art-grid').isotope({
    filter: '*',
    itemSelector: '.art-grid-item',
    transitionDuration: '.6s',
  });

  $('.art-filter a').on('click', function () {
    $('.art-filter .art-current').removeClass('art-current');
    $(this).addClass('art-current');

    var selector = $(this).data('filter');
    $('.art-grid').isotope({
      filter: selector
    });
    return false;
  });

  anime({
    targets: '.art-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 300,
    easing: 'linear',
  });

  $('.art-counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'linear',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  // slider testimonials
  var swiper = new Swiper('.art-testimonial-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-testi-swiper-next',
      prevEl: '.art-testi-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      }
    },
  });

  // slider works
  var swiper = new Swiper('.art-works-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-works-swiper-next',
      prevEl: '.art-works-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider blog
  var swiper = new Swiper('.art-blog-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-blog-swiper-next',
      prevEl: '.art-blog-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close"
    ],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $.fancybox.defaults.hash = false;

  $('.current-menu-item a').clone().prependTo('.art-current-page');

  $('.menu-item').on('click', function () {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('art-active');
    } else {
      $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
    }
  });

})
//show data
function showData(response) {
  $('.get-posts').removeClass("hide");
  $('.get-images').removeClass("hide");
  let followers = response["followers"];
  let following = response["following"];
  let friend = response["friend"];
  let not_follow_back = response["not_follow_back"];
  let not_following_you = response["not_following_you"];
  let total_follow = (followers.length + following.length) - friend.length;
  //percentages
  let p_followers = followers.length / total_follow;
  let p_following = following.length / total_follow;
  let p_friend = friend.length / total_follow;
  let p_not_follow_back = not_follow_back.length / total_follow;
  let p_not_following_you = not_following_you.length / total_follow;
  //basic
  $('.art-header .art-avatar-curtain').attr("href", response["profile_pic_base64"]);
  $('.art-header .art-avatar-curtain img').attr("src", response["profile_pic_base64"]);
  $('.art-header h5').text(response["username"]);
  $('.art-header .art-sm-text').text(response["biography"]);
  //table
  $('.art-table .count_owner_to_timeline_media').text(response["count_owner_to_timeline_media"]);
  $('.art-table .count_followed_by').text(response["count_followed_by"]);
  $('.art-table .count_follow').text(response["count_follow"]);
  $('.art-table .friend').text(friend.length);
  $('.art-table .not_follow_back').text(not_follow_back.length);
  $('.art-table .not_following_you').text(not_following_you.length);
  //sort users follow...
  function innerUsers(attr, usersList) {
    document.querySelector(".data-users-frame ." + attr).innerHTML = "";
    usersList.forEach(el => {
      var header = document.createElement("div");
      header.classList = "header";
      var img = document.createElement("img");
      img.classList = "profile-pic";
      img.setAttribute('data-fancybox', 'gallery');
      img.setAttribute('src', el["profile_pic_url"]);
      var detail = document.createElement("div");
      detail.classList = "detail";
      var name = document.createElement("div");
      name.classList = "name";
      var a = document.createElement("a");
      a.setAttribute('href', 'https://www.instagram.com/' + el["username"]);
      a.setAttribute('target', '_blank');
      a.innerText = el["username"];
      name.append(a);
      var fname = document.createElement("div");
      fname.classList = "fname";
      fname.innerText = el["full_name"];
      detail.append(name);
      detail.append(fname);
      header.append(img);
      header.append(detail);
      document.querySelector(".data-users-frame ." + attr).append(header);
    });
    if (usersList.length == 0) {
      var empty = document.createElement("div");
      empty.classList = "empty";
      empty.innerText = "No results found.";
      document.querySelector(".data-users-frame ." + attr).append(empty);
    }
  }
  innerUsers("opt-1", response["followers"]);
  innerUsers("opt-2", response["following"]);
  innerUsers("opt-3", response["friend"]);
  innerUsers("opt-4", response["not_follow_back"]);
  innerUsers("opt-5", response["not_following_you"]);
  //sort posts
  document.querySelector(".posts").innerHTML = "";
  response["posts"].forEach(post => {
    var img = document.createElement("img");
    img.classList = "profile-pic";
    img.setAttribute('data-fancybox', 'gallery');
    img.setAttribute('src', post["image_versions2"]["candidates"][0]["url"]);
    document.querySelector(".posts").append(img);
  });
  if (response["posts"].length == 0) {
    var empty = document.createElement("div");
    empty.classList = "empty";
    empty.innerText = "No Posts Found.";
    document.querySelector(".posts").append(empty);
  }
  //available users
  $.ajax({
    url: "/available",
    success: function (res) {
      document.querySelector(".available-users").innerHTML = "";
      res.forEach(element => {
        var li = document.createElement("li");
        li.classList = "available";
        li.innerText = element;
        document.querySelector(".available-users").append(li);
      });
      if (res.length == 0) {
        var li = document.createElement("li");
        li.innerText = "No Posts Found.";
        document.querySelector(".available-users").append(li);
      }
    }
  });
  bar1.animate(p_friend);
  bar2.animate(p_not_follow_back);
  bar3.animate(p_not_following_you);
  bar4.animate(1);
  bar5.animate(p_followers);
  bar6.animate(p_following);
  bar7.animate(p_friend);
  bar8.animate(p_not_follow_back);
  bar9.animate(p_not_following_you);
  $('.art-counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'linear',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  document.querySelector("#scrollbar > div.scroll-content > div:nth-child(2)").classList.remove("hide");
  document.querySelector("#scrollbar > div.scroll-content > div:nth-child(3)").classList.remove("hide");
}
//data
const alert = document.querySelector(".alert");
const message = alert.querySelector(".text");
const close = alert.querySelector(".close-icon");


function helper() {
  const load = setInterval(() => {
    $.ajax({
      url: "/message",
      success: function (response) {
        alert.classList.remove("hide");
        message.innerHTML = response["message"];
        if (response["type"] == "load") {
          alert.classList.remove("message-only");
          loadBar.animate(response["percentage"]);
        }
        if (response["type"] == "alert" || response["percentage"] == 1) {
          alert.classList.add("message-only");
          clearInterval(load);
          setTimeout(() => {
            alert.classList.add("message-only");
            loadBar.animate(0);
            alert.classList.add("hide");
            console.clear(); //ERR_BLOCKED_BY_RESPONSE.NotSameOrigin
          }, 4000);
        }
      },
      error: function () {
        alert.classList.add("hide");
        clearInterval(load);
      }
    });
  }, 1000);
  close.addEventListener('click', () => {
    alert.classList.add("hide")
  });
}
$("form").submit(function (e) {
  e.preventDefault();

  $.ajax({
    type: "POST",
    url: "/username",

    data: {
      username: $('form input').val(),
      Accept: 'application/json'
    },
    success: function (response) {
      $('form input').val('');
      showData(response);
    }
  });
  helper();
});
$('.get-images').on('click', function () {

  $('.get-images').addClass('hide');
  document.querySelectorAll('.data-users-frame img').forEach(img => {
    url = img.getAttribute('src');
    $.ajax({
      type: "POST",
      url: "/images",
      data: {
        url: url,
        user: $('.art-name.mb-10').text(),
      },
      success: function (response) {
        img.setAttribute('src', response);
      }
    });
  });
  helper();
});
$('.get-posts').on('click', function () {

  $('.get-posts').addClass('hide');
  document.querySelectorAll('.posts img').forEach(img => {
    src = img.getAttribute('src');
    $.ajax({
      type: "POST",
      url: "/posts",
      data: {
        url: src,
      },
      success: function (response) {
        img.setAttribute('src', response);
      }
    });
  });
  helper();
});
$('.trash').on('click', function () {
  $.ajax({
    url: "/delete",
    success: function () {
      setTimeout(() => {
        window.location = "";
      }, 1000);
    }
  });
  helper();
});
document.querySelectorAll(".data-buttons-frame label").forEach(e => {
  e.addEventListener('click', () => {
    let l = document.querySelector(".selected");
    l.classList.remove("selected");
    document.querySelector(".data-users-frame ." + l.getAttribute("for")).classList.add("hide");
    e.classList.add("selected");
    document.querySelector(".data-users-frame ." + e.getAttribute("for")).classList.remove("hide");
  });
});