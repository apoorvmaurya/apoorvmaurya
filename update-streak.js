const fs = require('fs');
const fetch = require('node-fetch');

const username = 'apoorvmaurya';
const readmeFilePath = 'README.md';

(async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const streak = data.streak;

    const readmeContent = fs.readFileSync(readmeFilePath, 'utf-8');
    const updatedReadmeContent = readmeContent.replace(
      /<!--START_STREAK_SECTION-->.*<!--END_STREAK_SECTION-->/s,
      `<!--START_STREAK_SECTION-->
🔥 Current Streak: ${streak} 🔥
<!--END_STREAK_SECTION-->`
    );

    fs.writeFileSync(readmeFilePath, updatedReadmeContent);
    console.log('Streak updated successfully!');
  } catch (error) {
    console.error('Error updating streak:', error);
  }
})();
