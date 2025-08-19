# Firebase Emulator Instructions

To test the authentication flow locally, you'll need to use the Firebase Emulator Suite. Here's how to set it up and run it.

## 1. Install the Firebase CLI

If you don't have it installed already, you'll need the Firebase CLI. You can install it with npm:

```bash
npm install -g firebase-tools
```

## 2. Log in to Firebase

Log in to your Firebase account through the CLI:

```bash
firebase login
```

## 3. Initialize Firebase in the Project

If you haven't already, you may need to initialize Firebase in this project directory. **Since you have already provided the configuration, you can likely skip this step.** If you do need to run it, be careful not to overwrite existing files.

```bash
firebase init
```

Select "Emulators" from the list of features. When prompted, select "Authentication" as the emulator you want to set up. You can accept the default port (9099).

## 4. Create `firebase.json`

Create a `firebase.json` file in the root of the project with the following content. This file tells the emulator which port to use for the Authentication service.

```json
{
  "emulators": {
    "auth": {
      "port": 9099
    }
  }
}
```

## 5. Start the Emulator

Now you can start the Authentication emulator:

```bash
firebase emulators:start --only auth
```

The emulator will now be running. You should see a message in your terminal indicating that the Authentication Emulator is running on `http://localhost:9099`.

## 6. Test the Application

With the emulator running, you can now open the `pages/login.html` file in your browser. The application is configured to automatically connect to the emulator on `localhost:9099`. You can now sign up for new accounts and sign in, and all the data will be stored locally in the emulator.

You can view and manage the emulated user accounts in the Firebase Emulator UI, which is typically available at `http://localhost:4000`.
