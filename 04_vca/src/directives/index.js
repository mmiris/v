import registerFormatTime from './formatTime'
import registerInputFocus from './inputFocus'

export default function registerDirectives(app) {
  registerFormatTime(app)
  registerInputFocus(app)
}
