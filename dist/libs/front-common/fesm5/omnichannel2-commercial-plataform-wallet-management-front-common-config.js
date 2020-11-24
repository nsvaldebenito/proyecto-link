var WalletManagementConfig = /** @class */ (function () {
    function WalletManagementConfig() {
    }
    return WalletManagementConfig;
}());

var WalletManagementDefaultConfig = {
    apiDomain: '',
    enableClient: false
};

var BASE_ROUTE = 'wallet/token';

function walletManagementConfigProvider(config) {
    if (config === void 0) { config = WalletManagementDefaultConfig; }
    return {
        provide: WalletManagementConfig,
        useValue: config
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { BASE_ROUTE, WalletManagementConfig, WalletManagementDefaultConfig, walletManagementConfigProvider };
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-common-config.js.map
