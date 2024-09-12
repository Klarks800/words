const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "DefaultCompany",
        productName: "gdtTest",
        productVersion: "1.0",
        sdkVersion: "3.17.16",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/gdtTest_Web_VKontakte.loader.js",
        dataURL: "bin/gdtTest_Web_VKontakte.data.unityweb",
        frameworkURL: "bin/gdtTest_Web_VKontakte.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/gdtTest_Web_VKontakte.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "None",
        iconTextureName: "game_logo_256x256.png",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: 0.5625,
        mobileAspectRatio: 0.5625,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "vkontakteWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

    }

})();