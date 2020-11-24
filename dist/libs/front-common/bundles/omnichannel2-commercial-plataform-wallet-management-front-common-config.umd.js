(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@omnichannel2-commercial-plataform-wallet-management/front-common/config', ['exports'], factory) :
    (global = global || self, factory((global['omnichannel2-commercial-plataform-wallet-management'] = global['omnichannel2-commercial-plataform-wallet-management'] || {}, global['omnichannel2-commercial-plataform-wallet-management']['front-common'] = global['omnichannel2-commercial-plataform-wallet-management']['front-common'] || {}, global['omnichannel2-commercial-plataform-wallet-management']['front-common'].config = {})));
}(this, (function (exports) { 'use strict';

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

    exports.BASE_ROUTE = BASE_ROUTE;
    exports.WalletManagementConfig = WalletManagementConfig;
    exports.WalletManagementDefaultConfig = WalletManagementDefaultConfig;
    exports.walletManagementConfigProvider = walletManagementConfigProvider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-common-config.umd.js.map
