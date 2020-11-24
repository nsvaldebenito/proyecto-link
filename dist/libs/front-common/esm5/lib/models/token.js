var Token = /** @class */ (function () {
    function Token(tokenId, tokenNumber, tokenStatus, device, wallet) {
        if (tokenId === void 0) { tokenId = ''; }
        if (tokenNumber === void 0) { tokenNumber = ''; }
        if (tokenStatus === void 0) { tokenStatus = {
            statusId: '',
            statusDescripcion: '',
        }; }
        if (device === void 0) { device = {
            deviceId: '',
            deviceNumber: '',
            deviceType: '',
            deviceDescription: '',
        }; }
        if (wallet === void 0) { wallet = {
            walleId: '',
            walleDescripcion: '',
        }; }
        this.tokenId = tokenId;
        this.tokenNumber = tokenNumber;
        this.tokenStatus = tokenStatus;
        this.device = device;
        this.wallet = wallet;
    }
    Token.Build = function (token) {
        if (!token) {
            return new Token();
        }
        return new Token(token.tokenId, token.tokenNumber, token.tokenStatus, token.device, token.wallet);
    };
    Token.prototype.toJSON = function () {
        var serialized = Object.assign(this);
        return serialized;
    };
    return Token;
}());
export { Token };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab21uaWNoYW5uZWwyLWNvbW1lcmNpYWwtcGxhdGFmb3JtLXdhbGxldC1tYW5hZ2VtZW50L2Zyb250LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0lBQ0UsZUFDUyxPQUFZLEVBQ1osV0FBZ0IsRUFDaEIsV0FHTixFQUNNLE1BS04sRUFDTSxNQUdOO1FBZk0sd0JBQUEsRUFBQSxZQUFZO1FBQ1osNEJBQUEsRUFBQSxnQkFBZ0I7UUFDaEIsNEJBQUEsRUFBQTtZQUNMLFFBQVEsRUFBRSxFQUFFO1lBQ1osaUJBQWlCLEVBQUUsRUFBRTtTQUN0QjtRQUNNLHVCQUFBLEVBQUE7WUFDTCxRQUFRLEVBQUUsRUFBRTtZQUNaLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFVBQVUsRUFBRyxFQUFFO1lBQ2YsaUJBQWlCLEVBQUcsRUFBRTtTQUN2QjtRQUNNLHVCQUFBLEVBQUE7WUFDTCxPQUFPLEVBQUUsRUFBRTtZQUNYLGdCQUFnQixFQUFFLEVBQUU7U0FDckI7UUFmTSxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBR2pCO1FBQ00sV0FBTSxHQUFOLE1BQU0sQ0FLWjtRQUNNLFdBQU0sR0FBTixNQUFNLENBR1o7SUFFQSxDQUFDO0lBRUcsV0FBSyxHQUFaLFVBQWEsS0FBYTtRQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLEtBQUssRUFBRSxDQUFBO1NBQ25CO1FBRUQsT0FBTyxJQUFJLEtBQUssQ0FDZCxLQUFLLENBQUMsT0FBTyxFQUNiLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLE1BQU0sQ0FDYixDQUFBO0lBQ0gsQ0FBQztJQUdELHNCQUFNLEdBQU47UUFDRSxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RDLE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVRva2VuIHtcclxuICB0b2tlbklkOiBzdHJpbmdcclxuICB0b2tlbk51bWJlcjogc3RyaW5nXHJcbiAgdG9rZW5TdGF0dXM6IHtcclxuICAgIHN0YXR1c0lkOiBzdHJpbmdcclxuICAgIHN0YXR1c0Rlc2NyaXBjaW9uOiBzdHJpbmdcclxuICB9XHJcbiAgZGV2aWNlIDoge1xyXG4gICAgZGV2aWNlSWQ6IHN0cmluZ1xyXG4gICAgZGV2aWNlTnVtYmVyOiBzdHJpbmdcclxuICAgIGRldmljZVR5cGUgOiBzdHJpbmdcclxuICAgIGRldmljZURlc2NyaXB0aW9uIDogc3RyaW5nXHJcbiAgfVxyXG4gIHdhbGxldCA6IHtcclxuICAgIHdhbGxlSWQ6IHN0cmluZ1xyXG4gICAgd2FsbGVEZXNjcmlwY2lvbjogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW4gaW1wbGVtZW50cyBJVG9rZW4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRva2VuSWQgPSAnJyxcclxuICAgIHB1YmxpYyB0b2tlbk51bWJlciA9ICcnLFxyXG4gICAgcHVibGljIHRva2VuU3RhdHVzID0ge1xyXG4gICAgICBzdGF0dXNJZDogJycsXHJcbiAgICAgIHN0YXR1c0Rlc2NyaXBjaW9uOiAnJyxcclxuICAgIH0sXHJcbiAgICBwdWJsaWMgZGV2aWNlID0ge1xyXG4gICAgICBkZXZpY2VJZDogJycsXHJcbiAgICAgIGRldmljZU51bWJlcjogJycsXHJcbiAgICAgIGRldmljZVR5cGUgOiAnJyxcclxuICAgICAgZGV2aWNlRGVzY3JpcHRpb24gOiAnJyxcclxuICAgIH0sXHJcbiAgICBwdWJsaWMgd2FsbGV0ID0ge1xyXG4gICAgICB3YWxsZUlkOiAnJyxcclxuICAgICAgd2FsbGVEZXNjcmlwY2lvbjogJycsXHJcbiAgICB9XHJcblxyXG4gICkge31cclxuXHJcbiAgc3RhdGljIEJ1aWxkKHRva2VuOiBJVG9rZW4pIHtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIG5ldyBUb2tlbigpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBUb2tlbihcclxuICAgICAgdG9rZW4udG9rZW5JZCxcclxuICAgICAgdG9rZW4udG9rZW5OdW1iZXIsXHJcbiAgICAgIHRva2VuLnRva2VuU3RhdHVzLFxyXG4gICAgICB0b2tlbi5kZXZpY2UsXHJcbiAgICAgIHRva2VuLndhbGxldFxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIHRvSlNPTigpOiBvYmplY3Qge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IE9iamVjdC5hc3NpZ24odGhpcylcclxuICAgIHJldHVybiBzZXJpYWxpemVkXHJcbiAgfVxyXG59XHJcbiJdfQ==