//const uswds = require("./components");

//const behavior = require("packages/uswds-core/src/js/utils/behavior");


const CURRENT_CLASS = `usa-current`;
const IN_PAGE_NAV_HEADING_SELECTORS = "h2, h3, h4";

import * as jQuery from "jquery";

export namespace InPageNav {
  export const CLASS = "site-usa-in-page-nav";
  export const LINK_CLASS = "site-usa-in-page-nav__link";
  export const SCROLL_OFFSET: number = 0;

  export function init(main: JQuery<HTMLElement>) {
    jQuery(`.${CLASS}`).each((_, nav) => {
      new Nav(nav, main);
    });
  }

  export class Nav {
    private readonly nav: HTMLElement;
    private readonly content: JQuery<HTMLElement>;

    constructor(nav: HTMLElement, content: JQuery<HTMLElement>) {
      this.nav = nav;
      this.content = content;

      this.initLinks();
      this.initObserver();
    }

    getContentScrollOffset() : number {
      return (this.nav.dataset.scrollOffset || SCROLL_OFFSET) as number;
    }

    initLinks() {
      jQuery(this.nav).find(`.${LINK_CLASS}`)
        .on("click",(ev) => { this.handleClick(ev)})
        .on("keypress",(ev) => { this.handleKeypress(ev)});
    }

    handleClick(event: JQuery.ClickEvent) {
      event.preventDefault();
      this.handleClickFromLink(event.currentTarget);
    }
  
    handleKeypress(event: JQuery.KeyPressEvent) {
      let code = event.keyCode || event.which;
      if (code == 13) { /* enter */
        event.preventDefault();
        this.handleEnterFromLink(event.currentTarget);
      }
    }

    getSectionHeadings() : JQuery<HTMLElement> {
      let headingSelectors = this.nav.dataset.headingSelectors || IN_PAGE_NAV_HEADING_SELECTORS;
      return this.content.find(`${headingSelectors}`);
    }

    initObserver() : IntersectionObserver {
      const options = {
        root: document,
        threshold: 1,
        rootMargin: "0px 0px 0px 0px"
      };
        
      let observeSections = new window.IntersectionObserver((entries) => {
        this.handleIntersection(entries);
        }, options);
        
      let sectionHeadings = this.getSectionHeadings();
      console.trace(sectionHeadings.get());
      sectionHeadings.each((_, element) => observeSections.observe(element));
      return observeSections;
    }

    handleIntersection(entries: IntersectionObserverEntry[]) {
      let nav = jQuery(this.nav);
      let allLinks = nav.find(`.${LINK_CLASS}`);
      let spied = entries.map((entry) => {
//        console.warn(`Intersection of ${entry.target.id}: ${entry.intersectionRatio}`);
        if (entry.isIntersecting === true && entry.intersectionRatio >= 1) {
          let id = entry.target.id;
          allLinks.removeClass(CURRENT_CLASS);

          let fragment = encodeURI(`#${id}`);
          let spy = nav.find(`a[href='${fragment}'`);
          spy.addClass(CURRENT_CLASS);
          return spy[0];
        }
        return undefined;
      }).filter((spy) => spy !== undefined) as HTMLElement[];
      
      if (spied.length > 0) {
        this.handleScrollNav(spied.pop() as HTMLElement);
      }
    }

    handleScrollNav(el: HTMLElement) {
      let nav = jQuery(this.nav);

      let navPosition = this.findPosition(this.nav);
      let elPosition = this.findPosition(el);
      let elOffset = elPosition - navPosition;
      console.info(`${el} offset: ${elOffset} nav: ${navPosition} anchor: ${elPosition}`);

      let halfHeight =  nav.innerHeight() / 2;

      let position;
      if (elOffset < halfHeight) {
        position = 0;
        console.info(`above: y: ${elOffset}, half: ${halfHeight}, position: ${position}`);
      } else {
        position = elOffset - halfHeight;
        console.info(`below: y: ${elOffset}, half: ${halfHeight}, position: ${position}`);
      }

      this.nav.scroll({
        behavior: "smooth",
        top: position,
      });
    }

    findPosition(el: HTMLElement) {
      let result = 0;
      if (el.offsetParent) {
        let obj : (undefined | HTMLElement) = el;
        do {
//          console.info(`${obj}: ${obj.offsetTop}`)
          result += obj.offsetTop;
          obj = obj.offsetParent as HTMLElement;
        } while (obj);
        return result;
      }
    }

    /**
     * Scroll smoothly to a section based on the passed in element
     *
     * @param {HTMLElement} el - Id value with the number sign removed
     */
    handleScrollToSection(el: HTMLElement) {
      let scrollOffset = this.getContentScrollOffset();

      window.scroll({
        behavior: "smooth",
        top: el.offsetTop - scrollOffset,
      });
    
      if (window.location.hash.slice(1) !== el.id) {
        window.history.pushState(null, "", `#${el.id}`);
      }
    }
    
    /**
     * Scrolls the page to the section corresponding to the current hash fragment, if one exists.
     */
    scrollToCurrentSection() {
      let hashFragment = window.location.hash.slice(1);
      if (hashFragment) {
        let anchorTag = document.getElementById(hashFragment);
        if (anchorTag) {
          this.handleScrollToSection(anchorTag);
        }
      }
    }

    getSectionIdFromAnchor(element: HTMLAnchorElement) : string {
      return this.getSectionIdFromString(element.hash);
    }
  
    getSectionIdFromString(text: string) : string {
      return text.replace("#", "");
    }

    /**
     * Handle click from link
     *
     * @param {JQuery<HTMLElement>} el An element within the in-page nav component
     */
    handleClickFromLink(anchor: HTMLAnchorElement) {
      let id = this.getSectionIdFromAnchor(anchor);
      let target = document.getElementById(id) as HTMLElement;
      this.handleScrollToSection(target);
    }

    /**
     * Handle the enter event from a link within the in-page nav component
     *
     * @param {KeyboardEvent} event An event within the in-page nav component
     */
    handleEnterFromLink(anchor: HTMLAnchorElement) {
      let id = this.getSectionIdFromAnchor(anchor);
      let target = document.getElementById(id) as HTMLElement;
      
      if (target.parentElement) {
        let parent : HTMLElement = target.parentElement;
        parent.tabIndex = 0;
        parent.focus();
        jQuery(parent).one("blur", () => parent.tabIndex = -1);
      }
      this.handleScrollToSection(target);
    }
  }
}





