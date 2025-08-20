# Firebase Emulator Instructions

To test the authentication and Firestore functionality locally, you'll need to use the Firebase Emulator Suite. Here's how to set it up and run it.

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

Select "Emulators" from the list of features. When prompted, select "Authentication" and "Firestore" as the emulators you want to set up. You can accept the default ports (9099 for Auth, 8080 for Firestore).

## 4. Create `firebase.json`

Create a `firebase.json` file in the root of the project with the following content. This file tells the emulator which ports to use.

```json
{
  "emulators": {
    "auth": {
      "port": 9099
    },
    "firestore": {
      "port": 8080
    }
  }
}
```

## 5. Start the Emulators

Now you can start the emulators:

```bash
firebase emulators:start --only auth,firestore
```

The emulators will now be running. You should see messages in your terminal indicating that the Authentication and Firestore emulators are running on `http://localhost:9099` and `http://localhost:8080` respectively.

## 6. Test the Application

With the emulators running, you can now open the `pages/login.html` file in your browser. The application is configured to automatically connect to the emulators. You can sign up for new accounts, sign in, and any Firestore operations will be sent to the local emulator.

You can view and manage the emulated user accounts and Firestore data in the Firebase Emulator UI, which is typically available at `http://localhost:4000`.
