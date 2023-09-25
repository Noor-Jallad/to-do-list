## Features

- Full-featured: Real-time Preview, Preformatted text/Code blocks/ Code fold, Search replace, Read only, HTML entities, Code syntax highlighting, Crud Operations.
- Compatible with all major browsers.
- Using modernizr to detict if the localstorage is supported by the prowser or not. 

# ToDoList Project Idea
It's a functional To-Do application using HTML, CSS, and JavaScript where the user inputs will store on the browser's local storage. To get started we need to create the required HTML, simple UI with CSS, and finally the functionality of the app using JavaScript. After giving the list of your to-do things, you need to check whether the input is stored in your browser’s local storage or not. You can check in this way. Open your project inspect the web page, go to the Applications tab. 
I can in toDoList project make all crud operations(get, add, update, delete). And save all changes by using LocalStorage that's used locally in the device browser.

This to-do app can store the given information in the browser’s local storage and will not be removed until the user removes it.

# Local Storage
The localStorage mechanism is available via the Window.localStorage property. Window.localStorage is part of the Window interface in JavaScript, which represents a window containing a DOM document. 

### Links in html head
[Github Repo Link](https://github.com/Noor-Jallad/ToDoList.git "Github Repo Link")

`<link>` : <https://github.com/Noor-Jallad/ToDoList.git>

### Lists

#### Unordered list (-)

- Add Items
- After Adding Item And Store It In Local Storage
- I have then the capabiity to edit,delete,deleteAll or clear items(tasks) from both desktop device app and localstorage. 
                         
### Tables
                    
Function  | Description
------------- | -------------
setItem()  |  Add key and value to localStorage
getItem()  | This is how you get items from localStorage
removeItem()  | Remove an item from localStorage
clear()  | Clear all data from localStorage
key()  | Passed a number to retrieve the key of a localStorage


| Function  | Code Usage Ex |
| ------------- | ------------- |
| setItem()  | localStorage.setItem('name', 'Obaseki Nosa');  |
| getItem()  | localStorage.getItem('name');  |
|removeItem() | .localStorage.removeItem('name');| 
|clear()  | localStorage.clear();| 
|key()  | localStorage.key(index);| 


### End
