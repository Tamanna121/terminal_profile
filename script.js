const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Hello I'm Nitish Agrawal, a cybersecurity researcher with nearly 4 years of experience in the field.  I am complete my Bachelor's degree in (Computer and Information Science and support services) and also done CEH exam. I also complete my Master's degree in (Cyber/Computer forensics and counterterrism).I would like to be a part of an organisations where I can acquire new Knowledge and sharpen my skills and put mu efforts on achieving organisation as well as individual goals.    ",
  skills:
    "Ethical Hacking | Penetration Testing | Red Teaming | Offensive Testing | programming",
  education:
    "Bachelors of Computer Applications. <br>Master's degree of cyber forensics and counterrorism",
  experience:'Cyber Security consultant (V-Mart)<br> Cyber Soldier (CyberFrat) <br> moderator(Cyber Octet Pvt. Ltd) <br> Cyber Crop(Cyber Peace Foundation) <br> Gurugram Police Internship <br> Volunteer(Besides Banglore,Delhi) <br>Cyber Security Lab Coordinate & Trainer(CyberFrat)<br> Cyber Volunteer (Uttar Pradesh Police) ',
  certifications: 
    " CEH - Certified Ethical Hacker Practical<br> Certified Security Awareness (mile2) <br> Certified AppSec Partitioner (The SecOps Group)",
  contact:
    "You can contact me on Linkedin and or via the mail (click on it):<br><a href='https://www.linkedin.com/in/nitish-agrawal-3a4291178/' class='success link'>Linkedin</a>, <a href='mailto:nitishage@gmail.com' class='success link'>Email</a>,"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
