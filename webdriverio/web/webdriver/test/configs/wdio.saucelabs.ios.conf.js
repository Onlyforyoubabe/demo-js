const {config} = require('./wdio.shared.conf');
const build = `iOS Safari WebdriverIO-V6 build-${new Date().getTime()}`

// =========================
// Sauce Simulator specific config
// =========================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.REGION || 'us';

// ============
// Capabilities
// ============
config.capabilities = [
    /**
     * iOS Safari
     */
    {
        name: 'iOS 13.0 iPhone safari - appium 1.19.1',
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13.0',
        deviceName: 'iPhone Simulator',
        appiumVersion: '1.19.1',
    },
    {
        name: 'iOS 13.2 iPhone safari - appium 1.19.1',
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13.2',
        deviceName: 'iPhone Simulator',
        appiumVersion: '1.19.1',
    },
    {
        name: 'iOS 13.4 iPhone safari - appium 1.19.1',
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13.4',
        deviceName: 'iPhone Simulator',
        appiumVersion: '1.19.1',
    },
    {
        name: 'iOS 14.0 iPhone safari - appium 1.19.1',
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '14.0',
        deviceName: 'iPhone Simulator',
        appiumVersion: '1.19.1',
    },
    {
        name: 'iOS 13.0 iPad safari - appium 1.19.1',
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13.0',
        deviceName: 'iPad Simulator',
        appiumVersion: '1.19.1',
    },
    {
        name: 'iOS 13.2 iPad safari - appium 1.19.1',
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13.2',
        deviceName: 'iPad Simulator',
        appiumVersion: '1.19.1',
    },
    {
        name: 'iOS 13.4 iPad safari - appium 1.19.1',
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13.4',
        deviceName: 'iPad Simulator',
        appiumVersion: '1.19.1',
    },
    {
        name: 'iOS 14.0 iPad safari - appium 1.19.1',
        build: build,
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '14.0',
        deviceName: 'iPad Simulator',
        appiumVersion: '1.19.1',
    }
];

config.services = config.services.concat('sauce');

exports.config = config;
