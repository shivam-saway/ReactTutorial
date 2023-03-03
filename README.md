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
## Question: List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
##### Answer: 
Five superpowers of parcel which i like are as follows
+ Code Minification
+ Hot Module Replacement (HMR)
+ File Watcher Algorithm.
+ Caching
+ Dev Server and HTTPS

I will explain each of the above one by one.

1. Code Minification: 
   - Code Minification is the process of shorting the code. While minifying any code redundant line space, long variable names, long functions/classes/objects names get replaced with their shorter version.
   - All your code in multiple files will be placed together in single file, which is hard to understand for human, even if it is still written in high level langauge.
   - Minification reduces the size of your code file, which can be shared with client at fast pace over the network.
2. Caching: 
   - parcel caches everything, it builds to disk. if you restart the dev server parcel will only rebuilds the files that have changed since the last time it ran.
   - parcel keeps track of all the files in your project, if you change anything in your project. it invalidates the cache and rebuild the changed file in your project.
3. Dev Server and HTTPS: 
   - parcel has a feature which creates a dev server for you in local machine. it starts automatically when you run default parcel command.
   - although, the parcel has a special command for it i.e., "parcel serve".
   - the default port is http://localhost:1234 
   - if default port is in use then fallback port will be use.
## Question: What is ".gitignore"? What should we add and not add into it?
##### Answer:
git ignore is file used in local git repository to diffrentiate between files which should be pushed to git or not.
we should put all files in gitignore which can be reproduced while making build for production.
## Question: What is polyfill ?
##### Answer: 
A polyfill is a peice of code (usually in javascript) used to support modern application in older versions of browsers that do not natively supports it.

For example, older version of browsers does not understand few CSS properties like __text-shadow__. So a polyfill code in javascript can be written to mimic the text-shadow effect.

Sometimes polyfills are written to avoid browser specific issues in implementation of specific features of application which works smoothly in latest browsers.

However polyfills are rarely used in todays world. Polyfills were in trends in time of IE6 and Netscape web browsers. These older version of browsers interpret javascript diffrently. So to make the application work in same manner accross diffrent browsers poyfill was the best choice among the developers in pervious decades.

## Question: What is reconciliation in react ?
##### Answer:
Reconciliation in react is the process of updating the UI whenever any state or prop(s) of any component changes.

When a state(s) or prop(s) of a component changes, render method is invoked and it prepares a virtual DOM tree. React has a diffing algorithm which compares the latest virtual DOM with the current virtual DOM and finds the nodes where update has happenned. After getting the list of nodes where update in UI is required, React updates the HTML DOM with the recent changes.

The diffing algorithm used by react is very fast and has a O(n) time complexity. The react diffing algorithm uses two assumtion which diffing two virtual DOM trees. 

 - Two element of diffrent type will produce diffrent trees.
 - The developer can hint at which child element may be stable across diffrent renders with a __key__ prop.
## Question: What is JSX ? How it is diffrent from HTML ?
##### Answer:
JSX is syntax extension to JavaScript. It looks like HTML but it is not HTML. It has full power of JavaScript.

Following are few advantages of using JSX.
 - We can embedd any JavaScript expression with JSX. For Example 
  - ```
    const name = "Shivam Saway";
    const Message = <h1>Hello {name}, Good Morning</h1>;
    ```
 - JSX is an expression too. Like we can embedd JavaScript with JSX, similarly we can do the reverse as well. We can embedd JSX with JavaScript. For example
  - ```
     function getUserNameWithMessage(user){
      if(user){
         return <h1> hello {user.name} </h1>;
      } else {
         return <h2> Please provide valid user </h2>;
      }
     }
    ```
 - We can use quotes and curly braces to specify attributes to JSX tags. We should not use both quotes and curly braces together while specifying attribute on JSX tags. quotes should be used with strings and braces should be used with JavaScript expression.
 - JSX tags can have childrens as well. We use circle bracket to unite children JSX with parent JSX. For example
 - ```
      const profile = (
         <div>
               <h1>Hello</h1>
               <h2>My Self Shivam Saway</h2>
               <img src="hello.png"/>
         </div>
      );
   ```
 - JSX can do code sanitization as well. It helps to protect you from cross site attacks.

