#!/usr/bin/env bash
(
    mkdir -p ~/workspace/players/iOS
    mkdir -p ~/workspace/players/Android
    cd ~/workspace/players/iOS
    wget http://tester:smartface@cd.smartface.io/nexus/service/local/repositories/smartfacemavensnapshots/content/io/smartface/ios/player/6.5.1-beta.174/player-6.5.1-beta.174.zip
    cd ~/workspace/players/Android
    wget http://tester:smartface@cd.smartface.io/nexus/service/local/repositories/smartfacemavensnapshots/content/io/smartface/android/player/6.5.0-beta.5/player-6.5.0-beta.5.zip
)