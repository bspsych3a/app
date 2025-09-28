'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/extension_discovery/vs_code.json": "afcafc3d0feb52770dec8502c9637406",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/app.dill": "b738219e0493c19ec31cd0914a0d4b9a",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/app.dill.deps": "9e1b9fa482de805ed0dceacf2d0fa716",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/dart2js.d": "ab5dbea6222e81926c8ad2de8174d46d",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/dart2js.stamp": "a1bd854ee18362379e4ac4d38c48d1ff",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/dart2wasm.stamp": "90f542d404dd277767bf5d5bfca1f891",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/flutter_assets.d": "6229834d3ff2227f0069919f0ec49d0b",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/main.dart": "deb872c31e219fb6cfad387242707ce6",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/main.dart.js": "f7cb145515ff67cf3f706971f1679ec7",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/main.dart.js.deps": "f52dfe3b35d414ca7aac8a37a6fb452b",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/outputs.json": "77b2dbdb73cdf240ff458415aceaef41",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/service_worker.d": "321bbd0b90d0bc7fc97ae1601fe9b0bf",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/web_entrypoint.stamp": "f85775336e4ffa81d85ff1884249f721",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/web_release_bundle.stamp": "7c730297d0c20c643aab2c377985ab35",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/web_resources.d": "46b1ba92f54c2b570cce0db1f7c4f99d",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/web_service_worker.stamp": "b563a699783cb038dd703ea52178efc7",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/web_static_assets.stamp": "544d4131c7fe3c6d4091d71dbf6af836",
".dart_tool/flutter_build/0f6bb021d8a7e85d6d374de81f070e7d/web_templated_files.stamp": "bf09c09a6569f69d9508c634082de0d2",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/app.dill": "b370a6b39bf45447905ec831d1674e50",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/app.dill.deps": "4369da0202150368c3af3159084215a6",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/dart2js.d": "325c90f7bc41da4775150f8ec2de6084",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/dart2js.stamp": "cf9806ea824ecb5d52a8226ee75430ab",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/dart2wasm.stamp": "9ccfa3394e4cf19f3eeaa489d8f6e322",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/flutter_assets.d": "6229834d3ff2227f0069919f0ec49d0b",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/main.dart": "deb872c31e219fb6cfad387242707ce6",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/main.dart.js": "f7cb145515ff67cf3f706971f1679ec7",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/main.dart.js.deps": "4baeb7acbf9ab2ece6d064996741a924",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/outputs.json": "77b2dbdb73cdf240ff458415aceaef41",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/service_worker.d": "321bbd0b90d0bc7fc97ae1601fe9b0bf",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/web_entrypoint.stamp": "7505d627a6ce773dc7ada456f57d4759",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/web_release_bundle.stamp": "683d18d5c14ab502c114abb3aefd1fbe",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/web_resources.d": "46b1ba92f54c2b570cce0db1f7c4f99d",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/web_service_worker.stamp": "b563a699783cb038dd703ea52178efc7",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/web_static_assets.stamp": "951c035ba3923ce5ca37074991404649",
".dart_tool/flutter_build/f83c39f43fbbeae1dfcab28cde3ca51b/web_templated_files.stamp": "bf09c09a6569f69d9508c634082de0d2",
".dart_tool/package_config.json": "0ec6d56ef263a60222b234a72ad2d7b8",
".dart_tool/package_graph.json": "073e7aa0ef4f25f5952e385f54338363",
".dart_tool/version": "8221ba5c3d872e59f434017acc99acde",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "fdb73e211e5f9d739a9d9a76747cc18b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "98fe455c547f1ab4d54a1e2c7403a010",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e2c9bcde5a3116ff5de4852d53e8040",
".git/logs/refs/heads/main": "ea5732889b2ba4bf4eb302db070a7044",
".git/objects/1e/afc91123f2b30b4e95360fbc63807fc4205c69": "25620def325066cb4f2def0a6f151bc1",
".git/objects/3f/bb1b1db59513ec2c6ba2d3bfb7c061045fc4ae": "e983e858f82017a17a040ff050fdd57a",
".git/objects/c4/3db629b58f3d425dd071cdcfcce513ef0f6fa5": "f1bfd4353fe142b2cbe9311be770d071",
".git/refs/heads/main": "3e4480698abb95a10c3b148aa916f16a",
".idea/libraries/Dart_SDK.xml": "2083b8d9ae0ded0e1c17cb57f5bea0bc",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"android/app/build.gradle.kts": "5e02f883faeceb6b03e531e41f43d9db",
"android/app/src/debug/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/app/src/main/AndroidManifest.xml": "5a546c174391d91cf3cdca6ef76032bc",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "9df4af9a4fa3b2fe524f5efe80a18173",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/build.gradle.kts": "803fe22651fbe96ed401eb0b66a492d1",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "627d3c02fe399624ffc9b39b9a5a5656",
"android/gradle.properties": "177a9eb502bc9c110a72ff0fdfd0c845",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "a42a67db8e2b8957897456f1b74352ef",
"android/settings.gradle.kts": "7e2b812e622b81575eb9060fa80d2ae2",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.bin": "b2c3d8997fca730ebd57194390bc5a93",
"assets/AssetManifest.bin.json": "dfea6b42f19d0acfa34b8112df046c08",
"assets/AssetManifest.json": "36bcebf4a3e59a37c734f1f0f9787a99",
"assets/assets/images/1.png": "b4a241ab7581cec5290118ceddb37bd1",
"assets/assets/images/2.png": "a7d33e1998b1eee77ff4bf6a742be232",
"assets/assets/images/3.png": "85ca59c60c9179d7b3e9b6ab03b407c7",
"assets/assets/images/4.png": "aac0dfefc080856931658ea9c760534e",
"assets/assets/images/5.png": "c7ef7aeea67ae3612237fefcaa3b8db3",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "223e4cd6c09e677bd226cc7160c823e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"build/web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"build/web/assets/NOTICES": "2d9920ddb30eaf878dd6d18e47d4559f",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"build/web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"build/web/canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"build/web/canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"build/web/canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"build/web/canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"build/web/canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"build/web/canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"build/web/canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"build/web/canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"build/web/canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"build/web/canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"build/web/canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/flutter.js": "888483df48293866f9f41d3d9274a779",
"build/web/flutter_bootstrap.js": "eebe4258008b861b5b21c2e6c962a443",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/index.html": "8c78b42c7aeaf7687d0c387a28d8b4e0",
"build/web/main.dart.js": "f7cb145515ff67cf3f706971f1679ec7",
"build/web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"build/web/version.json": "b3b87f9153d4406c14bc11865bbe1089",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7169bed5849195f70e3727a900e4b826",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35468c3d637173a342c23f06e1cff660",
"/": "35468c3d637173a342c23f06e1cff660",
"ios/Flutter/AppFrameworkInfo.plist": "61f96692cf70fcbea30157a42fd66a70",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/ephemeral/flutter_lldbinit": "4c0c8550624ce117572c484ae3e7d9ce",
"ios/Flutter/ephemeral/flutter_lldb_helper.py": "98fc75412162af387e2e3461e4e58094",
"ios/Flutter/flutter_export_environment.sh": "751597756a96221f711c99fb8d3dd82b",
"ios/Flutter/Generated.xcconfig": "c57f95b6d190a99d74daf70a596e61c4",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "e277c49e98c9f80e9e71c0524a5cb60f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "89fe97591c65fb6906af8ac5653fb487",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "6b69df499cbf0129993f8590d8a43014",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "843f15d9a62e0e2bda682102c02cabdc",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"lib/main.dart": "e6d34b783604845532fe6ac65931b479",
"linux/CMakeLists.txt": "9c4dbeef0f405b4ef17423014f98f724",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/runner/CMakeLists.txt": "30cc1614b16214b66c014af09ba699eb",
"linux/runner/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/runner/my_application.cc": "456e8f4005864e32feb366c56c58bf69",
"linux/runner/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "31214b133bd2de8cabe09299f9c9f064",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "b455650272c07903565bf12df1693e76",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "4b52e0b89ebfef9baf45b04548c463d6",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "c30f92243a289af69a8b6c1c27dd072a",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "93c22dae2d93f3dc1402e121901f582b",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "feebf2950a5a61d77e987c534557042b",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7545cb7736f31b1b9e5ef91c87578d9c",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/RunnerTests/RunnerTests.swift": "8059f5d27a19c556eeafb49b3f9b7bdd",
"main.dart.js": "201365f99e38b259d10553111f37ed3e",
"manifest.json": "93c37eecd235ec821395472848c24759",
"pubspec.lock": "7d83ff466c29e92e068babe8b6147665",
"pubspec.yaml": "e0af3ccc0dfe82776758faad2a628704",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "274cb08730044d4ae5394930d9c2372d",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "478895dd9a65a777c656d2593ad5c7ef",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796",
"windows/CMakeLists.txt": "1ab2c7fa4021ddd68d915bb0085dd341",
"windows/flutter/CMakeLists.txt": "bbf66fed5180bd9ae8198b8d7c4a0001",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "2f463f9b7da67a2d692a012f9ea85e0c",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "01bb7d9acfab1af72f17ad947706bf4f",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "298a0260a755c3959d2c3c8904298803",
"windows/runner/Runner.rc": "76938ef0891d07a6916a3bfd1289061d",
"windows/runner/utils.cpp": "432461b09d862a2f8dadf380ff0e34e5",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "571eb8234dbc2661be03aa5f2a4d2fca",
"windows/runner/win32_window.h": "7569387d58711ab975940f4df3b4bcda"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
