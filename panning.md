Planning:
Pre-work from Weds:
Step One:
Setting up folders and files
Step Two:
Moving over all html and jsx into appropriate files/folders
Breaking down the components into: header, main, footer > subfolders within these for different components
Step Three:
Using the main to encompass the new founders page
Linking founders page on main (home page)
Step Four:
Creating state - features to toggle between main and founders page

Hackathon
Overview of problem - Creating a new review component on home page to allow users to select reviews based on their locality (England, Wales, Scotland)
Creating the 3 buttons to represent the countries
Change the state of the button when clicked (Adding a colour to button when active)
When clicked, show colour change on selected country; show review from selected country; show reviewer name and location... e.g. Scotland clicked > Scotland orange, Scotland review, Joe Blogs - Glasgow
Creating review introductory statement to let users know what the buttons will do
Making buttons interactive so when users click on them, the appropriate country’s review appears below
Create a function for the buttons that returns some value for each (test button with console.log() )
Storing values -
Create a useState to store the value from our click event
Create a fetch request to collect the review from chosen country
Filter the result with the storing value
Display the result on the page
Build an extra element
