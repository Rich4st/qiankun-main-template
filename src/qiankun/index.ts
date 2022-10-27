import type { ObjectType, RegistrableApp } from 'qiankun'
import { registerMicroApps, start } from 'qiankun'

export function setupQiankun(params: RegistrableApp<ObjectType>[]) {
  return () => {
    /* 注册子应用 */
    registerMicroApps(params)

    /* 启动qiankun */
    start()
  }
}

