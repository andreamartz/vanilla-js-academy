# Project: Toggling passwords in multiple forms | GMT Courses

[Source](https://courses.gomakethings.com/academy/2020-05/project-toggling-passwords-in-multiple-forms/#play "Permalink to Project: Toggling passwords in multiple forms | GMT Courses")

In today’s project, we’re going to modify our password toggle script again.

This time, we have two separate forms that show up on the same page—one to change your username, and another to change your password.

Both have password fields in them, and for each form, we again want to include a checkbox that let’s the user toggle password visibility on or off. But, each checkbox should only toggle the fields in its own form.

## The Template

In the first form, the `#show-password` checkbox should toggle the `#password` field visibility. In the second form, the `#show-passwords` checkbox should toggle the visibility of the `#current-password` and `#new-password` fields.

As an extra challenge, see if you can figure out a way to write your script without having to duplicate your code for each form (it’s ok if you can’t).

```
<h2>Change Username</h2>

    <p>Enter your username and password to change your username.</p>

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
    		<button type="submit">Change Username</button>
    	</p>
    </form>

    <h2>Change Password</h2>

    <p>Enter your current password and new password below.</p>

    <form>
    	<div>
    		<label for="current-password">Current Password</label>
    		<input type="password" name="current-password" id="current-password">
    	</div>

    	<div>
    		<label for="new-password">New Password</label>
    		<input type="password" name="new-password" id="new-password">
    	</div>

    	<div>
    		<label for="show-passwords">
    			<input type="checkbox" name="show-passwords" id="show-passwords">
    			Show passwords
    		</label>
    	</div>

    	<p>
    		<button type="submit">Change Passwords</button>
    	</p>
    </form>
```
