// @flow

import type { Action } from './types'

const action = (type: string, payload: Object = {}): Action => ({ type, ...payload })

export const action1 = () => action('SOME_ACTION')
export const action2 = (value: number) => action('SOME_ACTION', { value })
