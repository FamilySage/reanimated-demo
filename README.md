### Setup

1. Install node, npm, and expo

```
brew install node
npm install --global expo-cli
```

2. Install packages

```
npx expo install
```

3. Run app

```
npm start
```

You will need to separately install/update xcode + iOS simulator, AndroidStudio + a device, and run dummy apps on both prior to running natively

### Android

Update JAVA_HOME in your bash_profile or bashrc. To get your location, Android Studio -> Settings -> Build, Execution, Deployment -> Build tools -> Gradle -> Gradle JDK

```
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
```

Add local.properties with the following line in your Android build folder
Mac pathing

```
sdk.dir = /Users/USERNAME/Library/Android/sdk
```
