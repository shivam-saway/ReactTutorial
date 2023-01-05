# ReactTutorial
React Tutorial
## Question: What is Emmet ?
##### Answer: 
Emmet is tool for programmers which converts the abbrevations into full code. it is used to increase productivity of the programmer. Emmet is commonly used with HTML, XML and CSS but it's use is not limited to these languages only. it can be used with other programming languages too. 
Steps to configure the Emmet in your VSCode
1. Open settings
2. Configure Emmet abbrevations as follows
   1. "javascript": "javascriptreact", // for .jsx files
   2. "typescript": "typescriptreact"   // for .tsx files
Likewise we setup emmet for other files too.
## Question: What is diffrent between React and ReactDOM ?
##### Answer: 
+ React Library is responsible for creating views and on the other hand ReactDOM renders the view created by React Library. React is a special library that is designed to update the DOM for us. In React we don't update the DOM directly instead react updates it for us on the basis of our commands.
+ The smallest entity in react is the react element. it is basically a javascript object that describes DOM element in memory. we can create a react element using React's createElement method. 
+ ReactDOM on the other hand serves as a middle man to convert the javascript object to DOM Nodes, created by createElement method of React Library.
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
+ when the script tag has async attribute. the scripts are fetched asynchronously in parallel with HTML Parsing. However, the script loading starts immediately after the scripts have fetched successfully from the network. HTML parsing may get halted, if not completed.
##### Defer:
+ when the script tag has defer attribute. the scripts are fetched asynchronously in parallel with HTML Parsing. However, the script loading starts immediately after the HTML parsing completes and scripts have fetched successfully from the network. HTML parsing never get halted once started in this process.
## Question: What is bundler ? 
##### Answer: Todo - example parcel, webpack etc.
create react app uses webpack. 
## Question: What is npm ? What is the uses of npm ?
##### Answer :
1. npm is world's largest software registry
2. the registry contains around millions of code packages.
3. npm is free to use.
4. npm can be used to share software/code packages between developers.
5. npm can be used to manage private development also.
6. npm has CLI client which is used to download and install packages from npm.
8. npm is not an abberivation. many developers refers npm as "Node package manager" but npm does not claim it. one reason for developers confusion could be, npm was first created as a package manager for Node.js.
9. all npm packages are defined in package.json file. atleast two fields must be present in defination file i.e., name and version. 
## Question: What is package.json file. What is its purpose ?
##### Answer :
1. package.json file is common file which has all information of packages required by our application, also known as dependencies.
2. this file is used by bundlers to prepare the build of our application, which is required to host the application on server, local or over network.
3. it has entry point defination of our node.js project.
4. all data stored in the package.json has a technical name i.e., metadata.
## Question: What is package-lock.json file. What is its purpose ?
##### Answer :
1. package-lock.json has same purpose as package.json file but this is used in real hosting environment instead of local or development environment.
2. This is important file. it locks the versions of libraries for production use.
3. Never put this file in gitignore file.
4. It maintains the hash of libraries to ensure the integrity in production and development.
## Question: What is parcel/webpack. why do we use them ?
##### Answer :
1. parcel and webpack are bundlers for our node project.
2. bundlers servers many purposes while development and hosting of our project.
3. Following are the features of bundlers in general. however, each bundler can have some specific features associated with it.
   - Combines multiple files into single file and make our project production ready.
4. Features of Parcel Bundler:
   - Creates a server for you.
   - Hot Reloading -Hot Module replacement. 
   - Diagnostic.
   - Caching
   - File Watching
   - Lazy dev builds
   - Tree shaking
   - Minification
   - Image Optimization
   - Compression
   - Code splitting
   - Content hashing
   - Zero Config bundler
   - Diffrential bindling
## Question: What is parcel-cache?
##### Answer: 
+ parcel-cache as name suggest it cache the build data of your node project. when parcel rebuilds your node project after detecting code change or when someone mannually rebuilds the project, parcel does not build everything from scratch again, instead it only builds the changes done. This is a kind of build optimization technique which helps in reducing the development time and overall productivity of the developer.
+ It is one of the key reasons for the fastness of the parcel bundler.
+ always add parcel-cache and dist folder to your gitignore file.
+ you can also override the location of the cache using the --cache-dir CLI Option
+ you can also disable the cache using --no-cache flag. This will only disable reading from the cache and cache folder will still be created.
## Question: What is dist folder ? What is it's purpose ?
##### Answer: 
dist folder holds the minified version of our projects files, which were created by parcel while building the project for hosting on server.
## Question: What is npx ?
##### Answer: 
+ npx is a tool through which any developer can execute any javascript package available on npm directory without even installing the package.
+ npx comes along with npm for version above 5.2.
+ to check wheather npx is installed in our machine . we write "npx -v" in cmd or terminal.
+ if it is not installed use command "npm i -g npx".
## Question: What is diffrence between dependencies and devDependencies ?
##### Answer: 

| dependencies | devDependencies |
| --- | --- |
| dependencies are the third-party javascript modules which are required by our project in production environment | devDependencies are the third-party javascript modules which are required by our project in development environment only|
| Included in final code bundle | Not Included in final code bundle |

## Question: What is tree shaking ?
##### Answer: 
+ tree shaking is also known as dead code elimination.
+ In production builds, parcel statically analyzez the each import and export of your projects, and removes everything that is not used.
+ tree shaking supports for both static and dynamic imports, commonJS and ES6 Modules and even across languages with CSS Modules.
+ parcel also concatenates modules into single scope, when possible rather than wrapping each module in a seprate function. This feature is called scope hoisting. This helps make minification more effective and also improves runtime performance by making references between modules static rather than dynamic object lookup.
## Question: What is Hot Module Replacement ?
##### Answer: 
+ As you make changes to your code, parcel automatically detects the code changes and rebuilds the app and update the UI in your browser. however, in somecases the parcels does Hot Module Replacement (HMR). In HMR, parcel updates the particular module only and maintains the state of your application.
+ CSS changes are automatically applied by HMR without reloading the page.
+ This feature is also available in some framework like react (via fast refresh) and Vue.
+ HMR works by replacing the code of hot module and re-evaluate it along with its parents. we can customize the process of HMR by using two methods i.e., hot.module.accept and hot.module.dispose.
+ both the methods accepts a callback function.
+ accept method is executed when the module or any of its dependency get updated. we can use it to restore state from old verison.
+ dispose method is executed when the module is about to replace. we can use it to save any state to restore in any new version or clean up objects and timer which will be created in new version.
