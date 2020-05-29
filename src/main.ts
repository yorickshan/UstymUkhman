import 'intersection-observer'

import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'

// tslint:disable-next-line: space-within-parens
const root = document.getElementById('root') ||
             document.createElement('div')

export interface AppProps {
  readonly version: string | undefined;
  readonly deploy: boolean | undefined;
  readonly domain: string | undefined;
  readonly app?: HTMLElement;
}

const app: AppProps = {
  deploy: root.dataset.deploy === 'true',
  version: root.dataset.version,
  domain: root.dataset.domain,
  app: root
}

createApp(App, {
  domain: app.domain,
  version: app.version,
  deploy: app.deploy
})
  .use(router)
  .mount('#root')
