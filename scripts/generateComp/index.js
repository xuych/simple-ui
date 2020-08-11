const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = (message) => console.log(chalk.green(`${message}`))
const successLog = (message) => console.log(chalk.blue(`${message}`))
const errorLog = (error) => console.log(chalk.red(`${error}`))
// 导入模板
const { vueTemplate, entryTemplate } = require('./template')
// 生成文件
const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', (err) => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
log('请输入要生成的页面组件名称、会生成在 packages/目录下')
let componentName = ''
process.stdin.on('data', async (chunk) => {
  // 获取组件名
  // 组件名称
  let inputName = String(chunk)
    .trim()
    .toString()
  if (inputName.includes('/')) {
    const inputArr = inputName.split('/')
    componentName = inputArr[inputArr.length - 1]
  } else {
    componentName = inputName
  }
  // Vue页面组件路径
  const componentPath = resolve('../../packages', componentName)
  // vue文件
  const vueFile = resolve(componentPath, `${componentName}.vue`)
  // 入口文件
  const entryFile = resolve(componentPath, 'index.js')
  // 判断组件文件夹是否存在
  const hasComponentExists = fs.existsSync(componentPath)
  if (hasComponentExists) {
    errorLog(`${inputName}页面组件已存在，请重新输入`)
    return
  } else {
    log(`正在生成 component 目录 ${componentPath}`)
    await dotExistDirectoryCreate(componentPath)
  }
  try {
    log(`正在生成 vue 文件 ${vueFile}`)
    await generateFile(vueFile, vueTemplate(componentName))
    log(`正在生成 entry 文件 ${entryFile}`)
    await generateFile(entryFile, entryTemplate(componentName))
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }
  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
})
function dotExistDirectoryCreate(directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function() {
      resolve(true)
    })
  })
}
// 递归创建目录
function mkdirs(directory, callback) {
  var exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function() {
      fs.mkdirSync(directory)
      callback()
    })
  }
}
