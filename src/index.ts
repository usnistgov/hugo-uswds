/*
const inPageNavigation = behavior(
  {
    [CLICK]: {
      [`.${IN_PAGE_NAV_LINK_CLASS}`](event) {
        event.preventDefault();
        if (this.disabled) return;
        handleClickFromLink(this);
      },
    },
    keydown: {
      [`.${IN_PAGE_NAV_LINK_CLASS}`]: keymap({
        Enter: handleEnterFromLink,
      }),
    },
  },
  {
    init(root) {
      selectOrMatches(`.${IN_PAGE_NAV_CLASS}`, root).forEach((inPageNavEl) => {
        createInPageNav(inPageNavEl);
        scrollToCurrentSection();
      });
    },
  }
);
*/

import * as jQuery from "jquery";
import { Constants } from "./constants";
import { InPageNav } from "./in-page-nav";

jQuery(() => {
  const main = $(`${Constants.SELECTOR_MAIN_ELEMENT}`);
  InPageNav.init(main);
});
