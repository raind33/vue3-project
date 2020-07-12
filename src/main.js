import {
  createApp
} from './runtime-canvas'
import App from './App.js'
import { getCanvasContainer } from './Game'
const app = createApp(App)

app.mount(getCanvasContainer())
