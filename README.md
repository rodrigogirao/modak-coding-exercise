This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

# Review instructions

## Folder structure

#### Typescript React Native code is in the folder `src`

#### The folder structure below is to show wich Android native files were created or changed to implement Calendar integration

```sh
├── android
│   ├── app
│   │   └── src
│   │       └── main
│   │           ├── AndroidManifest.xml
│   │           ├── java
│   │           │   └── com
│   │           │       └── modakcodingexercise
│   │           │           ├── CalendarDialogFragment.kt
│   │           │           ├── CalendarModule.kt
│   │           │           ├── MainActivity.kt
│   │           │           ├── MainApplication.kt
│   │           │           └── ModakCodingExercisePackage.kt
│   │           └── res
│   │               ├── layout
│   │               │   └── calendar.xml
```


## Screenshots

### Products List

Android | iOS
---- | ----
![Screenshot_20250125_030152_ModakCodingExercise](https://github.com/user-attachments/assets/84c4e668-94c5-43ce-af32-30937cc9552e) | ![Simulator Screenshot - iPhone 16 Pro - 2025-01-25 at 02 46 39](https://github.com/user-attachments/assets/39207c0d-7a53-465f-8f2a-721019fbf1a0)
![Screenshot_20250125_030207_ModakCodingExercise](https://github.com/user-attachments/assets/c7a347b2-ed84-4401-8a72-00a8ee60cf66) | ![Simulator Screenshot - iPhone 16 Pro - 2025-01-25 at 02 46 53](https://github.com/user-attachments/assets/c62366d1-5dba-4bba-af50-3b7e364aac88) 
![Screenshot_20250125_030227_ModakCodingExercise](https://github.com/user-attachments/assets/8cf6d406-f0b1-4858-9070-628613fd635e) | ![Simulator Screenshot - iPhone 16 Pro - 2025-01-25 at 02 50 07](https://github.com/user-attachments/assets/f546b0f8-dc4e-4553-b448-b77382ef49c7)

### Product Details

Android | iOS
---- | ----
![Screenshot_20250125_030911_ModakCodingExercise](https://github.com/user-attachments/assets/c81f2de1-60c0-4359-99dc-0560a8411405) | ![Simulator Screenshot - iPhone 16 Pro - 2025-01-25 at 03 10 12](https://github.com/user-attachments/assets/4f0f0897-7a5f-4ad3-aa27-0afe60e3deae)
![Screenshot_20250125_030925_ModakCodingExercise](https://github.com/user-attachments/assets/ec3a2641-ac1c-414c-9f30-e8567f13d1ab) | ![Simulator Screenshot - iPhone 16 Pro - 2025-01-25 at 03 10 19](https://github.com/user-attachments/assets/de073d7c-1a94-470c-b56f-18ee5611a428)
![Screenshot_20250125_030944_ModakCodingExercise](https://github.com/user-attachments/assets/eb9a05c3-d927-423d-9e50-a8a52c4165e4) | ![Simulator Screenshot - iPhone 16 Pro - 2025-01-25 at 03 09 59](https://github.com/user-attachments/assets/e6b17773-7b7f-475c-a5d0-63e8983b5afc)





