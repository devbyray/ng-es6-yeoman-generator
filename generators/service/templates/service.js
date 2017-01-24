/**
 * @ngdoc service
 * @module app.<%= nameLowerCase %>
 * @name <%= nameCamelCase %>Service
 */
let inject = ['injectDependency'];

class <%= nameCamelCase %>Service {
  constructor(injectDependency){
    this.injectDependency = injectDependency;
  }

  /**
   * @ngdoc method
   * @name <%= nameCamelCase %>Service#fakeMethod
   * @param checkName
   *
   * @description
   * This method .....
   */
  fakeMethod(checkName){
    return checkName;
  }

}

/**
 * @ngdoc method
 * @name <%= nameCamelCase %>Service#$inject
 *
 * @description Inject: injectDependency
 */
<%= nameCamelCase %>Service.$inject = inject;

export default <%= nameCamelCase %>Service;
