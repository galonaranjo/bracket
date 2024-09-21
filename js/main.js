document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".team");

  // Load saved values from local storage
  inputs.forEach((input, index) => {
    const savedValue = localStorage.getItem(`team_${index}`);
    if (savedValue) {
      input.value = savedValue;
    }
  });

  // Save input values to local storage on change
  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      localStorage.setItem(`team_${index}`, this.value);
    });
  });
});
