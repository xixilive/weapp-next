const weapp = require('./weapp')

const wx = {
  createCameraContext(){
    return {
      takePhoto(args = {}){
        args.success('success')
      }
    }
  }
}

const app = weapp(wx)
const obj = app.createCameraContext()
obj.takePhoto({}).then(console.log)
