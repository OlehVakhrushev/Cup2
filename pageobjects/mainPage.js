class MainPage {

    get search () {
        return $('.cu2-search__inner');
    }

    clickSearch () {
        this.search.click();
    }

    get quickSwitch () {
        return $('.cu-header-quick-switcher__inner.icon');
    }

    clickQuickSwitch () {
        this.quickSwitch.click();
    }

    get settings () {
        return $$("//div[@icon='cu3-cog-2']")[0];
    }

    openSettings () {
        this.settings.click();
    }

    get spriteQuestion () {
        return $$('//div[@icon="question2"]')[0];
    }

    openSpriteQuestion () {
        this.spriteQuestion.click();
    }

    get dDownUserArrow () {
        return $(".cu-avatar.cu-simple-bar__bottom-avatar.ng-star-inserted.cu-avatar_online");
    }

    openUserMenu () {
        this.dDownUserArrow.click();
    }

    get homeBtn () {
         return $('a[href$="https://app.clickup.com/8610811/home"]');
        // return $('.cu-simple-bar__item-label.ng-tns-c673-23');
    }

    openHome () {
        this.homeBtn.click();
    }

    get notificationBtn () {
        return $('a[href$="https://app.clickup.com/8610811/notifications"]');
    }

    openNotification () {
        this.notificationBtn.click();
    }

    get pulseBtn () {
        return $('a[href$="https://app.clickup.com/8610811/pulse"]');
    }

    openPulse () {
        this.pulseBtn.click();
    }

    get goalsBtn () {
        return $('a[href$="https://app.clickup.com/8610811/goals"]');
    }

    openGoal () {
        this.goalsBtn.click();
    }

    get showLess () {
        return $$('//div[text()="Show less"]')[0];
    }

    showLessclick () {
        this.showLess.click();
    }

    get showMore () {
        return $$('//div[text()="Show more"]')[0]
    }

    showMoreclick () {
        this.showMore.click();
    }

    get favorites () {
        return $$('//span[text()="Favorites"]')[0];
    }

    openFavorites () {
        this.favorites.click();
    }

    get spaces () {
        return $$('//div[text()="Spaces"]')[0];
    }

    openSpaces () {
        this.spaces.click();
    }

    get dashboards () {
        return $$('//div[text()="Dashboards"]')[0];
    }

    openDashboards () {
        this.dashboards.click();
    }

    get docs () {
        return $$('//div[text()="Docs"]')[0];
    }

    openDocs () {
        this.docs.click();
    }
}
lkjhgfdsfghjjhgfdfghj,.,
module.exports = new MainPage();
