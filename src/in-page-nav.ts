import * as jQuery from "jquery";

export namespace InPageNav {
  const CLASS = "site-in-page-nav";
  const LINK_CLASS = "site-in-page-nav__link";
  const SCROLL_OFFSET: number = -120;
  const CURRENT_CLASS = `usa-current`;
  const IN_PAGE_NAV_HEADING_SELECTORS = "h2, h3, h4";

  export function init(main: JQuery<HTMLElement>) {
    let sectionId = scrollToCurrentSection();
    jQuery(`.${CLASS}`).each((_, nav) => {
      let currentNav = new Nav(nav, main);
      if (sectionId) {
        currentNav.scrollNavToSectionId(sectionId);
      }
    });
  }

  /**
   * Scrolls the page to the section corresponding to the current hash fragment, if one exists.
   */
  function scrollToCurrentSection() : (string | undefined) {
    let sectionId = getSectionIdFromFragment(window.location.hash);
    if (sectionId) {
      let heading = document.getElementById(sectionId);
      if (heading) {
        scrollToSection(heading);
        return sectionId;
      }
    }
    return undefined;
  }

  function getContentScrollOffset() : number {
//    return (this.nav.dataset.scrollOffset || SCROLL_OFFSET) as number;
    return SCROLL_OFFSET;
  }

  /**
   * Scroll smoothly to a section based on the passed in element
   *
   * @param el - Id value with the number sign removed
   */
  function scrollToSection(el: HTMLElement) {
    let scrollOffset = getContentScrollOffset();

    window.scroll({
      behavior: "smooth",
      top: el.offsetTop - scrollOffset,
    });
    
    if (window.location.hash.slice(1) !== el.id) {
      window.history.pushState(null, "", `#${el.id}`);
    }
  }

  function getSectionIdFromAnchor(element: HTMLAnchorElement) : string {
    return getSectionIdFromFragment(element.hash);
  }

  function getSectionIdFromFragment(text: string) : string {
    return text.slice(1);
  }

  export class Nav {
    private readonly nav: HTMLElement;
    private readonly content: JQuery<HTMLElement>;
    private intersections: Map<string, number>;

    constructor(nav: HTMLElement, content: JQuery<HTMLElement>) {
      this.nav = nav;
      this.content = content;
      
      this.initLinks();
      this.intersections = this.initObserver();
    }

    initLinks() {
      jQuery(this.nav).find(`.${LINK_CLASS}`)
        .on("click",(ev) => { this.handleClick(ev)})
        .on("keypress",(ev) => { this.handleKeypress(ev)});
    }

    protected handleClick(event: JQuery.ClickEvent) {
      event.preventDefault();
      this.handleClickFromLink(event.currentTarget);
    }
  
    protected handleKeypress(event: JQuery.KeyPressEvent) {
      let code = event.keyCode || event.which;
      if (code == 13) { /* enter */
        event.preventDefault();
        this.handleEnterFromLink(event.currentTarget);
      }
    }

    private getSectionHeadings() : JQuery<HTMLElement> {
      let headingSelectors = this.nav.dataset.headingSelectors || IN_PAGE_NAV_HEADING_SELECTORS;
      return this.content.find(`${headingSelectors}`);
    }

    private initObserver() : Map<string, number> {
      const options : IntersectionObserverInit = {
        root: document,
        threshold: 1,
        rootMargin: "48px 0px 0px 0px"
      };
        
      let observer = new window.IntersectionObserver((entries) => {
        this.handleIntersection(entries);
        }, options);
        
      let sectionHeadings = this.getSectionHeadings();
//      console.trace(sectionHeadings.get());

      let result = new Map<string, number>();
      sectionHeadings.each((_, element) => {
        observer.observe(element);

        let key = element.id;
        result.set(key, 0);
      });
      return result;
    }

    getNavAnchorBySectionId(id: string) : (HTMLAnchorElement | undefined) {
      let fragment = encodeURI(`#${id}`);
      return jQuery(this.nav).find(`a[href='${fragment}'`)[0] as HTMLAnchorElement;
    }