## Question: What is babel ? How it works with modern javascript ?
##### Answer:
Babel is compiler for modern javascript langauges. Babel can do many things for us. Few is listed below.

1. Babel can do syntax tranformation. For example
2. Babel can generate polyfills.
3. Babel can transform sourcecodes. For example
4. This peice of code 
   ```
      const profile = (
         <div>
               <h1>Hello</h1>
               <h2>My Self Shivam Saway</h2>
               <img src="hello.png"/>
         </div>
      );
   ```
   will transformed to this by babel automatically
   ```
      const profile = React.CreateElement('div', null ,{
         React.CreateElement('h1',null,'Hello'),
         React.CreateElement('h2',null,'My Self Shivam Saway'),
         React.CreateElement('img',{ src : "hello.png"})
      });
   ```
5. Babel is configurable tool. It can increase the productivity of developers.

Functional Component Function Name starts with capital letter or Capitalize Each Word : Convention in Modern Javascript.

## Question: Is JSX Mandatory for React ?
##### Answer: 
No, JSX is not mandatory for React projects but it is recommended by react developers. JSX has been proven to be more developer friendly. It makes the code more readable etc.

## Question: Is ES6 Mandatory for React ?
##### Answer: 
ES6 is a new version of JavaScript or you can ES6 is modern JavaScript. According to react, ES6 is not mandatory but React in itself uses ES6 features to build beatiful Modern UI. 

One should know ES6 features like classes, arrow functions, variables, let, const etc. to understand the react library more efficiently.

## Question: {TitleComponent} vs <TitleComponent /> vs <TitleComponent><TitleComponent/>
##### Answer:
{TitleComponent} is JavaScript Embedding in JSX. here, TitleComponent is a variable which will be evaluated only once when the component renders. No re-rendering will happen on state update on any event.

<TitleComponent /> this syntax is actually JSX. No re-rendering will happen on state update on any event. With this syntax we can props only. We cannot send child elements with this syntax.

<TitleComponent><TitleComponent /> With this syntax we can pass child elements as well along with props.

## Question: How can i write comments in JSX ?
##### Answer: 
To write comments in JSX we can enclose the comment string within pair of forward slash and aestrick. For example

``` {/* comment string */} ```

## Question: What is React Fragment ?

##### Answer:
React Fragment is placeholder parent element for components which returns multiple childrens. It is an empty react element which can be used to group multiple react element together. It does not add any node to the HTML DOM. It is a kind of wrapper element. In React we have some function which accepts only one react element like render() life cycle function. So when we want
a parent element but don't want it to add to HTML DOM we use react fragment.

## Question: What is virtual DOM ?
##### Answer: 
Virtual DOM is the virtual representation of actual HTML DOM. Virtual DOM in react is the tree of React Elements prepared by render() lifecycle method to make or update the actual HTML DOM in browser.

React prepares a new virtual DOM tree on every state update or prop update or force update. React reconciliation algorithm finds the diffrence between the last Virtual DOM and latest virtual DOM to update the actual HTML DOM tree with latest UI. This way manipulation DOM becomes faster.

## Question : What is React Fibre ?
##### Answer : 
React Fibre is the algortihm used by react reconciler to differ the two virtual DOM trees efficiently.

React Fibre is complete new algorithm which has asynchrous behaviour.

Working of React Fibre.

1. Fibre in react fibre represent a unit of work.
2. React Fibre updates the DOM in two phases. First phase is Render Phase and Second Phase is Commit Phase.
3. Render Phase: React does asynchronous things. It finds the diffrence in virtual DOM trees. During this phase beginWork() and completeWork() functions are called.
4. Commit Phase: This phase is synchronous phase which updates the actual DOM tree with final virtual DOM tree.

