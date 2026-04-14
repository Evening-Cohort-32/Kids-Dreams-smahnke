# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The "Kids.js" module contains the code to execute the clickEvent on a child's name. The algorithm of that clickEvent first isolates the clickEvent to only data-types that are listed as "child", and then corresponds the targeted (clicked) child name to the wish associated with that child in the database. The algorithm then returns a window alert with the targeted child's name and corresponding wish.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Because the for..of loop must iterate through each kid and then use the 'findCelebritchMatch()' function to match each iterated kid to their corresponding celebrity object from the kid's celebrityId.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The celebritySport variable equals the click target's data-sport value, so when the variable is called in the window alert, the sport associated with the clicked celebrity is displayed.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The algorithm first imports three functions from their respective modules for later use in the main.js module.

   >The mainContainer variable is set to the id "container" so the generated html content can be called and rendered when "container" is called in the index.html module. 

   >The applicationHTML string then provides the entire html structure to be rendered on the interface. The article sections include sections that have a title headings, and call the html content of the imported functions (e.g., Kids, Celebrities).

   >Finally, the innerHTML of mainContainer is applicationHTML, which injects the content from applicationHTML into the DOM...thus displaying the contents on the interface/page.
