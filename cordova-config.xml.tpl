<?xml version='1.0' encoding='utf-8'?>
<widget id="{{APK_NAME}}" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
  <name>{{DISPLAY_NAME}}</name>
  <description>{{DESCRIPTION}}</description>
  <author email="{{AUTHOR_EMAIL}}" href="{{AUTHOR_URL}}">{{AUTHOR_NAME}}</author>
  <content src="index.html"/>
  <access origin="*"/>
  <allow-intent href="http://*/*"/>
  <allow-intent href="https://*/*"/>
  <allow-intent href="tel:*"/>
  <allow-intent href="sms:*"/>
  <allow-intent href="mailto:*"/>
  <allow-intent href="geo:*"/>
  <platform name="android">
    <allow-intent href="market:*"/>
    <icon density="ldpi" id="ldpi" src="res/icon/android/ldpi.png"/>
    <icon density="mdpi" id="mdpi" src="res/icon/android/mdpi.png"/>
    <icon density="hdpi" id="hdpi" src="res/icon/android/hdpi.png"/>
    <icon density="xhdpi" id="xhdpi" src="res/icon/android/xhdpi.png"/>
    <icon density="xxhdpi" id="xxhdpi" src="res/icon/android/xxhdpi.png"/>
    <icon density="xxxhdpi" id="xxxhdpi" src="res/icon/android/xxxhdpi.png"/>
  </platform>
  <platform name="ios">
    <allow-intent href="itms:*"/>
    <allow-intent href="itms-apps:*"/>
  </platform>
</widget>
