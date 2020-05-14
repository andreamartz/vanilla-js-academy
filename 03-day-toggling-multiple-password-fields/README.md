# Project: Toggling multiple password fields

In today’s project, we’re going to take our toggle password script and add the ability to toggle the visibility of multiple fields.

I’ve again included a template to get you started.

## The Template

When a user clicks on the #show-passwords checkbox, it should show the text for the #current-password and #new-password fields if it’s checked, and mask it if it’s unchecked.

I should mention that the #show-passwords checkbox has a new ID with an s at the end. I didn’t want you to get stuck wondering why the code wasn’t working right.

```
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

See Day 3 lessons:

[Getting multiple elements in the DOM](https://courses.gomakethings.com/academy/2020-05/getting-multiple-elements-in-the-dom/)

[Looping over elements](https://courses.gomakethings.com/academy/2020-05/looping-over-elements/)
