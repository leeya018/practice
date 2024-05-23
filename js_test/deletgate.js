//
// The idea is that you "delegate" the handling of an event
// to a different element (in this case, the div, which is a parent element)
// instead of the actual element (the button) that received the event.

// control the elment from its parent
// נָצִיג= delegate
//  if the tagName is the button , so we can make the action from click of that button .
<div>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
  <button>Button 4</button>
</div>;
const div = document.getElementsByTagName("div")[0];

div.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("button was clicked");
  }
});
