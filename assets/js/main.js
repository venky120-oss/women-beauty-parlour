/* ==========================================================
   KISHORE BEAUTY PARLOUR — SITE SCRIPT
   Shared header/footer, interactions, renderers and forms.
   ========================================================== */
(function () {
  "use strict";
  var S = window.SITE;
  var body = document.body;
  var BASE = body.getAttribute("data-base") || "";
  var PAGE = body.getAttribute("data-page") || "";
  document.documentElement.classList.remove("no-js");

  /* ---------- Helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function wa(msg) { return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(msg || ("Hi, I'd like to book an appointment at " + S.name + ".")); }
  function tel() { return "tel:" + S.phoneRaw; }
  function rupee(n) { return "₹" + Number(n).toLocaleString("en-IN"); }
  function link(p) { return BASE + p; }
  function svc(slug) { return (window.SERVICES || []).filter(function (s) { return s.slug === slug; })[0]; }
  var WA_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43zm8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.34a11.27 11.27 0 0 0-3.32-8.02z"/></svg>';
  window.KBP = { wa: wa, tel: tel, rupee: rupee, svc: svc, WA_ICON: WA_ICON };

  /* ---------- Header ---------- */
  var NAV = [["index.html", "Home", "home"], ["about.html", "About", "about"], ["services.html", "Services", "services"], ["bridal.html", "Bridal", "bridal"], ["gallery.html", "Gallery", "gallery"], ["pricing.html", "Pricing", "pricing"], ["contact.html", "Contact", "contact"]];
  var MOBILE_EXTRA = [["offers.html", "Offers", "offers"], ["testimonials.html", "Reviews", "testimonials"]];

  function navItems(list) {
    return list.map(function (n) {
      var active = n[2] === PAGE ? ' class="active" aria-current="page"' : "";
      return '<li><a href="' + link(n[0]) + '"' + active + ">" + n[1] + "</a></li>";
    }).join("");
  }

  var headerHost = $("#site-header");
  if (headerHost) {
    headerHost.outerHTML =
      '<a class="skip-link" href="#main">Skip to main content</a>' +
      '<header class="site-header" id="siteHeader">' +
        '<div class="container header-inner">' +
          '<a class="logo" href="' + link("index.html") + '" aria-label="' + esc(S.name) + ' home">' +
            '<img class="logo-mark" src="' + link("assets/img/logo.svg") + '" alt="" width="42" height="42">' +
            '<span class="logo-text">' + esc(S.shortName) + "<small>Beauty Parlour</small></span></a>" +
          '<nav class="main-nav" aria-label="Main navigation"><ul>' + navItems(NAV) + "</ul></nav>" +
          '<div class="header-actions">' +
            '<a class="icon-btn call" href="' + tel() + '" aria-label="Call us"><i data-lucide="phone"></i></a>' +
            '<a class="btn btn--primary btn--sm header-cta" href="' + link("booking.html") + '">Book Appointment</a>' +
            '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>' +
          "</div>" +
        "</div>" +
        '<div class="mobile-menu" id="mobileMenu">' +
          '<nav aria-label="Mobile navigation"><ul>' + navItems(NAV.concat(MOBILE_EXTRA)) + "</ul></nav>" +
          '<div class="btn-row">' +
            '<a class="btn btn--primary" href="' + link("booking.html") + '"><i data-lucide="calendar-heart"></i>Book Appointment</a>' +
            '<a class="btn btn--wa" href="' + wa() + '" target="_blank" rel="noopener">' + WA_ICON + "Chat on WhatsApp</a>" +
            '<a class="btn btn--secondary" href="' + tel() + '"><i data-lucide="phone"></i>Call ' + esc(S.phoneDisplay) + "</a>" +
          "</div>" +
        "</div>" +
      "</header>";
  }

  /* ---------- Footer + floating buttons ---------- */
  var footerHost = $("#site-footer");
  if (footerHost) {
    var svcLinks = (window.SERVICES || []).slice(0, 8).map(function (s) {
      return '<li><a href="' + link("services/" + s.slug + ".html") + '">' + esc(s.name) + "</a></li>";
    }).join("");
    footerHost.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            "<div>" +
              '<a class="logo" href="' + link("index.html") + '"><img class="logo-mark" src="' + link("assets/img/logo.svg") + '" alt="" width="42" height="42"><span class="logo-text">' + esc(S.shortName) + "<small>Beauty Parlour</small></span></a>" +
              '<p class="mt-4">A calm, hygienic and beautiful space in ' + esc(S.city) + " where every woman is pampered with personalised beauty care, professional makeup and genuine warmth.</p>" +
              '<div class="socials">' +
                '<a href="' + S.instagram + '" target="_blank" rel="noopener" aria-label="Instagram"><i data-lucide="instagram"></i></a>' +
                '<a href="' + S.facebook + '" target="_blank" rel="noopener" aria-label="Facebook"><i data-lucide="facebook"></i></a>' +
                '<a href="' + S.youtube + '" target="_blank" rel="noopener" aria-label="YouTube"><i data-lucide="youtube"></i></a>' +
                '<a href="' + wa() + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + WA_ICON + "</a>" +
              "</div>" +
            "</div>" +
            "<div><h4>Quick Links</h4><ul>" +
              navItems([["index.html", "Home"], ["about.html", "About Us"], ["services.html", "Services"], ["bridal.html", "Bridal Makeup"], ["gallery.html", "Gallery"], ["pricing.html", "Pricing"], ["offers.html", "Offers"], ["testimonials.html", "Reviews"], ["contact.html", "Contact"], ["booking.html", "Book Appointment"], ["privacy-policy.html", "Privacy Policy"]]) +
            "</ul></div>" +
            "<div><h4>Services</h4><ul>" + svcLinks + "</ul></div>" +
            "<div><h4>Visit Us</h4><ul class=\"footer-contact\">" +
              '<li><i data-lucide="map-pin"></i><span>' + esc(S.addressLine1) + "<br>" + esc(S.addressLine2) + "</span></li>" +
              '<li><i data-lucide="phone"></i><a href="' + tel() + '">' + esc(S.phoneDisplay) + "</a></li>" +
              '<li><i data-lucide="message-circle"></i><a href="' + wa() + '" target="_blank" rel="noopener">WhatsApp us</a></li>' +
              '<li><i data-lucide="mail"></i><a href="mailto:' + S.email + '">' + esc(S.email) + "</a></li>" +
              '<li><i data-lucide="clock"></i><span>' + S.hours.map(function (h) { return esc(h[0]) + ": " + esc(h[1]); }).join("<br>") + "</span></li>" +
            "</ul></div>" +
          "</div>" +
          '<div class="footer-bottom"><span>© ' + S.year + " " + esc(S.name) + ". All rights reserved.</span><span>Designed with love for beautiful women. ♡</span></div>" +
        "</div>" +
      "</footer>" +
      '<a class="fab fab--call" href="' + tel() + '" aria-label="Call ' + esc(S.name) + '"><i data-lucide="phone"></i></a>' +
      '<a class="fab fab--wa" href="' + wa() + '" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">' + WA_ICON + "</a>" +
      '<nav class="mobile-bar" aria-label="Quick actions">' +
        '<a href="' + tel() + '"><i data-lucide="phone"></i><span>Call</span></a>' +
        '<a class="wa" href="' + wa() + '" target="_blank" rel="noopener">' + WA_ICON + "<span>WhatsApp</span></a>" +
        '<a class="book" href="' + link("booking.html") + '"><i data-lucide="calendar-heart"></i><span>Book Now</span></a>' +
      "</nav>";
  }

  /* ---------- Fill business details anywhere on the page ---------- */
  $$("[data-site]").forEach(function (el) { el.textContent = S[el.getAttribute("data-site")]; });
  $$("[data-link]").forEach(function (el) {
    var t = el.getAttribute("data-link");
    if (t === "tel") el.href = tel();
    else if (t === "wa") { el.href = wa(el.getAttribute("data-msg")); el.target = "_blank"; el.rel = "noopener"; }
    else if (t === "mail") el.href = "mailto:" + S.email;
    else if (S[t]) { el.href = S[t]; el.target = "_blank"; el.rel = "noopener"; }
  });
  $$("[data-wa-icon]").forEach(function (el) { el.insertAdjacentHTML("afterbegin", WA_ICON); });
  $$("[data-render=hours]").forEach(function (el) {
    el.innerHTML = '<table class="hours-table"><tbody>' + S.hours.map(function (h) { return "<tr><td>" + esc(h[0]) + "</td><td>" + esc(h[1]) + "</td></tr>"; }).join("") + "</tbody></table>";
  });
  /* Map: light placeholder first; the heavy Google Maps iframe (~1 MB) loads only on tap */
  $$("[data-render=map]").forEach(function (el) {
    var q = encodeURIComponent(S.mapQuery);
    el.innerHTML = '<div class="map-facade"><span class="ic"><i data-lucide="map-pin"></i></span>' +
      "<strong>" + esc(S.name) + "</strong><span>" + esc(S.addressLine1) + ", " + esc(S.addressLine2) + "</span>" +
      '<div class="btn-row"><button type="button" class="btn btn--primary btn--sm" data-load-map>Show Map</button>' +
      '<a class="btn btn--secondary btn--sm" href="https://www.google.com/maps/search/?api=1&query=' + q + '" target="_blank" rel="noopener">Get Directions</a></div></div>';
    $("[data-load-map]", el).addEventListener("click", function () {
      el.innerHTML = '<iframe title="Map showing ' + esc(S.name) + " location in " + esc(S.city) + '" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=' + q + '&z=14&output=embed"></iframe>';
    });
  });

  /* ---------- Service cards ---------- */
  function serviceCard(s, mode) {
    var href = s.link ? link(s.link) : link("services/" + s.slug + ".html");
    var actions = mode === "full"
      ? '<a class="btn btn--primary btn--sm" href="' + link("booking.html?service=" + encodeURIComponent(s.name)) + '">Book Now</a><a class="btn btn--ghost" href="' + href + '">View Details <i data-lucide="arrow-right"></i></a>'
      : '<a class="btn btn--ghost" href="' + href + '">View Details <i data-lucide="arrow-right"></i></a><a class="btn btn--ghost" href="' + link("booking.html?service=" + encodeURIComponent(s.name)) + '" aria-label="Book ' + esc(s.name) + '">Book</a>';
    return '<article class="card reveal">' +
      '<div class="card-media"><img src="' + img(s.image, 600) + "&h=450" + '" srcset="' + imgSet(s.image, [400, 600, 800], 0.75) + '" sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 80vw" alt="' + esc(s.name) + " at " + esc(S.name) + ', Chennai" loading="lazy" decoding="async" width="600" height="450"></div>' +
      '<div class="card-body"><h3>' + esc(s.name) + "</h3><p>" + esc(s.short) + "</p>" +
      '<div class="price-tag">Starting from <strong>' + rupee(s.price) + "</strong></div>" +
      '<div class="card-actions">' + actions + "</div></div></article>";
  }
  $$("[data-render=service-cards]").forEach(function (el) {
    var cat = el.getAttribute("data-cat");
    var list = (window.SERVICES || []).concat(cat ? (window.SERVICE_EXTRAS || []) : []);
    if (cat) list = list.filter(function (s) { return s.cat === cat; });
    var only = el.getAttribute("data-slugs");
    if (only) list = only.split(",").map(svc).filter(Boolean);
    el.innerHTML = list.map(function (s) { return serviceCard(s, el.getAttribute("data-mode")); }).join("");
  });

  /* Service <select> options */
  $$("select[data-render=service-options]").forEach(function (sel) {
    var names = (window.SERVICES || []).map(function (s) { return s.name; })
      .concat(["Pre-Bridal Package", "Body Polishing", "Head & Body Massage", "Combo Package", "Not sure — need advice"]);
    sel.insertAdjacentHTML("beforeend", names.map(function (n) { return '<option value="' + esc(n) + '">' + esc(n) + "</option>"; }).join(""));
    var q = new URLSearchParams(location.search).get("service");
    if (q) { sel.value = q; if (sel.value !== q) { sel.insertAdjacentHTML("beforeend", '<option value="' + esc(q) + '">' + esc(q) + "</option>"); sel.value = q; } }
  });

  /* ---------- Testimonials ---------- */
  function stars() { return '<span class="stars" aria-label="5 out of 5 stars">' + new Array(6).join('<i data-lucide="star"></i>') + "</span>"; }
  window.KBP.stars = stars;
  function testimonialCard(t) {
    return '<article class="testimonial reveal" data-cat="' + t.cat + '">' + stars() +
      "<blockquote>" + esc(t.text) + "</blockquote>" +
      '<div class="t-person"><div class="avatar" aria-hidden="true">' + t.name.charAt(0) + "</div><div><strong>" + esc(t.name) + "</strong><span>" + esc(t.area) + ", Chennai</span><br><span class=\"t-service\">" + esc(t.service) + "</span></div></div></article>";
  }
  $$("[data-render=testimonials]").forEach(function (el) {
    var list = window.TESTIMONIALS || [];
    var cat = el.getAttribute("data-cat");
    if (cat) list = list.filter(function (t) { return t.cat === cat; });
    var lim = parseInt(el.getAttribute("data-limit"), 10);
    if (lim) list = list.slice(0, lim);
    el.innerHTML = list.map(testimonialCard).join("");
  });

  /* Testimonial filter */
  $$("[data-filter-target]").forEach(function (bar) {
    var grid = $(bar.getAttribute("data-filter-target"));
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      $$("button", bar).forEach(function (x) { x.classList.toggle("active", x === b); x.setAttribute("aria-pressed", x === b); });
      var f = b.getAttribute("data-filter");
      $$("[data-cat]", grid).forEach(function (c) {
        var show = f === "all" || c.getAttribute("data-cat") === f;
        c.classList.toggle("hide", !show); c.style.display = show ? "" : "none";
      });
    });
  });

  /* ---------- Gallery ---------- */
  var CAT_LABEL = { hair: "Hair", skin: "Skin", makeup: "Makeup", bridal: "Bridal", nails: "Nails", body: "Body" };
  $$("[data-render=gallery]").forEach(function (el) {
    var list = window.GALLERY || [];
    var lim = parseInt(el.getAttribute("data-limit"), 10);
    if (lim) list = list.slice(0, lim);
    el.innerHTML = list.map(function (g, i) {
      var h = [520, 680, 600, 760][i % 4];
      return '<button type="button" class="g-item" data-cat="' + g.cat + '" data-index="' + i + '" aria-label="View ' + esc(g.title) + '">' +
        '<img src="' + img(g.id, 600) + "&h=" + h + '" srcset="' + imgSet(g.id, [300, 450, 600], h / 600) + '" sizes="(min-width: 1200px) 290px, (min-width: 900px) 33vw, 50vw" data-id="' + g.id + '" alt="' + esc(g.title) + " — " + CAT_LABEL[g.cat] + ' work at Kishore Beauty Parlour" loading="lazy" decoding="async" width="600" height="' + h + '">' +
        '<span class="ov"><span><span>' + CAT_LABEL[g.cat] + "</span><strong>" + esc(g.title) + "</strong></span></span></button>";
    }).join("");
  });
  var lb = $("#lightbox");
  if (lb) {
    var lbImg = $("img", lb), lbCap = $("figcaption", lb), current = 0, lastFocus;
    function visibleItems() { return $$(".g-item").filter(function (x) { return x.style.display !== "none"; }); }
    function show(i) {
      var items = visibleItems(); if (!items.length) return;
      current = (i + items.length) % items.length;
      var im = $("img", items[current]);
      /* Size the full image to the screen instead of always 1400px */
      var w = Math.min(1400, Math.round(Math.min(window.innerWidth, 1000) * (window.devicePixelRatio || 1) / 100) * 100);
      lbImg.src = img(im.getAttribute("data-id"), w); lbImg.alt = im.alt;
      lbCap.textContent = $("strong", items[current]).textContent;
    }
    function open(item) { lastFocus = item; show(visibleItems().indexOf(item)); lb.classList.add("open"); body.style.overflow = "hidden"; $(".lb-close", lb).focus(); }
    function close() { lb.classList.remove("open"); body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
    document.addEventListener("click", function (e) { var it = e.target.closest(".g-item"); if (it) open(it); });
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-prev", lb).addEventListener("click", function () { show(current - 1); });
    $(".lb-next", lb).addEventListener("click", function () { show(current + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    /* Swipe left/right on phones */
    var tx = null;
    lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (tx === null) return;
      var dx = e.changedTouches[0].clientX - tx; tx = null;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    }, { passive: true });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(current + 1);
      if (e.key === "ArrowLeft") show(current - 1);
    });
  }

  /* ---------- Instagram grid ---------- */
  $$("[data-render=insta]").forEach(function (el) {
    var ids = ["photo-1487412947147-5cebf100ffc2", "photo-1604654894610-df63bc536371", "photo-1617627143750-d86bc21e42bb", "photo-1570172619644-dfd03ed5d881", "photo-1562322140-8baeececf3df", "photo-1610992015732-2449b76344bc"];
    el.innerHTML = ids.map(function (id, i) {
      return '<a href="' + S.instagram + '" target="_blank" rel="noopener" aria-label="View post ' + (i + 1) + ' on Instagram"><img src="' + img(id, 400) + "&h=400" + '" srcset="' + imgSet(id, [250, 400], 1) + '" sizes="(min-width: 1024px) 200px, (min-width: 768px) 33vw, 50vw" alt="Beauty work by Kishore Beauty Parlour on Instagram" loading="lazy" decoding="async" width="400" height="400"><i data-lucide="instagram"></i></a>';
    }).join("");
  });

  /* ---------- Before / after sliders ---------- */
  $$("[data-render=ba]").forEach(function (el) {
    var items = [["photo-1570172619644-dfd03ed5d881", "Glow Facial"], ["photo-1617627143750-d86bc21e42bb", "Bridal Makeup"], ["photo-1562322140-8baeececf3df", "Hair Colour"], ["photo-1487412947147-5cebf100ffc2", "Party Makeup"], ["photo-1604654894610-df63bc536371", "Manicure"], ["photo-1560066984-138dadb4c035", "Hair Spa"]];
    el.innerHTML = items.map(function (it) {
      var src = img(it[0], 600) + "&h=750";
      return '<div class="reveal"><div class="ba"><img src="' + src + '" alt="' + it[1] + ' result" loading="lazy" width="600" height="750"><img class="ba-before" src="' + src + '" alt="" aria-hidden="true" loading="lazy" width="600" height="750"><span class="lbl b">Before</span><span class="lbl a">After</span><span class="ba-line"></span><input type="range" min="0" max="100" value="50" aria-label="Compare before and after for ' + it[1] + '"></div><p class="ba-caption">' + it[1] + "</p></div>";
    }).join("");
  });
  document.addEventListener("input", function (e) {
    if (!e.target.matches(".ba input[type=range]")) return;
    var ba = e.target.parentNode, v = e.target.value;
    $(".ba-before", ba).style.clipPath = "inset(0 " + (100 - v) + "% 0 0)";
    $(".ba-line", ba).style.left = v + "%";
  });

  /* ---------- Service detail page ---------- */
  var detail = $("[data-render=service-detail]");
  if (detail) {
    var s = svc(body.getAttribute("data-service"));
    if (s) {
      var bookHref = link("booking.html?service=" + encodeURIComponent(s.name));
      var waMsg = "Hi, I'd like to book " + s.name + " at " + S.name + ".";
      var li = function (arr) { return arr.map(function (x) { return '<li><i data-lucide="check"></i><span>' + esc(x) + "</span></li>"; }).join(""); };
      detail.innerHTML =
        '<section class="page-hero page-hero--image" style="--bg:url(' + img(s.image, 1800) + ');--bg-m:url(' + img(s.image, 800) + "&h=1000" + ')">' +
          '<div class="container">' +
            '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="' + link("index.html") + '">Home</a><span>/</span><a href="' + link("services.html") + '">Services</a><span>/</span><span aria-current="page">' + esc(s.name) + "</span></nav>" +
            '<span class="eyebrow">Starting from ' + rupee(s.price) + "</span>" +
            "<h1>" + esc(s.name) + " in Chennai</h1><p>" + esc(s.short) + "</p>" +
            '<div class="btn-row"><a class="btn btn--primary" href="' + bookHref + '"><i data-lucide="calendar-heart"></i>Book Now</a><a class="btn btn--outline-light" href="' + wa(waMsg) + '" target="_blank" rel="noopener">' + WA_ICON + "Ask on WhatsApp</a></div>" +
          "</div></section>" +
        '<section class="section"><div class="container split">' +
          '<div class="reveal text-left"><span class="eyebrow">About this service</span><h2>What is ' + esc(s.name) + "?</h2><p class=\"muted\">" + esc(s.what) + '</p><a class="btn btn--primary mt-4" href="' + bookHref + '">Book This Service</a></div>' +
          '<div class="detail-img reveal"><img src="' + img(s.image, 900) + "&h=675" + '" srcset="' + imgSet(s.image, [500, 700, 900], 0.75) + '" sizes="(min-width: 900px) 45vw, 92vw" decoding="async" alt="' + esc(s.name) + ' at Kishore Beauty Parlour" loading="lazy" width="900" height="675"></div>' +
        "</div></section>" +
        '<section class="section section--blush"><div class="container split" style="align-items:start">' +
          '<div class="reveal text-left"><span class="eyebrow">The process</span><h2>What to Expect</h2><ol class="steps">' + s.steps.map(function (x) { return "<li><span>" + esc(x) + "</span></li>"; }).join("") + "</ol></div>" +
          '<div class="reveal text-left"><span class="eyebrow">Why you\'ll love it</span><h2>Benefits</h2><ul class="check-list">' + li(s.benefits) + "</ul>" +
            '<h3 class="mt-4">Who Is It For?</h3><div class="grid" style="gap:.8rem">' + s.whoFor.map(function (x) { return '<div class="who-card">' + esc(x) + "</div>"; }).join("") + "</div></div>" +
        "</div></section>" +
        '<section class="section"><div class="container" style="max-width:860px">' +
          '<div class="section-head reveal"><span class="eyebrow">Pricing</span><h2>' + esc(s.name) + " Prices</h2><p>Transparent pricing with no hidden charges.</p></div>" +
          '<div class="reveal"><table class="price-table"><thead><tr><th scope="col">Service</th><th scope="col" class="dur-col">Duration</th><th scope="col">Price</th></tr></thead><tbody>' +
            s.prices.map(function (p, i) { return "<tr><td>" + esc(p[0]) + (i === 0 ? '<span class="popular">Popular</span>' : "") + '</td><td class="dur dur-col">' + esc(p[1]) + "</td><td>" + rupee(p[2]) + "</td></tr>"; }).join("") +
          "</tbody></table>" +
          '<p class="muted center mt-4" style="font-size:.88rem">Prices may vary slightly based on hair length, skin condition or specific requirements.</p></div>' +
        "</div></section>" +
        '<section class="section section--blush"><div class="container">' +
          '<div class="section-head reveal"><span class="eyebrow">Results</span><h2>Before &amp; After</h2><p>Drag the slider to compare. Illustrative images — real client results are shared on our Instagram with consent.</p></div>' +
          '<div class="grid grid-2 reveal" style="max-width:760px;margin:0 auto">' +
            '<div class="ba"><img src="' + img(s.image, 600) + '&h=750" alt="' + esc(s.name) + ' result" loading="lazy" width="600" height="750"><img class="ba-before" src="' + img(s.image, 600) + '&h=750" alt="" aria-hidden="true" loading="lazy"><span class="lbl b">Before</span><span class="lbl a">After</span><span class="ba-line"></span><input type="range" min="0" max="100" value="50" aria-label="Compare before and after"></div>' +
            '<div class="who-card" style="align-self:center"><h3>Book a consultation</h3><p class="muted">Not sure what you need? Our experts will assess your hair or skin and recommend the right treatment — free of charge with any service.</p><a class="btn btn--wa" href="' + wa(waMsg) + '" target="_blank" rel="noopener">' + WA_ICON + "Chat on WhatsApp</a></div>" +
          "</div>" +
        "</div></section>" +
        '<section class="section"><div class="container">' +
          '<div class="section-head reveal"><span class="eyebrow">FAQs</span><h2>Frequently Asked Questions</h2></div>' +
          '<div class="faq-list reveal">' + s.faqs.map(function (f, i) { return '<details class="faq"' + (i === 0 ? " open" : "") + "><summary>" + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>"; }).join("") + "</div>" +
        "</div></section>" +
        '<section class="section section--blush"><div class="container">' +
          '<div class="section-head reveal"><span class="eyebrow">You may also like</span><h2>Related Services</h2></div>' +
          '<div class="grid grid-3">' + s.related.map(svc).filter(Boolean).map(function (r) { return serviceCard(r, "full"); }).join("") + "</div>" +
        "</div></section>" +
        '<section class="section"><div class="container"><div class="cta-band reveal">' +
          '<h2>Book This Service Today</h2><p>Reserve your slot in a minute — online, on WhatsApp or by phone. We\'ll confirm your appointment quickly.</p>' +
          '<div class="btn-row"><a class="btn btn--light" href="' + bookHref + '"><i data-lucide="calendar-heart"></i>Book Online</a><a class="btn btn--wa" href="' + wa(waMsg) + '" target="_blank" rel="noopener">' + WA_ICON + 'WhatsApp</a><a class="btn btn--outline-light" href="' + tel() + '"><i data-lucide="phone"></i>Call Now</a></div>' +
        "</div></div></section>";
    }
  }

  /* ---------- Forms ---------- */
  var RULES = {
    phone: { re: /^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/, msg: "Please enter a valid 10-digit mobile number." },
    email: { re: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, msg: "Please enter a valid email address." }
  };
  function validate(form) {
    var ok = true, first;
    $$("[required]", form).forEach(function (f) {
      var wrap = f.closest(".field"), err = wrap && $(".error", wrap), v = f.value.trim(), msg = "";
      if (!v) msg = "This field is required.";
      else if (RULES[f.type === "tel" ? "phone" : f.type] && !RULES[f.type === "tel" ? "phone" : f.type].re.test(v)) msg = RULES[f.type === "tel" ? "phone" : f.type].msg;
      else if (f.type === "date" && new Date(v + "T23:59") < new Date()) msg = "Please choose today or a future date.";
      if (wrap) wrap.classList.toggle("has-error", !!msg);
      if (err) err.textContent = msg;
      f.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg) { ok = false; first = first || f; }
    });
    if (first) first.focus();
    return ok;
  }
  function val(form, name) { var f = form.elements[name]; return f ? f.value.trim() : ""; }
  $$("input[type=date]").forEach(function (d) { d.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10); });

  $$("form[data-form]").forEach(function (form) {
    form.setAttribute("novalidate", "");
    form.addEventListener("input", function (e) {
      var wrap = e.target.closest(".field.has-error");
      if (wrap) { wrap.classList.remove("has-error"); var er = $(".error", wrap); if (er) er.textContent = ""; }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate(form)) return;
      var type = form.getAttribute("data-form"), msg;
      if (type === "booking") {
        msg = "Hi " + S.name + ", I'd like to book an appointment.\n\nName: " + val(form, "name") + "\nPhone: " + val(form, "phone") + "\nEmail: " + val(form, "email") + "\nService: " + val(form, "service") + "\nDate: " + val(form, "date") + "\nTime: " + val(form, "time") + (val(form, "notes") ? "\nNotes: " + val(form, "notes") : "");
      } else if (type === "contact") {
        msg = "Hi " + S.name + ", I have an enquiry.\n\nName: " + val(form, "name") + "\nPhone: " + val(form, "phone") + "\nEmail: " + val(form, "email") + "\nInterested in: " + val(form, "service") + "\nMessage: " + val(form, "message");
      } else if (type === "quick") {
        msg = "Hi, I'd like to book " + val(form, "service") + " at " + S.name + (val(form, "date") ? " on " + val(form, "date") : "") + ". Please confirm availability.";
        window.open(wa(msg), "_blank", "noopener");
        return;
      } else if (type === "subscribe") {
        msg = "Hi " + S.name + ", please add me to your exclusive offers list. My email: " + val(form, "email");
      }
      var success = $(form.getAttribute("data-success"));
      if (success) {
        $$("[data-wa-send]", success).forEach(function (a) { a.href = wa(msg); a.target = "_blank"; a.rel = "noopener"; });
        $$("[data-mail-send]", success).forEach(function (a) { a.href = "mailto:" + S.email + "?subject=" + encodeURIComponent(type === "booking" ? "Appointment request" : "Website enquiry") + "&body=" + encodeURIComponent(msg); });
        form.style.display = "none";
        success.classList.add("show");
        success.setAttribute("tabindex", "-1"); success.focus();
      }
    });
  });

  /* ---------- Countdown (offers end on the last day of this month) ---------- */
  var cds = $$("[data-countdown]");
  if (cds.length) {
    var now0 = new Date(), end = new Date(now0.getFullYear(), now0.getMonth() + 1, 0, 23, 59, 59);
    var tick = function () {
      var d = Math.max(0, end - new Date()), p = [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
      cds.forEach(function (c) { c.innerHTML = ["Days", "Hrs", "Min", "Sec"].map(function (l, i) { return "<div><b>" + String(p[i]).padStart(2, "0") + "</b><small>" + l + "</small></div>"; }).join(""); });
    };
    tick(); setInterval(tick, 1000);
    $$("[data-offer-end]").forEach(function (el) { el.textContent = end.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }); });
  }

  /* ---------- Header behaviour ---------- */
  var header = $("#siteHeader");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-solid", window.scrollY > 30); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    var toggle = $(".nav-toggle", header);
    var setOpen = function (open) {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", function () { setOpen(!header.classList.contains("is-open")); });
    $$("#mobileMenu a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && header.classList.contains("is-open")) { setOpen(false); toggle.focus(); } });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1180) setOpen(false); });
  }

  /* ---------- Mobile carousel dots ---------- */
  $$("[data-dots]").forEach(function (dots) {
    var track = $(dots.getAttribute("data-dots")); if (!track) return;
    var cards = track.children;
    dots.innerHTML = Array.prototype.map.call(cards, function (_, i) { return '<button type="button" aria-label="Show review ' + (i + 1) + '"' + (i === 0 ? ' class="active"' : "") + "></button>"; }).join("");
    var btns = $$("button", dots), idx = 0, timer;
    function go(i) { idx = (i + cards.length) % cards.length; track.scrollTo({ left: cards[idx].offsetLeft - track.offsetLeft - (track.clientWidth - cards[idx].clientWidth) / 2, behavior: "smooth" }); }
    btns.forEach(function (b, i) { b.addEventListener("click", function () { go(i); restart(); }); });
    track.addEventListener("scroll", function () {
      var c = track.scrollLeft + track.clientWidth / 2, best = 0;
      Array.prototype.forEach.call(cards, function (card, i) { if (Math.abs(card.offsetLeft - track.offsetLeft + card.clientWidth / 2 - c) < Math.abs(cards[best].offsetLeft - track.offsetLeft + cards[best].clientWidth / 2 - c)) best = i; });
      idx = best; btns.forEach(function (b, i) { b.classList.toggle("active", i === best); });
    }, { passive: true });
    function restart() { clearInterval(timer); if (window.innerWidth < 768 && !matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(function () { go(idx + 1); }, 5000); }
    track.addEventListener("touchstart", function () { clearInterval(timer); }, { passive: true });
    restart();
  });

  /* ---------- Image fallback (never show a broken image) ---------- */
  var FALLBACK = img("photo-1560066984-138dadb4c035", 800);
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t.tagName === "IMG" && !t.dataset.fallback) { t.dataset.fallback = "1"; t.src = FALLBACK; }
  }, true);

  /* ---------- Before/after: one gentle "peek" so visitors know they can drag ---------- */
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function peek(ba) {
    var range = $("input[type=range]", ba), t0 = null;
    if (!range || reduceMotion) return;
    function set(v) { range.value = v; $(".ba-before", ba).style.clipPath = "inset(0 " + (100 - v) + "% 0 0)"; $(".ba-line", ba).style.left = v + "%"; }
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / 1800);
      set(50 + Math.sin(p * Math.PI * 2) * 22);   // 50 → 72 → 28 → 50
      if (p < 1) requestAnimationFrame(step); else set(50);
    }
    setTimeout(function () { requestAnimationFrame(step); }, 350);
  }

  /* ---------- Scroll reveal (sections + photo unveil) ---------- */
  var animated = ".reveal, .img-anim, .g-item, .insta-grid a, .ba";
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        if (en.target.classList.contains("ba")) peek(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    $$(animated).forEach(function (el) { io.observe(el); });
    /* stagger photos that appear together */
    $$(".insta-grid, .masonry").forEach(function (g) { Array.prototype.forEach.call(g.children, function (c, i) { c.style.setProperty("--d", (i % 6) * 70 + "ms"); }); });
  } else { $$(animated).forEach(function (el) { el.classList.add("in"); }); }

  /* ---------- Icons ---------- */
  if (window.lucide) window.lucide.createIcons();
})();
