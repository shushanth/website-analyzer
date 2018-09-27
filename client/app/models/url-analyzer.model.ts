/**
 * @author: shushanth
 * @description: url analayzed data model
 */

export interface URLAnalyzedInfo {
  /**
   * doctype version
   */

  doctypeVersion: string;

  /**
    * heading levels
  */

  headingLevels: Array<Object>;

  /**
   * links levels
  */

  linkLevels: object;

  /**
   * login form exist
   */

   loginFormExists: boolean;

  /**
   * url page Title
   */

   pageTitle: string;

}
