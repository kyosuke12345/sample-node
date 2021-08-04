import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, format, Logger, transports } from 'winston';

@Injectable()
export class LibLogService implements LoggerService {
  logger: Logger;

  constructor() {
    const logger = createLogger({
      format: format.combine(format.timestamp(), format.json()),
      transports: [
        new transports.Console({
          level: 'debug',
          format: format.combine(format.colorize(), format.simple()),
        }),
        new transports.File({
          filename: 'log/info.log',
          level: 'info',
        }),
        // new DailyRotateFile({
        //   datePattern: 'YYYY-MM-DD-HH',
        //   filename: 'log/error-%DATE%.log',
        //   zippedArchive: true,
        //   level: 'error',
        //   maxFiles: 14,
        //   maxSize: '20M',
        // }),
        // new DailyRotateFile({
        //   datePattern: 'YYYY-MM-DD-HH',
        //   filename: 'log/info-%DATE%.log',
        //   zippedArchive: true,
        //   level: 'info',
        //   maxFiles: 30,
        //   maxSize: '100M',
        // }),
      ],
    });

    this.logger = logger;
  }

  log(message: any, context?: string) {
    this.logger.log({
      level: 'info',
      message: `${message}, ${context}`,
    });
  }
  error(message: any, trace?: string, context?: string) {
    this.logger.error({
      level: 'error',
      message: `${message}`,
      trace: trace,
      context: context,
    });
  }
  warn(message: any, context?: string) {
    this.logger.warn({
      level: 'warn',
      message: `${message}, ${context}`,
    });
  }
  debug?(message: any, context?: string) {
    this.logger.debug({
      level: 'debug',
      message: `${message}, ${context}`,
    });
  }
  verbose?(message: any, context?: string) {
    this.logger.verbose({
      level: 'verbose',
      message: `${message}, ${context}`,
    });
  }
}
