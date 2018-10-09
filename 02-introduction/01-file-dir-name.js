console.log('file name',_filename);
console.log('dir name',_dirname);

var fileName = dirname + '/views/view.html';//方案1:不好，没有考虑跨平台
 

//方案2:不好，代码复杂，平台考虑不全面
switch(process.platform){
  case 'linux':
    fileName =_dirname +'/views/view.html';
    break;
  case 'win32':
    fileName =_dirname +\\views\\view.html;
    break;
  default:
    fileName = 'something wrong';
}
console.log('fileName:',fileName);

//方案3:最佳
const path = require('path');
fileName = path.join(_dirname,'view','login.html');
console.log('fileName:',fileName);

