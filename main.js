document.addEventListener("scroll", () => {
  // scroll position
  const scrollTop = window.scrollY;

  //   full size scroll heigth
  const fullScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // scroll position /  full size scroll heigth to Percentage
  const scrolled = (scrollTop / fullScrollHeight) * 100;

  // `${scrolled}%` make the in to width% Percentage
  document.getElementById("progress-bar").style.width = `${scrolled}%`;

  console.log(scrollTop);
});
