let form = document.querySelector("#formularz");

for (let i = 1; i <= 100; i++) {
  form.innerHTML +=
    '<input id=el" + i + " name="element" placeholder="Element numer ' +
    i +
    '">';
}
