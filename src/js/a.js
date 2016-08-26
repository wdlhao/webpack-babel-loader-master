//es6的语法
let LOADER = true; 
//module.exports = LOADER;

class Project {
  constructor(name) {
    this.name = name;
  }
  start() {
    return "Project " + this.name + " starting";
  }
}

var project = new Project("Journal");
let projectName = project.start(); // "Project Journal starting"
module.exports = "安装es6语法输出："+LOADER+","+projectName;
