Error State Management, AddUser.js

Creating a nice component tree (div) for semantic purpose (/components/Helpers/) or use use React.Fragment or Fragment if use import it individually inside the curly braces

React.Portal is used on ErrorModal.js to make the modal isn't rendered inside an element but side by side for semantical and the correct purpose since a modal should cover the entire screen thus any obstruction is unnecessary
check for index.html in public for actual use (above the root id)

useRef is used instead of useState to track user input, instead tracking all the value the user inputted, it only store the submitted object