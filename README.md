# ✨ Ultimate To-do list app ✨

This is your change to review everything we have done so far in module 3, PLUS you will have a really good to-do app to go back to in your future endeavours. 

This app was created with <code>create-react-app</code>, so just run:

```bash
npm install
npm run start
```

## Iteration 1: Print tasks

Create a separate <code>TaskCard</code> component and use it to render all the tasks it on <code>App.jsx</code>. The card for each task should be nice and display all the information of the card.

🚧 *Styles are not a bonus, they are a MUST!* 🚧  
This time, you will work *desktop-first*: display the cards with display flex and present them nicely.

## Iteration 2: Delete tasks

Create the functions you need on <code>TaskCard</code> and on <code>App.jsx</code> to delete tasks when clicking a delete button.

## Iteration 3: Filter tasks

Create a separate <code>SearchBar</code> component and send the value to the <code>App.jsx</code> to filter the tasks shown.

## Iteration 4: Create tasks

Create a separate <code>NewTask</code> component with all the fields necessary to create a new task. Save the information in the component's state, and *lift the state* to the parent <code>App.jsx</code> to add the new task.

## Iteration 5: Order tasks by urgency

Create a function <code>handleUrgency</code>