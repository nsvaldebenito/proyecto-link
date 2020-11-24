class WalletManagementConfig {
}

const WalletManagementDefaultConfig = {
    apiDomain: '',
    enableClient: false
};

const BASE_ROUTE = 'wallet/token';

function walletManagementConfigProvider(config = WalletManagementDefaultConfig) {
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
