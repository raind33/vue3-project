const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const upload = require('multer')({ dest: './upload' })

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.post('/upload', upload.single('avatar'), (req, res) => {
  const file = req.file
  const fileInfo = {}
  console.log(file.mimetype.split('/')[1])
  fs.renameSync('./upload/' + file.filename, './upload/' + file.filename + '.' + file.mimetype.split('/')[1])// 这里修改文件名字，比较随意。
  // 获取文件信息
  fileInfo.mimetype = file.mimetype
  fileInfo.originalname = file.originalname
  fileInfo.size = file.size
  fileInfo.path = file.path

  // 设置响应类型及编码
  res.set({
    'content-type': 'application/json; charset=utf-8'
  })

  res.end('上传成功！')
})
app.listen(9000, () => {
  console.log('server listening 9000 port')
})
