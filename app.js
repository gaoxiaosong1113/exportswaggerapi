const ora = require('ora')
const inquirer = require('inquirer')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')
const ejs = require('ejs')


inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: '开始生成'
}]).then(confirmRes => {
    if (confirmRes.confirm) {
        const spinner = ora('请求中').start();
        axios.get('http://39.106.180.25:8091/swagger-resources').then(getAppNamesRes => {
            spinner.stop()
            inquirer.prompt([{
                type: 'list',
                name: 'servers',
                message: '请选择 servers 项目',
                choices: getAppNamesRes.data.map((item) => {
                    return {
                        name: item.name,
                        value: item.name,
                    }
                })
            }]).then(choicesRes => {
                const writeFileLoading = ora('写入中').start()
                let apiDocPath = `http://39.106.180.25:8091/${choicesRes.servers}/v2/api-docs`
                if (choicesRes.servers == 'default') {
                    apiDocPath = 'http://39.106.180.25:8091/v2/api-docs'
                }
                axios.get(apiDocPath).then(getApiForJsByAppNameRes => {
                    const savePath = `./dist/${choicesRes.servers}`
                    const saveExists = fs.existsSync(savePath)
                    if (!saveExists) {
                        fs.mkdirSync(savePath)
                    }
                    getApiForJsByAppNameRes.data.tags.map((tagsItem, tagsIndex) => {
                        if (!tagsItem.children) {
                            tagsItem.children = {}
                        }
                        tagsItem.usName = tagsItem.description.split(' ').join('')
                        for (let pathsAttr in getApiForJsByAppNameRes.data.paths) {
                            let pathsItem = getApiForJsByAppNameRes.data.paths[pathsAttr]
                            for (let attr in pathsItem) {
                                if (pathsItem[attr].tags[0] == tagsItem.name) {
                                    tagsItem.children[pathsAttr] = {
                                        ...pathsItem[attr],
                                        requestType: attr
                                    }
                                }
                            }
                        }
                    })

                    getApiForJsByAppNameRes.data.tags.map((item, index) => {
                        const path = `${savePath}/${item.usName}`
                        const exists = fs.existsSync(path)
                        if (!exists) {
                            fs.mkdirSync(path)
                        }

                        let modelsFile = String(fs.readFileSync(__dirname + '/./template/models.ejs'))
                        let requestFile = String(fs.readFileSync(__dirname + '/./template/request.ejs'))
                        let modelsTemplate = ejs.compile(modelsFile)
                        let requestTemplate = ejs.compile(requestFile)

                        let modelsStr = modelsTemplate({ tags: item, str: JSON.stringify(item) })
                        let requestStr = requestTemplate({ tags: item, str: JSON.stringify(item) })

                        fs.writeFileSync(`${path}/models.js`, modelsStr)
                        fs.writeFileSync(`${path}/request.js`, requestStr)
                        writeFileLoading.stop()
                        console.log(chalk.green(`${item.name} 生成成功`))
                    })
                    let allRequestFile = String(fs.readFileSync(__dirname + '/./template/allRequest.ejs'))
                    let allRequestTemplate = ejs.compile(allRequestFile)
                    let allRequestStr = allRequestTemplate({ request: getApiForJsByAppNameRes.data.tags })
                    fs.writeFileSync(`./dist/${choicesRes.servers}/allRequest.js`, allRequestStr)
                    console.log(chalk.green(`生成成功`))
                }).catch(error => {
                    const message = '生成失败'
                    writeFileLoading.stop()
                    console.log(chalk.red(message))
                    throw error
                })
            }).catch(error => {
                throw error
            })
        }).catch(error => {
            const message = 'servers 列表请求失败'
            spinner.stop()
            console.log(chalk.red(message))
            throw error
        })
    }
}).catch(error => {
    throw error
})




