# ⚛️ React Rumble Event 

Welcome to React Rumble – the ultimate coding duel where innovation meets adrenaline! Step into the arena where your React mastery will be tested in electrifying 1v1 showdowns. In Round 1, harness the power of GPT to quickly craft simple components and build a strong foundation. But when Round 2 arrives, the challenge intensifies: you must rely solely on your own skills to construct intricate components—no AI assistance allowed. Every second counts as you outpace your opponent in a battle of precision, creativity, and sheer coding speed. Gear up, let your React prowess shine, and seize your title as the champion of React Rumble! 🚀

Once you've completed your tasks, you'll be submitting your work using **GitHub**. Below are the details of the components you need to create, along with instructions on how to submit your work.

## 🛠️ Round 1

### 1. 📦 Modal Component  
Create a functional modal that:  
- ✨ Appears as an overlay with a semi-transparent background  
- 🏷️ Contains a header, body, and close button  
- 🚪 Implements open/close functionality  
- 🎨 Uses CSS for styling 

### 2. 🎨 Dark/Light Mode Toggle (⚠️Use of Tailwind CSS is **NOT** allowed)
Build a theme switcher button on a multipage website that:  
- 🔁 Persists across page navigation  
- 🌑 Toggles between dark/light modes globally  
- 🛠️ Uses **CSS** or **styled-components**   

### 3. 🔍 Dynamic Table  
Create a table component that:   
- ⚡ Import data from CSV file into the table
- 📊 Button for sorting data (default ascending)
- 🔄 Updates displayed rows without page refresh  
- 📥 Includes a search input field

### 4. 🎭 Accordion/FAQ Section
Create an interactive accordion component that:
- 📌 Expands/collapses content when clicked
- 📂 Supports multiple collapsible items
- 🔄 Allows one or multiple items open at once

### 5. 🚀 Skeleton Loading Component
Create a placeholder loading component that:
- 🎨 Displays animated skeleton loaders
- ⏳ Enhances UX while fetching API data
- ⚡ Supports different shapes (text, images, cards)

## Round 2


### 1. 🛒 Shopping Cart Component ( component 6)
 

Build a shopping cart system that:

- 🏷️ Allows adding/removing items
- 💰 Displays total price dynamically
- 🔄 Persists cart state using local storage


 ### 2. Stopwatch ⏱️  ( component 8)
- Start, pause, and reset buttons.  
- Displays elapsed time in `mm:ss` format.  
- Lap time feature.(use `fs` to write time stamps in a fill / use array and append timestamps)
- Initial tailwind. Bonus points for better styling.
  
### 3. 🌍 Country-State-City Selector  (component 9)

Implement three dependent dropdowns using:  
- 🌐 [CountryStateCity API](https://countrystatecity.in)
- 
- ⏳ Asynchronous API calls  
- ↪️ Cascade selection (Country  → City)  
- 🚧 Error handling for API failures


## 📤 Submission Guide

### 1. 🍴 Fork the Repository  
First, fork this repository to your own GitHub account by clicking the **Fork** button in the top right corner of the repo page.  

### 2. 📤 Clone Repository  
Fire up your Git Bash/Terminal and ~steal~ clone the repo:
```bash
git clone https://github.com/<YourGitHubUsername>/FunctionalComponents.git
```
### 3. 🌿 Use your roll number as branch name
Once you’ve successfully acquired the repo, create a new branch named after your Roll No. (We know you're special, so make it unique!):
```bash
git checkout -b <YourRollNumber>
```
### 4. 💾 Commit Changes
After completing the tasks, stage changes + write a commit message that’s better than "idk lol":
```bash
git add .
git commit -m "idk lol"
```
### 5. 🚀 Push Branch
Time to send your masterpiece into the wild! Push your branch to the remote repository
```bash
git push origin <YourRollNumber>
```
### 6. 🎉 Create a Pull Request (PR)
1. Go to the GitHub repo.
2. Click “Compare & Pull Request”.
3. Title: [YourRollNumber] I did the thing!
4. Hit send.

Congrats! Your assignment is now someone else’s problem (mine🙂).

## 🏆 Judging Criteria
Your components will be judged on several key aspects: functionality, code quality, user experience, and innovation. The evaluation will consider how effectively your components perform their intended tasks, the clarity and maintainability of your code, and your adherence to best practices in React development. 
Special attention will be given to the efficiency of state management and API integration, as well as robust error handling.

Good luck!
