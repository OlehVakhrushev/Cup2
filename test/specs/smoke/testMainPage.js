import { expect } from 'chai';
import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/user';
import userMenu from '../../../expected/userMenu';
import dDownUserMenu from '../../../pageobjects/dDownUserMenu';
import mainPage from '../../../pageobjects/mainPage'


describe('MainPage', function () {
    it('Home', function () {
        LoginPage.open();
        LoginPage.login(user.me.email, user.me.password);
        browser.pause(1000);
        mainPage.openUserMenu();
        browser.pause(1000);
        expect(dDownUserMenu.headerLogin.getAttribute('innerText')).to.be.equal(userMenu.oleh);
    });
});
