export default class Logger {
  static log(...args) {
    queueMicrotask(console.log.bind(console, ...args))
  }

  static info(...args) {
    Logger.log(
      '%c INFO    %c %s %c %c',
      'background: #84cc16; color: #000;',
      'background: #1f2937; color: #fff;',
      new Date().toISOString(),
      'background: #84cc16;',
      'background: transparent;',
      ...args,
    )
  }
  static error(...args) {
    Logger.log(
      '%c ERROR   %c %s %c %c',
      'background: #dc2626; color: #fff;',
      'background: #1f2937; color: #fff;',
      new Date().toISOString(),
      'background: #dc2626;',
      'background: transparent;',
      ...args,
    )
  }
  static warning(...args) {
    Logger.log(
      '%c WARNING %c %s %c %c',
      'background: #facc15; color: #000;',
      'background: #1f2937; color: #fff;',
      new Date().toISOString(),
      'background: #facc15;',
      'background: transparent;',
      ...args,
    )
  }
}