## Question: Why we need keys in React? When do we need keys in React?
##### Answer:
We need keys to let react know the diffrence between same type of HTML nodes. For example unordered list etc. This key attribute helps react in reconciliation to update UI faster. When we have keys defined in react element then react easily knows which node to update else react does reload of whole UI.

## Question: Can we use index as keys in React ?
##### Answer: 
We can use index or any value as key in react technically. But React recommends to use unique key for each React element to distinguish each element from each other. 
While using index as key in React, we ay face issues in reconcialiation. The index can change when we filter or sort the array of items or delete any element from the array of element.

For example
```
   <ul>
      <li key = "0">Milk</li>
      <li key = "1">Butter</li>
      <li key = "2">Bread</li>
   </ul>
```
If we add one element to this list
```
   <ul>
      <li key = "0">Milk</li>
      <li key = "1">Butter</li>
      <li key = "2">Bread</li>
      <li key = "3">Ghee</li>
   </ul>
```
if we sort this list items then 

```
   <ul>
      <li key = "0">Bread</li>
      <li key = "1">Butter</li>
      <li key = "2">Ghee</li>
      <li key = "3">Milk</li>
   </ul>
```
From the above snippet you can see the diffrence in index of list. React will re-render all the elements again. This will happen every time when change in key happens due to any CRUD operation in list.

## Question: What is props in React ?
##### Answer: 
Props in react stands for properties. In React when we create elements, we can pass props as parameter to the component defination. props is nothing but a javaScript object which can be used to pass configuration or parameters to react component. 
For example
```
   <MyProfile name={"shivam"} lastname={"saway"} />
```
```
   const MyProfile = (props) => {
      const { name, lastname } = props;
      return (
         <div>
            <h1>{name}</h1>
            <h2>{lastname}</h2>
         </div>
      );
   }
```
Here in the example above the MyProfile is React component and __name__ and __lastname__ are props or properties.

## Question: What is config driven UI ?
##### Answer:
config driven UI is the concept of UI development when UI components renders conditionally on the basis of some configuration on some API response based on end user's behaviour/characterstics.

Like modern OTT apps does when they show recommended TV series or dramas or apps like swiggy or zommato shows their discount offers based on geographic location of the end user.

## Question What is the diffrence between Named Export, Default Export and * as export ?

##### Answer:
1.
```
   const MyComponent = () => { 
      ...
   }
   export const Utilities = () => { //Named Export
      ...
   }
   export default MyComponent; // Default Export
```
2. * as Exporting Method
Suppose this file name is util.js
```
   const MyComponent = () => { 
      ...
   }
   const Utilities = () => {
      ...
   }
```
We will make one common index.js file from where we can export all the content in on go.
```
   export * as utilities from "utils.js";
```
## Question What is the importance of config.json file ?
##### Answer:
1. config.json file in react app store information about global static variable in JSON format and metadata of the application like dependencies, CDN URLs etc.
2. we can also use .env file to store static and global information related to the project. we also have liberty to specify the runtime environment with this method. suppose if you want to create separate file for Dev and QA environment. You can create it like this __.env.dev__ and __.env.qa__ respectively. To access the info from this file we use process.env object. One condition with .env file method is that all variable name should prefix with __REACT_APP___.
3. If we use webpack, then in webpack config file we can create one key as externals. with this key, we can store our custom static global variable.
For example
```
webpack config file 
{
   ...
   externals: {
      'ConfigData': {
         key value pair data
      }
   }
}
```
```
   File in which ConfigData is required
   
   import ConfigData from "ConfigData";
   
```

## Question: What are react hooks ?
##### Answer:
React Hooks are javascript functions. Each React Hook has a purpose. Like useState() hook creates a local state variable inside the function in which it is used. React Hook has a strict naming convention their name will always have prefix useHookName.

React Hooks are used to create side effects in react component to produce component life cycle effects like we used to did in class based component.

