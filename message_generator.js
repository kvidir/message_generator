const messages = [
  {
    subject: "You",
    actions: ["are limitless", "are growing every day", "will overcome this", "have the power to thrive"]
  },
  {
    subject: "Your potential",
    actions: ["is guiding you", "is unstoppable", "will carry you", "is growing"]
  },
  {
    subject: "The universe",
    actions: ["is supporting you", "is aligning in your favor", "has your back"]
  },
  {
    subject: "Your inner strength",
    actions: ["is shining", "will lead you", "is preparing you"]
  },
  {
    subject: "Every challenge you face",
    actions: ["is shaping you", "makes you stronger", "has a purpose"]
  }
];

const results = [
  "Keep moving forward.",
  "Believe in yourself.",
  "You've got this!",
  "Your journey is just beginning.",
  "Success is within reach."
];

function generateMessage(name = "You") {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  const action = msg.actions[Math.floor(Math.random() * msg.actions.length)];
  const result = results[Math.floor(Math.random() * results.length)];
  const subject = msg.subject === "You" ? name : msg.subject;

  return `${subject} ${action}. ${result}`;
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value.trim();
  const name = nameInput !== "" ? nameInput : "You";
  const message = generateMessage(name);
  document.getElementById("message").innerText = message;
});
