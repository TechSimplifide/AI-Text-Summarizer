document.querySelector("button").addEventListener("click", () => {
  const inpText = document.querySelector(".Inp-fild").value;
  const outputText = document.querySelector(".summary-result");

  async function summarizeText() {
    try {
      const response = await fetch("http://localhost:3000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inpText }),
      });

      const data = await response.json();

      if (data.error) {
        outputText.innerText = `Error: ${data.error}`;
      } else {
        outputText.innerText = data.summary;
      }
    } catch (err) {
      outputText.innerText = "Something went wrong!";
      console.error(err);
    }
  }

  summarizeText();

});
