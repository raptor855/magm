function updatePrice() {
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let a = document.getElementById("number");
  let prodTypes = ["1000", "1100", "1500", "2000", "2000000"];
  let prodOptions = ["1000", "2000", "5000"];
  let prodProperties = ["1999", "2999"];
  let amount = a;
  let price = 0;
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
      price = prodTypes[priceIndex];
  }

  if (amount.value < 1) {
      amount.value = 1;
  }

// �������� ��� ���������� �����������.
  let radioDiv = document.getElementById("radios");
  if (select.value === "1" || select.value === "3") {
      radioDiv.style.display = "none";
  } else {
      radioDiv.style.display = "block";
  }

// ������� ����� �������� ����� �������.
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
      if (radio.checked) {
          let radioIndex = parseInt(radio.value) - 1;
          let optionPrice = prodOptions[radioIndex];
          if (optionPrice !== undefined) {
              if (select.value === "1" || select.value === "3") {
                  optionPrice = 0;
              }
              price = price * 1 + 1 * optionPrice;
          }
      }
  });

// �������� ��� ���������� ��������.
  let checkDiv = document.getElementById("checkboxes");
  if (select.value === "1" || select.value === "2") {
      checkDiv.style.display = "none";
  } else {
      checkDiv.style.display = "block";
  }

// ������� ����� �������� �������� �������.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
          let checkboxIndex = parseInt(checkbox.name) - 1;
          let propPrice = (prodProperties[checkboxIndex]);
          if (propPrice !== undefined) {
              if (select.value === "1" || select.value === "2") {
                  propPrice = 0;
              }
              price = price * 1 + propPrice * 1;
          }
      }
  });

  let prodPrice = document.getElementById("prodPrice");
  prodPrice.innerHTML = amount.value * price + "$";
}

window.addEventListener("DOMContentLoaded", function () {
// �������� �����������.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";

// ������� select �� ����� � DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
// ��������� ���������� �� ��������� select.
  select.addEventListener("change", function (event) {
      event = event.target;
      updatePrice();
  });

// ������� amount �� ����� � DOM.
  let a = document.getElementById("number");
  let amount = a;
// ��������� ���������� �� ��������� amount.
  amount.addEventListener("change", function (event) {
      event = event.target;
      updatePrice();
  });

// ��������� ���������� �����������.
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
      radio.addEventListener("change", function (event) {
          event = event.target;
          updatePrice();
      });
  });

// ��������� ���������� �����������.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function (event) {
          event = event.target;
          updatePrice();
      });
  });

  updatePrice();
});
