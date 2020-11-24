export class Token {
    constructor(tokenId = '', tokenNumber = '', tokenStatus = {
        statusId: '',
        statusDescripcion: '',
    }, device = {
        deviceId: '',
        deviceNumber: '',
        deviceType: '',
        deviceDescription: '',
    }, wallet = {
        walleId: '',
        walleDescripcion: '',
    }) {
        this.tokenId = tokenId;
        this.tokenNumber = tokenNumber;
        this.tokenStatus = tokenStatus;
        this.device = device;
        this.wallet = wallet;
    }
    static Build(token) {
        if (!token) {
            return new Token();
        }
        return new Token(token.tokenId, token.tokenNumber, token.tokenStatus, token.device, token.wallet);
    }
    toJSON() {
        const serialized = Object.assign(this);
        return serialized;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab21uaWNoYW5uZWwyLWNvbW1lcmNpYWwtcGxhdGFmb3JtLXdhbGxldC1tYW5hZ2VtZW50L2Zyb250LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBLE1BQU0sT0FBTyxLQUFLO0lBQ2hCLFlBQ1MsVUFBVSxFQUFFLEVBQ1osY0FBYyxFQUFFLEVBQ2hCLGNBQWM7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixpQkFBaUIsRUFBRSxFQUFFO0tBQ3RCLEVBQ00sU0FBUztRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osWUFBWSxFQUFFLEVBQUU7UUFDaEIsVUFBVSxFQUFHLEVBQUU7UUFDZixpQkFBaUIsRUFBRyxFQUFFO0tBQ3ZCLEVBQ00sU0FBUztRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZ0JBQWdCLEVBQUUsRUFBRTtLQUNyQjtRQWZNLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFDWixnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FHakI7UUFDTSxXQUFNLEdBQU4sTUFBTSxDQUtaO1FBQ00sV0FBTSxHQUFOLE1BQU0sQ0FHWjtJQUVBLENBQUM7SUFFSixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQTtTQUNuQjtRQUVELE9BQU8sSUFBSSxLQUFLLENBQ2QsS0FBSyxDQUFDLE9BQU8sRUFDYixLQUFLLENBQUMsV0FBVyxFQUNqQixLQUFLLENBQUMsV0FBVyxFQUNqQixLQUFLLENBQUMsTUFBTSxFQUNaLEtBQUssQ0FBQyxNQUFNLENBQ2IsQ0FBQTtJQUNILENBQUM7SUFHRCxNQUFNO1FBQ0osTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElUb2tlbiB7XHJcbiAgdG9rZW5JZDogc3RyaW5nXHJcbiAgdG9rZW5OdW1iZXI6IHN0cmluZ1xyXG4gIHRva2VuU3RhdHVzOiB7XHJcbiAgICBzdGF0dXNJZDogc3RyaW5nXHJcbiAgICBzdGF0dXNEZXNjcmlwY2lvbjogc3RyaW5nXHJcbiAgfVxyXG4gIGRldmljZSA6IHtcclxuICAgIGRldmljZUlkOiBzdHJpbmdcclxuICAgIGRldmljZU51bWJlcjogc3RyaW5nXHJcbiAgICBkZXZpY2VUeXBlIDogc3RyaW5nXHJcbiAgICBkZXZpY2VEZXNjcmlwdGlvbiA6IHN0cmluZ1xyXG4gIH1cclxuICB3YWxsZXQgOiB7XHJcbiAgICB3YWxsZUlkOiBzdHJpbmdcclxuICAgIHdhbGxlRGVzY3JpcGNpb246IHN0cmluZ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuIGltcGxlbWVudHMgSVRva2VuIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0b2tlbklkID0gJycsXHJcbiAgICBwdWJsaWMgdG9rZW5OdW1iZXIgPSAnJyxcclxuICAgIHB1YmxpYyB0b2tlblN0YXR1cyA9IHtcclxuICAgICAgc3RhdHVzSWQ6ICcnLFxyXG4gICAgICBzdGF0dXNEZXNjcmlwY2lvbjogJycsXHJcbiAgICB9LFxyXG4gICAgcHVibGljIGRldmljZSA9IHtcclxuICAgICAgZGV2aWNlSWQ6ICcnLFxyXG4gICAgICBkZXZpY2VOdW1iZXI6ICcnLFxyXG4gICAgICBkZXZpY2VUeXBlIDogJycsXHJcbiAgICAgIGRldmljZURlc2NyaXB0aW9uIDogJycsXHJcbiAgICB9LFxyXG4gICAgcHVibGljIHdhbGxldCA9IHtcclxuICAgICAgd2FsbGVJZDogJycsXHJcbiAgICAgIHdhbGxlRGVzY3JpcGNpb246ICcnLFxyXG4gICAgfVxyXG5cclxuICApIHt9XHJcblxyXG4gIHN0YXRpYyBCdWlsZCh0b2tlbjogSVRva2VuKSB7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgVG9rZW4oXHJcbiAgICAgIHRva2VuLnRva2VuSWQsXHJcbiAgICAgIHRva2VuLnRva2VuTnVtYmVyLFxyXG4gICAgICB0b2tlbi50b2tlblN0YXR1cyxcclxuICAgICAgdG9rZW4uZGV2aWNlLFxyXG4gICAgICB0b2tlbi53YWxsZXRcclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICB0b0pTT04oKTogb2JqZWN0IHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBPYmplY3QuYXNzaWduKHRoaXMpXHJcbiAgICByZXR1cm4gc2VyaWFsaXplZFxyXG4gIH1cclxufVxyXG4iXX0=