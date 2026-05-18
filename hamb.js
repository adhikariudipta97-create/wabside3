  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  // OPEN MENU
  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
  });

  // CLOSE MENU
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  function closeMenu(){
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }