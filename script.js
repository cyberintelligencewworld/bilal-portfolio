const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">bugbountyexperience</span> ,<span class="code">contact</span>',
  about:
    "Cyber Security practitioner capable of strategizing, architecting, building and maturing cyber security initiatives. Passionate about analyzing cyber security risks and translating them to actionable countermeasures. 2+ years of working experience in Cyber Security domain.",
  skills:
    "Ethical Hacking | Penetration Testing| Threat Hunting & Intelligence Analyst | Red Teaming",
  education:
    "BSCE -  BSc.Computer Engineering",
  experience:'<span class="code">Total experience: As a Cyber Threat Intelligence Analyst for 2 Years At Resecurity </span><br> Security Researcher | Bug Hunter on the Various Platforms - Present',
  //<br> #1 Rank Researcher on the Hackenproof|Web3 Bug Bounty Platform<br> Top 15th Researcher on the Bugbounter <br> Top 43rd  Researcher on the Securebug <br> One of the Top 600 Researcher on the Intigriti <br> One of the Top 2100 Researcher on the Bugcrowd <br> Top 24th Researcher on Securebug
  certifications: 
    "CEH Master <br> eJPT <br> CAP(SecOps Group) <br> McAfee C|OSINT <br> CSIL-CDWI <br> CSIL-COA <br> CSIL-CI <br>",
  bugbountyexperience: '<span class="code">Bounties</span><br> clicktime(50$) <br> clicktime(100$) <br> niceHash(0.01BTC)<br><span class="code">Swags</span><br> DevsInc(Shirt, Cup, Bottle, Keyring) <span class="code"> <br> Hall of Fame</span><br> NameJet <br> Legalzoom <br> <span class="code">Social(Without HoF/Bounties)</span><br> Eduko Spikotech(eduko.spikotech.com) <br> Berkeley(berkeley.edu) <br> ElfNovel(https://play.google.com/store/apps/details?id=com.cmind.elfnovel&hl=en&gl=US) <br>',
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/bilal-younis/' class='success link'>Linkedin</a>, <a href='mailto:bilalyounis123@proton.me' class='success link'>Email</a>,"
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
