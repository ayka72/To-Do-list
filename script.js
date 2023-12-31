function addTask(day) {
  const inputSelector = `.input_in_${day}`;
  const taskSelector = `#${day}-task`;

  const inputElement = document.querySelector(inputSelector);
  
  if (inputElement) {
    const val = inputElement.value;

    if (val === "") {
      alert("Try write sth");
    } else {
      const task = document.querySelector(taskSelector);
      const li = document.createElement("li");
      li.innerHTML = val;
      task.appendChild(li);
    }

    inputElement.value = "";
  } else {
    console.error(`Element with selector ${inputSelector} not found.`);
  }
}