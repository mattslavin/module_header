System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "header": "github:mattslavin/module_header@master",
    "github:mattslavin/module_header@master": {
      "jquery": "github:components/jquery@2.1.3"
    }
  }
});

