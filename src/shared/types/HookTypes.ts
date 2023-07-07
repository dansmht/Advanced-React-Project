export type KeyStrokeOptions = {
  eventName?: string;
  /**
   * Set to `true` to register using addEventListener.
   *
   * @default true
   */
  condition?: boolean;
  target?: EventTarget;
  capture?: boolean;
  /**
   * Set to `true` to ignore repeated events when the key is being held down.
   *
   * @default false
   */
  dedupe?: boolean;
}
