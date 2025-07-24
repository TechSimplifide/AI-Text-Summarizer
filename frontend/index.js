document.querySelector("button").addEventListener("click", () => {
  const inpText = document.querySelector(".Input-field").value;
  const outputText = document.querySelector(".summary-result");

  async function summarizeText() {
    try {
      const response = await fetch("https://ai-text-summarizer-backend-w8in.onrender.com/summarize", {
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
