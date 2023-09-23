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

**Table of Contents**

[TOCM]

[TOC]

###Links in html head
[Github Repo Link](https://github.com/Noor-Jallad/ToDoList.git "Github Repo Link")

`<link>` : <https://github.com/Noor-Jallad/ToDoList.git>


###Code Blocks (multi-language) & highlighting
##Meta Statements
```Meta Statements 
<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todo List</title>
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/style.min.css" />```
  
  ###Inline code script Statements
  ```<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
  <script src="js/main.js"></script>```

####Code Blocks
##CSS
```CSS
@font-face {
	font-family: 'Roboto-Regular';
	src: url('../fonts/Roboto-Regular.eot');
	src: local('☺'), url('../fonts/Roboto-Regular.woff') format('woff'), url('../fonts/Roboto-Regular.ttf') format('truetype'), url('../fonts/Roboto-Regular.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'FontAwesome';
	src: url('../fonts/fontawesome-webfont.eot');
	src: local('☺'), url('../fonts/fontawesome-webfont.woff') format('woff'), url('../fonts/fontawesome-webfont.ttf') format('truetype'), url('../fonts/fontawesome-webfont.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}
body{font-family: 'Roboto-Regular';background: #f5f5f5;}
header .navbar{padding: .5rem 0;}
header nav.navbar .navbar-brand{color:#fff;}
section.todo-outer {
    width: 100%;
    float: left;
    padding: 30px 0;
}
section.todo-outer h1 {
    font-size: 40px;
    margin-bottom: 20px;
}
.todo-inner {
    width: 100%;
    float: left;
    padding: 40px;
    box-shadow: 0px 0px 10px #c1c1c1;
    background: #fff;
}
table tr td button {
    background: no-repeat;
    border: none;
    padding: 0;
    cursor: pointer;
}
.completed{text-decoration: line-through;}```
####Javascript　
```javascript
Modernizr.addTest('localstorage', function(){
    var mod='modernizr';
    try{
        localStorage.setItem(mod,mod);
        localStorage.removeItem(mod);
        return true;
    }
    catch(e){
        return false;
    }
})
showtask();
let addTaskInput = document.getElementById("addtaskinput");
let addTaskBtn = document.getElementById("addtaskbtn");

addTaskBtn.addEventListener("click", function(){
    addTaskInputVal = addTaskInput.value;
    if(addTaskInputVal.trim()!=0){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({'task_name':addTaskInputVal, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addTaskInput.value = '';
    }
    showtask();
})
// showtask
function showtask(){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist.innerHTML = html;
}
// Edit Task
function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addTaskBtn = document.getElementById("addtaskbtn");
    let saveTaskBtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    addTaskInput.value = taskObj[index]['task_name'];
    addTaskBtn.style.display="none";
    saveTaskBtn.style.display="block";
}

// Save Task
let saveTaskBtn = document.getElementById("savetaskbtn");
saveTaskBtn.addEventListener("click", function(){
    let addTaskBtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            taskObj[saveindex].task_name = addTaskInput.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addTaskInput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addTaskInput.value;
    saveTaskBtn.style.display="none";
    addTaskBtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addTaskInput.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}

//complete task
/* function completetask(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj[index] = '<span style="text-decoration:line-through">' + taskObj[index] + '</span>';
    let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
        console.log(addedtasklist)
    })
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
} */

// Complete Task
let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
       // console.log(e);
        // Show Task();
        let webtask = localStorage.getItem("localtask");
        let taskObj = JSON.parse(webtask);
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let myTargetId = mytarget.getAttribute("id");
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
             // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for(keys in taskObj[myTargetId]) {
                if(keys == 'completeStatus' && taskObj[myTargetId][keys]==true){
                    taskObj[myTargetId].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj[myTargetId][keys]==false){
                    taskObj[myTargetId].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // Show Task();        
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        showtask();
    }
    })

    
// Delete  All
let deleteAllBtn = document.getElementById("deleteallbtn");
deleteAllBtn.addEventListener("click", function(){
    let saveTaskBtn = document.getElementById("savetaskbtn");
    let addTaskBtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    saveTaskBtn.style.display="none";
    addTaskBtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();

})

// Serach List
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchtextboxval = searchtextbox.value;
        let re = new RegExp(searchtextboxval, 'gi');
        if(searchedtext.match(re)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
})```

####HTML code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todo List</title>
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/style.min.css" />
</head>

<body>
  <header class="bg-dark mb-3">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar justify-content-between">
            <a class="navbar-brand">Todo List</a>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                id="searchtextbox" />
            </form>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <section class="todo-outer">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-sm-12 col-md-8">
          <h1>Welcome in Todo List App</h1>
          <div class="todo-inner">
            <div class="form-row">
              <div class="col-8 mr-sm-2">
                <input type="text" class="form-control" placeholder="Enter your task" id="addtaskinput" />
                <input type="hidden" id="saveindex">
              </div>
              <button type="button" class="btn btn-success mr-sm-2" id="addtaskbtn">
                Add Task
              </button>
              <button type="button" class="btn btn-success mr-sm-2" id="savetaskbtn" style="display: none;">
                Save Task
              </button>
              <button type="button" id="deleteallbtn" class="btn btn-danger">
                Delete All
              </button>
            </div>
            <div class="to-do-output">
              <table class="table table-striped mt-3 mb-0" id="addedtasklist">
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
  <script src="js/main.js"></script>
</body>

</html>
```

###Lists

####Unordered list (-)

- Add Items
- After Adding Item And Store It In Local Storage
- I have then the capabiity to edit,delete,deleteAll or clear items(tasks) from both desktop device app and localstorage. 
                         
###Tables
                    
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


###End
