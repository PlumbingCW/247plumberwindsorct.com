(function(){
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  function openMenu(){d.removeAttribute("hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";}
  function closeMenu(){d.setAttribute("hidden","");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";}
  if(t&&d&&o){
    t.addEventListener("click",function(){if(t.getAttribute("aria-expanded")==="true"){closeMenu();}else{openMenu();}});
    if(c){c.addEventListener("click",closeMenu);}
    o.addEventListener("click",closeMenu);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeMenu);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeMenu();}});
    window.addEventListener("resize",function(){if(window.innerWidth>768){closeMenu();}});
  }
  function setH(item,open){
    var body=item.querySelector(".acc-body"),btn=item.querySelector(".acc-head"),pl=item.querySelector(".plus");
    if(!body||!btn){return;}
    item.classList.toggle("open",open);
    btn.setAttribute("aria-expanded",open?"true":"false");
    if(pl){pl.textContent=open?"−":"+";}
    body.style.maxHeight=open?body.scrollHeight+"px":"0px";
  }
  document.querySelectorAll(".accordion").forEach(function(acc){
    acc.querySelectorAll(".acc-item").forEach(function(item){
      setH(item,item.classList.contains("open"));
      var btn=item.querySelector(".acc-head");
      if(btn){btn.addEventListener("click",function(){setH(item,!item.classList.contains("open"));});}
    });
  });
  window.addEventListener("resize",function(){
    document.querySelectorAll(".acc-item.open .acc-body").forEach(function(b){b.style.maxHeight=b.scrollHeight+"px";});
  });
})();
