function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  document.getElementById("quote").textContent = `"${selectedQuote.quote}"`;
  document.getElementById("author").textContent = `— ${selectedQuote.author}`;
}
