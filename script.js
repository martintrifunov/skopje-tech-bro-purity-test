const questions = [
  "Went to FINKI?",
  "Got a job/internship in tech while still studying at FINKI?",
  "Still working that job and haven't graduated from FINKI?",
  "Still working that job for 3+ years and haven't graduated from FINKI?",
  "Haven't graduated from FINKI?",
  "Attended a Base42 event and posted about it on Linkedin?",
  "Used Discord?",
  "Attended a BeerJS event?",
  "Spoke at a BeerJS event?",
  "Asked a stupid question at a BeerJS event?",
  "Got merch by asking a question at a BeerJS event?",
  "Read Clean Code?",
  "Bought a standing desk to appear more productive?",
  "Unironically wear tech company merch?",
  "Ironically wear tech company merch?",
  "Wrote a blog post about the tech conference you spoke at?",
  "Wrote a blog post about the new weekly JS framework/runtime/library that dropped?",
  "Wrote a blog post about the future of AI?",
  "Applied to 5+ internships and got rejected by all of them?",
  "Complained about it on Discord?",
  'Started going to "kafanas"?',
  'Started eating "chorba"?',
  "Installed Vim?",
  "Installed the Vim extension in VsCode?",
  "Installed Linux on your laptop just to seem more technical?",
  "Started using Notion for your personal to-do lists and journal?",
  "Switched to Obsidian after trying Notion for a few days?",
  "Forgot about both of them after a week?",
  "Go to a bouldering gym?",
  "Go to a bouldering gym and only talk to other tech people?",
  "Done over 100 Leetcode problems but say Leetcode says nothing about your ability?",
  "Invested in cryptocurrency and gave investment advice to friends?",
  "Went to an academy for coding?",
  "Dropped out after a semester?",
  'Crushed on a "koleshka" or "kolega" from FINKI/academy?',
  'Crushed on a "koleshka" or "kolega" from work?',
  "Flirted with someone in a GitHub Commit/PR message?",
  "Went to a tech meetup hoping to make new friends?",
  "Didn't make any?",
  "Bought a mechanical keyboard?",
  "Built a custom mechanical keyboard?",
  "Showed your colleagues your mechanical keyboard?",
  "Challenged your colleagues to TypeRacer/Monkeytype?",
  "Annoyed your colleagues with your mechanical keyboard?",
  "Sent a risky DM on Slack, Teams, Discord, Zoom (work-related messaging app)?",
  "Watch tech content creators?",
  "Why?",
  'Called yourself a "Software Engineer" to impress a date?',
  'Called yourself a "Software Engineer" to impress your parents?',
  "Are your parents disappointed in you?",
  "Are you a web developer?",
  "Fuck React?",
  "Fuck JavaScript?",
  "Want to try out Laravel/PHP, but are afraid people will make fun of you?",
  "Coded a ToDo app with the hot new JS framework that just dropped?",
  "Built something just to impress someone you're interested in?",
  'Unironically used the phrase "aj kafana" in a serious conversation?',
  "Pitched a startup?",
  "Friend/Family member pitched a startup idea to you?",
  "Did they ask you to code it yourself?",
  "With no budget?",
  "And it'll be easy?",
  "Was it a Tinder/Uber clone?",
  'Tried to be a "thought leader" in tech but never got more than 10 likes on Linkedin?',
  "Interned at Netcetera or MCA?",
  'Lived with "Finkashi" and had tension over dishes?',
  'Part of a failed startup and blamed it on "market conditions" and "20 godini sme nazad brat"?',
  "Read Atomic Habits but have less than Atomic Habits?",
  "Have a FINKI related github repo?",
  "Went to Netaville",
  "Flirted with someone at Netaville",
  "Lied that you were still a student to get the discount at Netaville?",
  "Claimed you graduated FINKI on your Linkedin when you still haven't?",
  "Posted your FINKI graduation pic on Facebook/Instagram but still haven't graduated?",
  "Tried bragging about your MCA/Netcetera internship to impress someone at a party?",
  'Wrote a Linkedin article about your "misli za momentalniot pazar" and it got 10 likes?',
  'Named your startup something with "tech" or "labs" to sound innovative?',
  'Use "AI" or "machine learning" in your vocabulary daily, but you don\'t know what GPT stands for?',
  "Created a CRM to track something?",
  "Had an Overwatch/League of Legends/Valorant/HOI4/Counter-Strike/Dota phase?",
  "Had a 2 week Minecraft phase?",
  'Claimed to be a "majstor" in a technology you barely understand?',
  "Hated a professor?",
  "They never replied to your email?",
  "Made a pros and cons spreadsheet for dropping out?",
  "Rejected from 10+ companies even though you have 1 year of experience in Java?",
  "Hating on tech for being evil but literally working in tech?",
  'Mentioned your "pochetna plata" on a first date to impress them?',
  "Got a Sportmaster/Fitkit and barely used it?",
  "Own the same 3 shirts and 2 pairs of jeans?",
  "Wear dad shoes? (Newbounds)",
  "Love to give feedback on other people's products but can't take feedback on your own?",
  'Have said "I love the work ethic because you can go whenever you want or whenever your work is done" but you leave the office at 8pm?',
  "Glorified sleeping on the floor for a company that didn't give a shit whether you lived or died?",
  'Called yourself a "digital nomad" but just work remotely from your parents\' basement?',
  "Bought a $250+ ergonomic chair but still have terrible posture?",
  "Have a Macbook?",
  "Are you a regular/VIP or higher in the FINKI discord?",
  "Unemployed?",
  "No bitches?",
];

function createQuestions() {
  const form = document.getElementById("purityTest");
  questions.forEach((question, index) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "q" + (index + 1);
    checkbox.value = "yes";
    label.appendChild(document.createTextNode(`${index + 1}. `));
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + question));
    form.appendChild(label);
  });
}

function calculateScore() {
  const form = document.getElementById("purityTest");
  const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
  const score = 100 - checkboxes.length;

  // Hide the questions page
  document.getElementById("questionsPage").style.display = "none";

  // Show the results page
  const resultsPage = document.getElementById("resultsPage");
  resultsPage.style.display = "block";

  // Display the score
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.textContent = score;
}

createQuestions();
