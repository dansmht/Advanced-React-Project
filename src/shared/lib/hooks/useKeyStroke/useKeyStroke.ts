import { useWindowEvent } from "shared/lib/hooks";
import { KeyStrokeOptions } from "shared/types/HookTypes";

type KeyPredicate = (event: KeyboardEvent) => boolean
type KeyFilter = true | string | string[] | KeyPredicate

const createKeyPredicate = (keyFilter: KeyFilter): KeyPredicate => {
  if (typeof keyFilter === "function") {
    return keyFilter;
  }
  else if (typeof keyFilter === "string") {
    return (event: KeyboardEvent) => event.key === keyFilter;
  }
  else if (Array.isArray(keyFilter)) {
    return (event: KeyboardEvent) => keyFilter.includes(event.key);
  }
  return () => true;
};

/**
 * Listen for keyboard keys being stroked.
 */
export const useKeyStroke = (
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options: KeyStrokeOptions = {},
) => {

  const {
    eventName = "keydown",
    condition = true,
    target = window,
    capture = false,
    dedupe = false,
  } = options;

  const predicate = createKeyPredicate(key);

  const listener = (e: KeyboardEvent) => {
    if (e.repeat && dedupe) {
      return;
    }

    if (predicate(e)) {
      handler(e);
    }
  };

  useWindowEvent(eventName, listener, {
    condition,
    target,
    capture,
  });
};

/**
 * Listen to the keydown event of the given key.
 */
export const useKeyDown = (
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options: Omit<KeyStrokeOptions, "eventName"> = {},
) => {
  useKeyStroke(key, handler, {
    ...options,
    eventName: "keydown"
  });
};

/**
 * Listen to the keypress event of the given key.
 */
export const useKeyPress = (
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options: Omit<KeyStrokeOptions, "eventName"> = {},
) => {
  useKeyStroke(key, handler, {
    ...options,
    eventName: "keypress"
  });
};

/**
 * Listen to the keyup event of the given key.
 */
export const useKeyUp = (
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options: Omit<KeyStrokeOptions, "eventName"> = {},
) => {
  useKeyStroke(key, handler, {
    ...options,
    eventName: "keyup"
  });
};
