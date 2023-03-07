// lear
// Calculator App

window.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector(".result");
  const numberBtns = document.querySelectorAll(".number-btn");
  const textBtns = document.querySelectorAll(".text-btn");
  const delBtn = document.querySelector(".del-btn");
  const resetBtn = document.querySelector(".reset-btn");
  const equalBtn = document.querySelector(".equal-btn");
  const mathSymbols = [".", "/", "*", "+", "-"];

  const firstTheme = document.querySelector(".first-theme");
  const secondTheme = document.querySelector(".second-theme");
  const thirdTheme = document.querySelector(".third-theme");

  firstTheme.addEventListener("click", () => {
    document.body.className = "theme-1";
    firstTheme.className = "theme first-theme";
    secondTheme.className = "theme hidden-theme second-theme";
    thirdTheme.className = "theme hidden-theme third-theme";
  });

  secondTheme.addEventListener("click", () => {
    document.body.className = "theme-2";
    firstTheme.className = "theme hidden-theme first-theme";
    secondTheme.className = "theme second-theme";
    thirdTheme.className = "theme hidden-theme third-theme";
  });

  thirdTheme.addEventListener("click", () => {
    document.body.className = "theme-3";
    firstTheme.className = "theme hidden-theme first-theme";
    secondTheme.className = "theme hidden-theme second-theme";
    thirdTheme.className = "theme third-theme";
  });

  // Adding Numbers To Result
  numberBtns.forEach((item) => {
    item.addEventListener("click", () => {
      result.value += item.innerHTML;
    });
  });

  // Adding Math To Result
  textBtns.forEach((item) => {
    item.addEventListener("click", () => {
      if (
        mathSymbols.includes(result.value[result.value.length - 1]) ||
        result.value === ""
      ) {
        return;
      }
      result.value += item.innerHTML;
    });
  });

  // Removing Last Element
  delBtn.addEventListener("click", () => {
    result.value = result.value.slice(0, -1);
  });

  // Clearing The Result
  resetBtn.addEventListener("click", () => {
    result.value = "";
  });

  // Sum Up The Result
  equalBtn.addEventListener("click", () => {
    if (
      mathSymbols.includes(result.value[result.value.length - 1]) ||
      result.value === ""
    ) {
      return alert("Invalid Input!");
    }

    result.value = eval(result.value);
  });
});
