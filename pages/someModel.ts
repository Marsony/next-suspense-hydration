import { createStore, createEvent, createEffect, sample } from 'effector';

const someEffect = createEffect(() => true)

export type Authenticated = 'anonymous' | 'pending' | 'authenticated'

export const $sessionStatus = createStore('anonymous')

export const bootAppOnClient = createEvent()

sample({
  clock: bootAppOnClient,
  target: someEffect
})

sample({
  clock: someEffect.pending,
  fn: () => 'pending',
  target: $sessionStatus
})

sample({
  clock: someEffect.done,
  fn: () => 'authenticated',
  target: $sessionStatus,
})