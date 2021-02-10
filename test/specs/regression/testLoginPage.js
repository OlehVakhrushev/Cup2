import { expect } from 'chai';
import LoginPage from '../../../pageobjects/login.page';
import user from '../../../testData/user';
import userMenu from "../../../expected/userMenu";



describe('LOGIN', function () {
    it('MyLogin', function () {
        LoginPage.open();
        LoginPage.login(user.me.email, user.me.password);
        browser.pause(2000);
        $(".cu-avatar.cu-simple-bar__bottom-avatar.ng-star-inserted.cu-avatar_online").click();
        browser.pause(5000);
        // expect(userMenu.oleh.getAttribute('innerText')).to.be.equal(LoginPage.headerLogin);
    });
});


