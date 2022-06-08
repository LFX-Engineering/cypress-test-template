module.exports = {
  /**
   * Extend an existing configuration.
   * @type {String|Array.<String>}
   * @see {@link https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends}
   */
  extends: [
    /**
     * The standard shareable config for stylelint.
     * @type {string}
     * @see {@link https://github.com/stylelint/stylelint-config-standard}
     */
    'stylelint-config-standard',
    /**
     * Turns off all rules that are unnecessary or might conflict with prettier.
     * @type {string}
     * @see {@link https://github.com/shannonmoeller/stylelint-config-prettier}
     */
    'stylelint-config-prettier'
  ],

  /**
   * @type {array}
   */
  plugins: [],

  /**
   * @type {!Object}
   */
  rules: {
    'no-empty-source': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['@apply']
      }
    ],
    'named-grid-areas-no-invalid': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep']
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^mat-/', '/^fa-/', '/^app-/', '/^ngx/', '/^lfx', '@apply']
      }
    ],
    'unit-allowed-list': ['px', 'em', 'rem', '%', 's', 'vh', 'deg', 'ms', 'dpi', 'vw', 'fr']
  }
};
