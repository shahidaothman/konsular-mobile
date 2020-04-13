var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { fromEvent } from 'rxjs';
var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    Banner.prototype.show = function (opts) { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Banner.plugin = "cordova-admob-plus";
    Banner.pluginName = "AdMob";
    Banner.pluginRef = "admob.banner";
    Banner.repo = "https://github.com/admob-plus/admob-plus";
    Banner.platforms = ["Android", "iOS"];
    return Banner;
}());
export { Banner };
var Interstitial = /** @class */ (function () {
    function Interstitial() {
    }
    Interstitial.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    Interstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Interstitial.plugin = "cordova-admob-plus";
    Interstitial.pluginName = "AdMob";
    Interstitial.pluginRef = "admob.interstitial";
    return Interstitial;
}());
export { Interstitial };
var RewardVideo = /** @class */ (function () {
    function RewardVideo() {
    }
    RewardVideo.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    RewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    RewardVideo.plugin = "cordova-admob-plus";
    RewardVideo.pluginName = "AdMob";
    RewardVideo.pluginRef = "admob.rewardVideo";
    return RewardVideo;
}());
export { RewardVideo };
var AdMobOriginal = /** @class */ (function (_super) {
    __extends(AdMobOriginal, _super);
    function AdMobOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMobOriginal.prototype.setAppMuted = function (value) { return cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMobOriginal.prototype.setAppVolume = function (value) { return cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMobOriginal.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMobOriginal.platforms = ["Android", "iOS"];
    AdMobOriginal.plugin = "cordova-admob-plus";
    AdMobOriginal.pluginName = "AdMob";
    AdMobOriginal.pluginRef = "admob";
    AdMobOriginal.repo = "https://github.com/admob-plus/admob-plus";
    return AdMobOriginal;
}(IonicNativePlugin));
var AdMob = new AdMobOriginal();
export { AdMob };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkbW9iLXBsdXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQXFCekMscUJBQUk7SUFLSixxQkFBSSxhQUFDLElBQTZCOzs7Ozs7aUJBNUJ0Qzs7U0FxQmEsTUFBTTs7OztJQW1CZiwyQkFBSSxhQUFDLElBQTZCO0lBS2xDLDJCQUFJOzs7O3VCQTdDUjs7U0FzQ2EsWUFBWTs7OztJQW1CckIsMEJBQUksYUFBQyxJQUE2QjtJQUtsQywwQkFBSTs7OztzQkE5RFI7O1NBdURhLFdBQVc7O0lBb0JHLHlCQUFpQjs7O1FBQ3hDLFlBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7OztJQUdoQywyQkFBVyxhQUFDLEtBQWM7SUFLMUIsNEJBQVksYUFBQyxLQUFhO0lBSTFCLGtCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ1osT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztnQkE1Rkw7RUEyRTJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgQWRVbml0SURPcHRpb24gPSBzdHJpbmcgfCB7XG4gICAgYW5kcm9pZDogc3RyaW5nO1xuICAgIGlvczogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBAbmFtZSBBZE1vYiBQbHVzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkTW9iIFBsdXMgaXMgdGhlIHN1Y2Nlc3NvciBvZiBjb3Jkb3ZhLXBsdWdpbi1hZG1vYi1mcmVlLCB3aGljaCBwcm92aWRlcyBhIGNsZWFuZXIgQVBJIGFuZCBidWlsZCB3aXRoIG1vZGVybiB0b29scy5cbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcbiAgICBwbHVnaW5OYW1lOiAnQWRNb2InLFxuICAgIHBsdWdpblJlZjogJ2FkbW9iLmJhbm5lcicsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZG1vYi1wbHVzL2FkbW9iLXBsdXMnLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lciB7XG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBoaWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNob3cob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxuICAgIHBsdWdpbk5hbWU6ICdBZE1vYicsXG4gICAgcGx1Z2luUmVmOiAnYWRtb2IuaW50ZXJzdGl0aWFsJyxcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJzdGl0aWFsIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWQob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXG4gICAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcbiAgICBwbHVnaW5SZWY6ICdhZG1vYi5yZXdhcmRWaWRlbycsXG59KVxuZXhwb3J0IGNsYXNzIFJld2FyZFZpZGVvIHtcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIGxvYWQob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgICBzaG93KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG5cbkBQbHVnaW4oe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXG4gICAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcbiAgICBwbHVnaW5SZWY6ICdhZG1vYicsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZG1vYi1wbHVzL2FkbW9iLXBsdXMnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZE1vYiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICBiYW5uZXIgPSBuZXcgQmFubmVyKCk7XG4gICAgaW50ZXJzdGl0aWFsID0gbmV3IEludGVyc3RpdGlhbCgpO1xuICAgIHJld2FyZFZpZGVvID0gbmV3IFJld2FyZFZpZGVvKCk7XG5cbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAgIHNldEFwcE11dGVkKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgc2V0QXBwVm9sdW1lKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBmcm9tRXZlbnQoZG9jdW1lbnQsIGV2ZW50KTtcbiAgICB9XG59XG4iXX0=