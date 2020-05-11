Day 1
Project: Toggle Password Visibility
For your first project, you’re going to write a script that let’s users toggle the visibility of a password field.

I’ve put together a template to help you get started, available at the Source Code link below as a single HTML document. Add your code down in the footer.

The template includes some basic form styles so you can focus on the JavaScript.

The Template
When a user clicks the #show-password checkbox, the #password field should display the password in plain text if the box is checked, or mask it if it’s not.

<form>
 <div>
  <label for="username">Username</label>
  <input type="text" name="username" id="username">
 </div>

 <div>
  <label for="password">Password</label>
  <input type="password" name="password" id="password">
 </div>

 <div>
  <label for="show-password">
   <input type="checkbox" name="show-passwords" id="show-password">
   Show password
  </label>
 </div>

 <p>
  <button type="submit">Log In</button>
 </p>
</form>

Solution Notes and resources consulted
<input type="password">
If the input type is "password", the text will be replaced with symbols.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password "Input element, type='password'")