    protected handleIntersection(entries: IntersectionObserverEntry[]) {
      let nav = jQuery(this.nav);
      let allLinks = nav.find(`.${LINK_CLASS}`);
      let spied = entries.map((entry) => {
        if (entry.isIntersecting === true && entry.intersectionRatio >= 1) {
          let id = entry.target.id;
//          console.warn(`Intersection of ${id}: ${entry.intersectionRatio}`);
//          allLinks.removeClass(CURRENT_CLASS);
          let spy = this.getNavAnchorBySectionId(id);
//          spy.classList.add(CURRENT_CLASS);
          return spy;
        }
        return undefined;
      }).find((spy) => spy !== undefined);
/*
      let spied = entries.map((entry) => {
        let id = entry.target.id;
        console.warn(`Intersection of ${id}: ${entry.intersectionRatio}`);
        let spy = this.getNavAnchorBySectionId(id);
        if (entry.isIntersecting === true && entry.intersectionRatio == 1) {
          spy.addClass(CURRENT_CLASS);
          return spy[0];
        }
        spy.removeClass(CURRENT_CLASS);
        return undefined;
      }).find((spy) => spy !== undefined);
*/
      if (spied) {
        this.makeActive(getSectionIdFromAnchor(spied));
//        this.scrollNavToActive();
      }
/*
      if (spied !== undefined) {
        this.scrollNavToAnchor(spied);
      }
*/
    }

    scrollNavToSectionId(sectionId: string) : void {
      let el = this.getNavAnchorBySectionId(sectionId);
      if (el) {
        this.scrollNavToAnchor(el);
      }
    }

    scrollNavToActive() : void {
      let nav = jQuery(this.nav);
      let anchor = nav.find(`a.${CURRENT_CLASS}`);
      if (anchor.length > 0) {
        this.scrollNavToAnchor(anchor[0] as HTMLAnchorElement);
      }
    }

    makeActive(sectionId: string) {
      let nav = jQuery(this.nav);
      nav.find(`.${LINK_CLASS}`).removeClass(CURRENT_CLASS);
      let anchor = this.getNavAnchorBySectionId(sectionId);
      anchor.classList.add(CURRENT_CLASS);
      this.scrollNavToAnchor(anchor);
    }

    /**
     * Scroll the in-page-nav to the active element
     * @param el the active navigation anchor
     */
    scrollNavToAnchor(el: HTMLAnchorElement) : void {
      let nav = jQuery(this.nav);

      let navPosition = this.findPosition(this.nav);
      let elPosition = this.findPosition(el);
      let elOffset = elPosition - navPosition;
//      console.info(`${el} offset: ${elOffset} nav: ${navPosition} anchor: ${elPosition}`);

      let halfHeight =  nav.innerHeight() / 2;

      let position;
      if (elOffset < halfHeight) {
        position = 0;
//        console.info(`above: y: ${elOffset}, half: ${halfHeight}, position: ${position}`);
      } else {
        position = elOffset - halfHeight;
//        console.info(`below: y: ${elOffset}, half: ${halfHeight}, position: ${position}`);
      }

      this.nav.scroll({
        behavior: "smooth",
        top: position,
      });
    }

    private findPosition(el: HTMLElement) {
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
     * Handle click from link
     *
     * @param {JQuery<HTMLElement>} el An element within the in-page nav component
     */
    protected handleClickFromLink(anchor: HTMLAnchorElement) {
      let id = getSectionIdFromAnchor(anchor);
      let target = document.getElementById(id) as HTMLElement;
      scrollToSection(target);
//      this.makeActive(id);
    }

    /**
     * Handle the enter event from a link within the in-page nav component
     *
     * @param {KeyboardEvent} event An event within the in-page nav component
     */
    protected handleEnterFromLink(anchor: HTMLAnchorElement) {
      let id = getSectionIdFromAnchor(anchor);
      let target = document.getElementById(id) as HTMLElement;
      
      if (target.parentElement) {
        let parent : HTMLElement = target.parentElement;
        parent.tabIndex = 0;
        parent.focus();
        jQuery(parent).one("blur", () => parent.tabIndex = -1);
      }
      scrollToSection(target);
//      this.makeActive(id);
    }
  }
}





