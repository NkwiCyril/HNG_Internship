# React Native Project

## Getting Started

Follow these steps to clone and run the React Native project on your local machine.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [Git](https://git-scm.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) or [Expo CLI](https://expo.dev/)
- Android Studio (for Android development) / Xcode (for iOS development)

## Clone the Repository

```sh
git clone https://github.com/NkwiCyril/HNG_Internship.git
cd HNG_Internship/Task_I ('Depending on the task you want to run')
```

## Install Dependencies

```sh
npm install
```

## Running the Project

### For React Native CLI

#### Start Metro Bundler
```sh
npx react-native start
```

#### Run on Android
```sh
npx react-native run-android
```

#### Run on iOS (Mac Only)
```sh
npx react-native run-ios
```

### For Expo Projects

#### Start Development Server
```sh
npx start
```

## Additional Configurations

- Ensure your emulator or physical device is connected.
- Check for any missing configurations in `.env` file if required.

## Troubleshooting

- Run `npx react-native doctor` to check for issues.
- If an error occurs, try clearing cache:
  ```sh
  npx react-native start --reset-cache
  ```
- Ensure your system meets React Native requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
