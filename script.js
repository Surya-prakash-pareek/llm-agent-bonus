const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjIyZjIwMDE2MTNAZHMuc3R1ZHkuaWl0bS5hYy5pbiJ9.gqBdFaSwHv5EmOjW19_NoQh-JbfwuBTCOhc6UbTfvaw";  // 🔑 aipipe.org token

async function sendMessage() {
  const inputField = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  // Add user message
  appendMessage(userMessage, "user-message");
  inputField.value = "";

  // Placeholder for bot message
  const botMsgEl = appendMessage("...", "bot-message");

  try {
    const response = await fetch("https://aipipe.org/openrouter/v1/chat/completions", {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${API_TOKEN}`, 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        model: "openai/gpt-4.1-nano",   // ✅ you can also try: gpt-4.1-mini / gpt-4.1-nano
        messages: [{ role: "user", content: userMessage }]
      })
    });

    const data = await response.json();
    console.log("RAW RESPONSE:", data); // 👀 debug

    // ✅ Correct parsing for OpenRouter response
    const botText = data?.choices?.[0]?.message?.content?.trim() || 
                    data?.choices?.[0]?.delta?.content?.trim() || 
                    "⚠️ No response received";

    // Animate text typing
    typeText(botMsgEl, botText);

  } catch (error) {
    botMsgEl.textContent = "❌ Error: " + error.message;
  }
}

// Helper to append message bubble
function appendMessage(text, className) {
  const chatBox = document.getElementById("chatBox");
  const msgEl = document.createElement("div");
  msgEl.className = "message " + className;
  msgEl.textContent = text;
  chatBox.appendChild(msgEl);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msgEl;
}

// Typing animation effect
function typeText(element, text, speed = 10) {
  element.textContent = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

