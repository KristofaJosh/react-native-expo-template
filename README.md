# Welcome to your Expo app 👋

# Task

- The app should have all necessary tools set up (Linting, Prettier, React Testing Library etc.),
- It should use Redux for state management with sagas,
- it should have a stack navigator for an onboarding flow,
- and then go to a tab navigator. (3 screens in total)
- Onboarding flow should have the user enter their name,
- - put that in the store and persist it across sessions (when closing and re-opening the app).
- The tab navigator should then have one tab where it fetches users the first time that the page loades,
- - and a button to refetch users. The other tab should display the name that the user entered.
- **Focus on logic**, but make the app look as good as possible given the limited time. 
- You may use RNE or something similar.

BONUS
- Add detox (equivalent to playwright for web) tests for the app.


This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

This project uses [file-based routing](https://docs.expo.dev/router/introduction).

[//]: # (https://callstack.github.io/react-native-testing-library/docs/start/quick-start)
Testing