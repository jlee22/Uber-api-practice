## Sign up for the Uber API

Now that our static invitation has been completed, it's time to sign up for access to the Uber API at [developer.uber.com](https://developer.uber.com/).

On [developer.uber.com](https://developer.uber.com/), choose "Manage Apps". You'll need to [log in](https://login.uber.com/login) with your existing Uber rider account, or create a new account.

Now you're ready to create your first Uber app. Choose [Register App](https://login.uber.com/applications/new) and enter your app's details.

You'll need to provide:

- the name for your app (e.g. "Thinkful Party Invitation")
- a description ("An Uber-powered party invitation to a party at Thinkful HQ in NYC!")

__Note:__ As an extra security measure, Uber whitelists the domains that are allowed to access their servers. To develop on your local computer, you'll also need to set the "Origin URI" in the "Authentication" section of the page to `http://localhost`.

Before clicking save, you'll also need to indicate whether you'd like to enroll in the Uber API Affiliate Program and whether you agree to the Uber API Terms of Use.

After saving your app, you'll see a client ID, server token, and secret. 

We'll come back to these and how to use them as we dig into the API.