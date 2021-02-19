import { expect } from 'chai';
import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/user';
import mainPage from '../../../pageobjects/mainPage';
import { sideMenu } from '../../../expected/sideBarExp';
import homePageWindow from '../../../pageobjects/homePageWindow';
import notificationPageWindow from '../../../pageobjects/notiificationPageWindow';

describe('SideBar', function () {
    it('Home Title', function () {
        LoginPage.open();
        LoginPage.login(user.me.email, user.me.password);
        browser.pause(2000);
        mainPage.openHome();
        expect(homePageWindow.homeTitleText.getAttribute('innerText')).to.be.equal(sideMenu.homeText);
    });

    it('Notification Title', function () {
        browser.pause(2000);
        mainPage.openNotification();
        expect(notificationPageWindow.notificationTitleText.getAttribute('innerText')).to.be.equal(sideMenu.notificationText);
    });
});
