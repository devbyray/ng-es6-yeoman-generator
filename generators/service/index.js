'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

function toCamelCase(stringInput) {
  return _.camelCase(stringInput);
}
function toLowerCase(stringInput) {
  return _.camelCase(stringInput).toLowerCase();
}

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the dazzling ' + chalk.red('generator-ng-es-6') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your service name',
      default : this.appname // Default to current folder name
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    console.log('this.props.name: ', this.props.name);
    this.fs.copyTpl(
      this.templatePath('service.js'),
      this.destinationPath(this.props.name + '.service.js'),
      {
        name: this.props.name,
        nameCamelCase: toCamelCase(this.props.name),
        nameLowerCase: toLowerCase(this.props.name)
      }
    );
  },

  install: function () {
    // this.installDependencies();
  }
});
