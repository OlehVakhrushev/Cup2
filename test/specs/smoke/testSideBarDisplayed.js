import { expect } from 'chai';
import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/user';
import mainPage from '../../../pageobjects/mainPage';

describe('Side dropdown menu', function () {

    it('SideBar: home', function () {
        LoginPage.open();
        LoginPage.login(user.me.email, user.me.password);
        browser.pause(5000);
        expect(mainPage.homeBtn.isDisplayed()).equal(true);
    });

    it('SideBar2: notification', function () {
        expect(mainPage.notificationBtn.isDisplayed()).equal(true);
    });

    it('SideBar3: showMore', function () {
        expect(mainPage.showMore.isDisplayed()).equal(true);
    });

    it('SideBar4: showLess', function () {
        mainPage.showMoreclick()
        expect(mainPage.showLess.isDisplayed()).equal(true);
    });

    it('SideBar5: pulse', function () {
        expect(mainPage.pulseBtn.isDisplayed()).equal(true);
    });

    it('SideBar6: goals', function () {
        expect(mainPage.goalsBtn.isDisplayed()).equal(true);
    });

    it('SideBar7: favorites', function () {
        expect(mainPage.favorites.isDisplayed()).equal(true);
    });

    it('SideBar8: spaces', function () {
        expect(mainPage.spaces.isDisplayed()).equal(true);
    });

    it('SideBar9: dashboards', function () {
        expect(mainPage.dashboards.isDisplayed()).equal(true);
    });

    it('SideBar10: docs', function () {
        expect(mainPage.docs.isDisplayed()).equal(true);
    });

});
