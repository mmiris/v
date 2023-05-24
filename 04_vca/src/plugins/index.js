import formartTimePlugin from './formatTime'
import configNamePlugin from './configName'

// export default function plugins(app) {
//   formartTimePlugin(app)
//   configNamePlugin(app)
// }

export default {
  install(app) {
    formartTimePlugin(app)
    configNamePlugin(app)
  }
}