Following are the most popular
   1. useState - This hook returns one state variable and one updater function to update the state variable.
   2. useEffect - This effect accepts a callback function and one dependency variable array. The callback function will be fired only when any element in dependency array changes its value.
   3. useMemo - It returns a memoized value that helps in performance optimizations.
   4. useContext - To return the current value for a context.
   5. useRef - It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
   6. useParams - The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. 
   7. useReducer - A useState alternative to help with complex state management.
etc. 

React gives us liberty to make our own hooks.

## Question: What is a Microservice ?
##### Answer:
Microservice is an architectural style that structs an application.
There are few benefits of Microservice architecture
1. Independently deployable.
2. Lossely coupled.
3. Organized around business capabilities.
4. Highly maintainable and testable.
The microservice architecture enables the rapid development of large and complex application. In microservices architecture, we have sepration of concers. Each microservice is responsible for specific feature or module of project.

## Question: What is a Monolith Architecture ?
##### Answer:

In Monolith Architecture, we have a single application which has code base for all the features and we have a single database as well. If one feature breaks then whole application breaks. Development of such application is not fast and is dependent on other modules of application as well.

In Monolith Architecture the development of application is slower as compared to microservice architecture. 

## Question: Diffrence between monolith and microservice ?
##### Answer: 
| monolith | microservice |
| --- | --- |
| In Monolith architecture, the project is single unified | In Microservice architecture, the project is splitted into smaller chunks according to project features or modules  |
| In Monolith, the project deployment is dependent on product features, If all are developed and tested then only project can be deployed | In Microservice architecture, deployment is independent of product's feature|
| Not Scalable | Scalable |
| Not Reliable | Reliable |
| Barrier to new technology adaption | No Barrier in new technology adoption |

## Question: Why do we need useEffect Hook ?
##### Answer:
The useEffect hook provided by react is javascript function. It accepts two params, first is callback function and second is dependency array. the second param is optional. if we have not specifed dependency array than useEffect's callback will be fired after each render.
But when we have dependency array as empty, the useEffect's callback will be fired only after first render of the component. If we have element in dependency array, callback will be fired when we have any change dependency array's elements. Hence, we use useEffect to mimic component life cycle method inside functional base component like we have class based component.

## What is Optional Chaining ?
##### Answer: 
The optional chaining (?.) operator is used to access object's property or function. If the property accessed or function called is undefined or null then this operator short circuit the application instead of thrwoing an runtime error.

## What is conditional rendering ? explain with code example.
##### Answer:
Conditional rendering is a concept in which components renders only when a specific condtition is true. This is a very useful feature to update the UI of the application in real time. For example
```
   const App = () => {
      const [flag, setFlag] = useState(true);
      return(
         <>
            {flag && <MyComponent/>} // conditional rendering
            <Button onClick={() => {
               setFlag(prevState => !prevState);
            }}></Button>
         </>
      );
   }
```

## Question: What is CORS ?
##### Answer:
CORS stands for cross origin resource sharing. It is an HTTP Header based mechanism. It allows server to indicate any origins other than its own from which browser should permit loading reasources.

CORS also relies on mechanism by which browsers make preflight request to the server hosting the cross origin reasource, in order to check that server will permit the actual request.

