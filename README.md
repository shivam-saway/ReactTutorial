# ReactTutorial
React Tutorial
## Question: What is Emmet ?
##### Answer: 
Emmet is tool for programmers which converts the abbrevations into full code. it is used to increase productivity of the programmer. Emmet is commonly used with HTML, XML and CSS but it's use is not limited to these languages only. it can be used with other programming languages too. 
Steps to configure the Emmet in your VSCode
1. Open settings
2. Configure Emmet abbrevations as follows
a. "javascript": "javascriptreact", // for .jsx files
b."typescript": "typescriptreact"   // for .tsx files
Likewise we setup emmet for other files too.
## Question: What is diffrent between React and ReactDOM ?
##### Answer: 
React Library is responsible for creating views and on the other hand ReactDOM renders the view created by React Library. React is a special library that is designed to update the DOM for us. In React we don't update the DOM directly instead react updates it for us on the basis of our commands.
The smallest entity in react is the react element. it is basically a javascript object that describes DOM element in memory. we can create a react element using React's createElement method. 
ReactDOM on the other hand serves as a middle man to convert the javascript object to DOM Nodes, created by createElement method of React Library.
## Question: Why React is known as React ?
##### Answer:
React is known as React because of its behaviour. It is designed to act or change the user interface on the basis of user's action.
## Question: What is crossorigin in script tag ?
##### Answer:
crossorigin is the keyword used as attribute in the script tags, to set the CORS policy to be used while sharing data over diffrent domain names or servers. As per MDN Docs it can have two values "anonymous" or "use-credentials". it can be set to empty string also which is same as setting crossorigin to anonymous. when the crossorigin is set to "anonymous" the network requests from diffrent domain names uses CORS headers and credential flag is set to the "same-origin". There is no exchange of user credentials via cookies, client side SSL certificate or HTTP Authentication, unless destination is the same origin.
When the crossorigin is set to "use-credentials", the network request uses CORS Headers and credential flag is set to "include" and user credentials are always included.
MDN Docs link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin 
## Question: What is async and defer attribute in script tag ?
##### Answer: 
##### Async
when the script tag has async attribute. the scripts are fetched asynchronously in parallel with HTML Parsing. However, the script loading starts immediately after the scripts have fetched successfully from the network. HTML parsing may get halted, if not completed.
##### Defer:
when the script tag has defer attribute. the scripts are fetched asynchronously in parallel with HTML Parsing. However, the script loading starts immediately after the HTML parsing completes and scripts have fetched successfully from the network. HTML parsing never get halted once started in this process.
## Question: What is bundler ? 
##### Answer: Todo - example parcel, webpack etc.
create react app uses webpack. 
## Question: What is npm ? What is the uses of npm ?
## Question: What is package.json file. What is its purpose ?
## Question: What is package-lock.json file. What is its purpose ?
##### Answer :
This is important file. it locks the versions of libraries for production use.
Never put this file in gitignore file.
