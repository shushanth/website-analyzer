/**
 * @shushanth
 * generic utilites
 */



/** checks for  external link "http | https"*/
const EXTERNAL_LINKS_REGEX =  /^https?/i;
/** checks for /abc/a, //asd/, asb/asd(not met AON)*/
const INTERNAL_LINKS_REGEX = /(^\/+|(^[a-zA-Z0-9-\/\\^$*+?.()|[\]{}]+)\/)[a-zA-Z0-9-\/\\^$*+?.()|[\]{}]/i;

//doctype list : https://www.w3.org/QA/2002/04/valid-dtd-list.html
const DOC_TYPES = {
  '<!DOCTYPE html>': () => 'HTML5',
  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">': () => 'HTML4_Strict',
  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">': () => "HTML4_Transitional",
  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">': () => "HTML4_Frameset",
  '!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"': () => "XHTML"
};
/**
 * @param {*} html
 * @description: checks for the doctype version and type
 * @returns doctype version (string)
 */
const getDoctypeVersion = (html) => {
  return Object.keys(DOC_TYPES)
    .map(key => (html.search(key) !== -1 ) && DOC_TYPES[key]())
    .filter(item => !!item)[0];
};


/**
 * @param {*} cheerio$$
 * @description: gets heading levels and its cound
 * @returns headingLevels config (array)
 */
const getHeadingWithLevels = (cheerio$$) => {
  const findElement = (elementTag) => cheerio$$('body').find(elementTag).length;
  return [
    {'H1': findElement('h1')},
    {'H2': findElement('h2')},
    {'H3': findElement('h3')},
    {'H4': findElement('h4')},
    {'H5': findElement('h5')},
    {'H6': findElement('h6')}
  ]
};

/**
 * @param {*} cheerio$$ instance
 * @description: gets links and its levels based on href in document
 * @returns document links config (object)
 */
const getDocumentLinksLevels = (cheerio$$) => {
  const linkElements = cheerio$$('html').find('a');
  const getfilteredLinksCount = (filterValue) => {
    return linkElements
      .map((index, link) => cheerio$$(link).attr('href'))
      .filter((index, value) => value.search(filterValue) === 0)
      .length;
  };
  let externalLinks = getfilteredLinksCount(EXTERNAL_LINKS_REGEX);
  let internalLinks = getfilteredLinksCount(INTERNAL_LINKS_REGEX);
  return {
    externalLinks,
    internalLinks,
    inAccessableLinks: (linkElements.length - (externalLinks + internalLinks))
  }
}

module.exports = {
  getDoctypeVersion,
  getHeadingWithLevels,
  getDocumentLinksLevels,
};
