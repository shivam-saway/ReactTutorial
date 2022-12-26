# ReactTutorial
React Tutorial
Question: What is Emmet ?
Answer: Emmet is tool for programmers which converts the abbrevations into full code. it is used to increase productivity of the programmer. Emmet is commonly used with HTML, XML and CSS but it's use is not limited to these languages only. it can be used with other programming languages too. 
Steps to configure the Emmet in your VSCode
1. Open settings
2. Configure Emmet abbrevations as follows
a. "javascript": "javascriptreact", // for .jsx files
b."typescript": "typescriptreact"   // for .tsx files
Likewise we setup emmet for other files too.
Question: What is diffrent between React and ReactDOM ?
Answer: React Library is responsible for creating views and on the other hand ReactDOM renders the view created by React Library. React is a special library that is designed to update the DOM for us. In React we don't update the DOM directly instead react updates it for us on the basis of our commands.
The smallest entity in react is the react element. it is basically a javascript object that describes DOM element in memory. we can create a react element using React's createElement method. 
ReactDOM on the other hand serves as a middle man to convert the javascript object to DOM Nodes, created by createElement method of React Library.
