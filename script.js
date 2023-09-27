// mapping
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const valueShow = document.getElementById("show-value");
const image = document.getElementById("image");

// currency  values
const US = 16;
const JP = 20;
const LI = 30;

const convert = () => {
  //mapping .2
  const inputValue = document.getElementById("input").value;
  const select = document.getElementById("select");
  const selectedValue = select.options[select.selectedIndex].value;

  // doesn't allow converting without putting a value in the input

  if (inputValue === "") {
    alert("type a number!");
  }

  // convert
  if (selectedValue === "US") {
    valueShow.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(US * parseInt(inputValue));
  } else if (selectedValue === "JP") {
    valueShow.innerHTML = new Intl.NumberFormat("jp-JP", {
      style: "currency",
      currency: "JPY",
    }).format(JP * parseInt(inputValue));
  } else {
    valueShow.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(LI * parseInt(inputValue));
  }
};
