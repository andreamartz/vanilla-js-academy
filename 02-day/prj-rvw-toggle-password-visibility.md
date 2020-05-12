# Project Review: Toggle Password Visibility

[Link to explanation](https://courses.gomakethings.com/academy/2020-05/project-review-toggle-password-visibility/)

I started by using querySelector() to get the #password field and #show-password checkbox, and cache them to variables.

```javascript
// Get the password field and toggle checkbox
var password = document.querySelector("#password");
var toggle = document.querySelector("#show-password");
```

Next, I attached a click event listener to the toggle element.

```javascript
// Get the password field and toggle checkbox
var password = document.querySelector("#password");
var toggle = document.querySelector("#show-password");
// Listen for click events on the toggle
toggle.addEventListener(
  "click",
  function (event) {
    // Do stuff...
  },
  false
);
```

In the callback function, I check to see if the checkbox is checked or not with the checked property.

If it’s checked, I set the type of the password field to text. If it’s not, I set it to password. This will toggle visibility to masked or visible, respectively.

```javascript
// Get the password field and toggle checkbox
var password = document.querySelector("#password");
var toggle = document.querySelector("#show-password");

// Listen for click events on the toggle
toggle.addEventListener(
  "click",
  function (event) {
    // If the toggle is checked, change the type to "text"
    // Otherwise, change it back to "password"
    if (toggle.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  },
  false
);
```

And that’s the whole script.
