import { useEvent } from "shared/lib/hooks";
import { useEffect } from "react";

type GetWindowEvent<Type extends string> = Type extends keyof WindowEventMap
  ? WindowEventMap[Type]
  : Event

type WindowEventOptions = {
  condition?: boolean;
  target?: EventTarget;
  capture?: boolean;
}

export const useWindowEvent = <Type extends string>(
  type: Type,
  cb: (event: GetWindowEvent<Type>) => void,
  options: WindowEventOptions = {},
) => {
  const {
    condition = true,
    target = window,
    capture = false,
  } = options;

  const eventCb = useEvent(cb);

  useEffect(() => {
    condition && target.addEventListener(type, eventCb, capture);

    return () => condition && target.removeEventListener(type, eventCb, capture);
  }, [capture, condition, eventCb, target, type]);
};