![image](https://user-images.githubusercontent.com/71207091/220835119-84412e0f-ff3b-45c4-b99e-1483eb9aebd7.png)

## Question: What is async and await ?
##### Answer:
The __async__ attribute in function declaration declares the function to execute asynchronously. While the __await__ keyword is permitted inside the async function's body. The combination of async and await enables asynchronous and promise based behaviour of the function.
The purpose of async/await is to simplify the syntax, necessary to consume promise-based APIs. 
The behavior of async/await is similar to combining generators and promises.

## Question: What is the use of "const data = await data.json()" in getRestaurants?
##### Answer:
json() method is from the Response Interface. It returns a promise which resolve when a response stream has been completly converted to JSON format. It is mainly used with the API call promises which resolves when they returns a response stream.

```
   const MyRequest = new Request("some request url");
   fetch(myRequest).then(response => response.json())
   .then(data => console.log("data", data));
```
## Server side routing
## Client side routing
## Object.values
## Shimmer Effect - UX Design Principle
## Routing in React - React Router Library
## Super(props) - why it is there in constructor of react.
## can we make lifecycle method async ?
## can we make callback function of useEffect async ?
## Code Spliting / Code Chunking / On Demand Loading / Dynamic import / Lazy Loading ? - Building Code chunks based on end user's intent to optimize the app performance.
##### lazy function from react library is used to implement Code Spliting / Code Chunking / On Demand Loading / Dynamic import / Lazy Loading. While doing lazy loading in react app, react suspends the loading upon first render of the lazy loaded component. To handle this suspend in component loading, we can use Suspense function from react library and wrap the component to lazy load inside the Suspense component. Suspense accepts a prop called fallback, which shows a placeholder UI till the lazy loaded component is not available to render.
## Styled Component

## Question: What are the various ways to add image to our App ? Explain with code example.
##### Answer:
Image can be added into a web app through css or html.
1. Through CSS.
We can set the background property of a HTML tag with url function like done below.

```
   Suppose we have a div tag on which we have applied a custom css class whose name is "add-image".
   
   <div class="add-image"></div>
   
   Inside css file. the following code has to be written
   
   .add-image{
      background: url("image file path");
      background-repeat: no-repeat;
      height: 100px;
      width: 100px;
   }
   
   heigth and width are given to view the image, otherwise empty div will be created with zero height 
   and width which will be not visible. background-repeat sets to no-repeat to fill whole div with image 
   only once. otherwise if image area is less than div's area, the empty area will be filled with repeated image.
   
```

2. Through HTML
We can add image to our application through "<img />" image tag. image tag accepts two attributes "src" and "alt". The "src" attributes holds the image source and "alt" attribute holds the alternative text or place holder text which will be viewed in DOM if somehow image does not load properly due to various reason.

## Question: What would happen if we console.log(useState()) ?
##### Answer: 
The useState hook from react library returns two things when called inside a functional component. First is the state variable and second is the setter function of the respective state variable. It returns both of the state variable and setter function as a javascript array which we de-structure according to our need.
```
   Like consider this code snippet
   import {useState} from "react"
   
   const Profile = () => {
      const [name, setName] = useState("default name");
   }
   
   so here useState is returning a javascript array which we are further destructuring.
```
Hence, if we do console.log(useState()), we would see a javascript array.
   
![image](https://user-images.githubusercontent.com/71207091/222625542-4aa77121-7e14-407e-8ad8-16ce2159371e.png)
   
## Question: How will useEffect behave if we dont add a dependency array ?
##### Answer:
useEffect hook from react library accepts two inputs. First is the callback function and second is the dependency array. In official docs callback is reffered as setup.
```
   useEffect(setup, dependencies?)
```
As we can see the dependencies is optional. Hence it is possible that we do not pass dependencies and only give the setup or callback function. If you don’t specify the dependencies at all, your Effect will re-run after every re-render of the component.
   
## Question: What is SPA ?
##### Answer:
SPA stands for single page application. In older web application, we used to create multiple files for different different pages. Like for main home page we use to create index.php or index.html and for other pages we used to create seprate files. Those older apps worked on server side routing principle.
But in SPA, we have only one file that is index.html which renders different different pages conditionally inside the same html file on the basis of routes defined. The modern SPA apps works on client side routing.

## Question: What is diffrence between client side routing and server side routing ?
##### Answer:
Server side routing: 
On every URL change the browser makes an HTTP call to the server for the content and then browser updates the HTML View port. This routing was used in older web apps. On every event which redirects user to diffrent route the browser makes a HTTP call to the server.
Client side routing:
This routing is used in modern web apps. On first app load, the browser receives the bundled app from the server. If user changes the app url or specially enters the route of specific page of app or any event redirects user to diffrent page of the app, the browser does not makes an HTTP call instead it already have data of all the pages. it just renders the required page content.
   
