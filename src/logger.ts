import {
  ElasticsearchTransformer,
  ElasticsearchTransport,
  LogData,
  TransformedData,
} from 'winston-elasticsearch';
import winston, { Logger } from 'winston';

const esTransformer = (logData: LogData): TransformedData => {
  return ElasticsearchTransformer(logData);
};

export const winstonLogger = (
  elasticsearchNode: string,
  name: string,
  level: string
): Logger => {
  const options = {
    console: {
      colorize: true,
      handleExceptions: true,
      json: false,
      level,
    },
    elasticsearch: {
      level,
      transformer: esTransformer,
      clientOpts: {
        log: level,
        maxRetries: 2,
        node: elasticsearchNode,
        requestTimeout: 10000,
        sniffOnStart: false,
      },
    },
  };

  const esTransport: ElasticsearchTransport = new ElasticsearchTransport(
    options.elasticsearch
  );
  const logger: Logger = winston.createLogger({
    exitOnError: false,
    defaultMeta: { service: name },
    transports: [new winston.transports.Console(options.console), esTransport],
  });

  return logger;
};
