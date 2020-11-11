//* console.log to confirm our files have been linked

console.log("I am in another file")

console.dir(document)

//* Use document.querySelector to select the DOM node (HTML element) with a class of 'title'

const textAtTheTop = document.querySelector(".title");

console.log(textAtTheTop)

//*Use the .innerText property to change the title of the website

textAtTheTop.innerText = "Super Cool TODO List"

//*Use the .style property to change how the title looks

textAtTheTop.style = "color: red; text-decoration: underline"

textAtTheTop.style.fontSize = '18px'

//*You can also dig into the .style property to set specific styles.  Change the fontSize of our title
//*These are seen as inline styles so they override anything in your linked .css file

//*You can access .classList to receive a list of all the classes assigned to a specific element
//*.classList has built in .add, .remove, and .toggle methods to modify this list
//*Add the class 'dark-mode' to the header text

console.log(textAtTheTop.classList)

textAtTheTop.classList.add("dark-mode")

function logEvent(e){
    console.log(e)
}

textAtTheTop.addEventListener("click", logEvent)

textAtTheTop.addEventListener("mouseover", (e)=> {
    textAtTheTop.classList.toggle('dark-mode')
})

let form = document.getElementsByTagName("form")[0];



//*Use document.getElementsByTagName to grab the form with an id of 'color-form' (Remember that this method returns a node list which you'll need to access with an index)



//*Write a function to change the background color of the div with a class of 'content-hold' to whatever is typed in to the color input.



//*Use .addEventListener to attach the color change function to the submit event of the color-form

function changeColor(e){
    e.preventDefault();
    const colorInput = document.getElementById("color-input");

    const contentHold = document.querySelector(".content-hold")

    contentHold.style.backgroundColor = colorInput.value;

    colorInput.value = ""
}

form.addEventListener("submit", changeColor);

//*Demonstrate event bubbling by attaching an event listener to the 'todo-hold' div.

//*Complete the functionality of our todo list
//*Include a warning if the user attempts to submit an empty todo

const todoButton = document.getElementById("todo-button");

function addTodo(e){
    const todoInput = document.getElementById("todo-input")
    const newLi = document.createElement("li");
    
    newLi.innerText = todoInput.value;

    newLi.addEventListener("dblclick", e => {
        newLi.remove()
    })

    const todoList = document.getElementById("todo-list")

    todoList.appendChild(newLi)

    todoInput.value = ""

    /* TODO:Capture the value of the todo input
    TODO: Create a new <li> element
    TODO: Attach the new element to my todo list
    */

    console.log("Let's add a todo")
}

todoButton.addEventListener("click", addTodo)