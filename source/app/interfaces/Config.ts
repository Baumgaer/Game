/* eslint-disable */export interface IConfig {
  server: Server;
  client: Client;
}interface Client {
  biomes: Biomes;
  config: Config2;
  'docker-compose': Dockercompose2;
  paths: Paths2;
  spec?: any;
}interface Paths2 {
  apiEntryPoint: string;
}interface Dockercompose2 {
  version: string;
  services: Services2;
}interface Services2 {
  gameServer: GameServer2;
  webServer: GameServer2;
  redis: Redis3;
  arangoDB: Redis3;
  redisInsight: Redis3;
}interface Redis3 {
  deploy: Deploy;
  restart: string;
}interface GameServer2 {
  environment: Environment3;
  deploy: Deploy;
  restart: string;
}interface Environment3 {
  NAME: string;
}interface Config2 {
  timeouts: Timeouts;
  valueWithoutSection: string;
  aBoolean: boolean;
  section: Section;
}interface Section {
  lalala: (number | string)[];
  meep: number;
}interface Server {
  biomes: Biomes;
  config: Config;
  'docker-compose': Dockercompose;
  paths: Paths;
  spec: Spec;
  databases: Databases;
  passwords: Passwords;
  ports: Ports;
}interface Ports {
  redis: number;
  arangoDB: number;
  gameServer: number;
  webServer: number;
}interface Passwords {
  sessionSecretSeed: string;
}interface Databases {
  redis: Redis2;
  arangodb?: any;
}interface Redis2 {
  default: number;
  sessions: number;
  database3: number;
  database4: number;
  database5: number;
  database6: number;
  database7: number;
  database8: number;
  database9: number;
  database10: number;
  database11: number;
  database12: number;
  database13: number;
  database14: number;
  database15: number;
}interface Spec {
  aBooleanTest: boolean;
}interface Paths {
  apiEntryPoint: string;
  views: string;
  staticFiles: string;
  routes: string;
  resolvers: string;
  bdoConfig: string;
  clientConfig: string;
  serverConfig: string;
}interface Dockercompose {
  version: string;
  services: Services;
  volumes: Volumes;
}interface Volumes {
  dbPersist?: any;
}interface Services {
  gameServer: GameServer;
  webServer: GameServer;
  redis: Redis;
  arangoDB: ArangoDB;
  redisInsight: RedisInsight;
}interface RedisInsight {
  deploy: Deploy;
  restart: string;
  image: string;
  ports: string[];
}interface ArangoDB {
  deploy: Deploy;
  restart: string;
  image: string;
  environment: Environment2;
  ports: string[];
  volumes: Volume2[];
}interface Volume2 {
  type: string;
  source: string;
  target: string;
  volume: Volume;
}interface Volume {
  nocopy: boolean;
}interface Environment2 {
  ARANGO_NO_AUTH: string;
  ARANGO_STORAGE_ENGINE: string;
}interface Redis {
  deploy: Deploy;
  restart: string;
  image: string;
  command: string;
  ports: string[];
}interface GameServer {
  environment: Environment;
  deploy: Deploy;
  restart: string;
  image: string;
  build: Build;
  ports: string[];
  depends_on: string[];
  volumes: string[];
}interface Build {
  context: string;
  dockerfile: string;
}interface Deploy {
  replicas: number;
  restart_policy: Restartpolicy;
}interface Restartpolicy {
  condition: string;
  delay: string;
  max_attempts: number;
  window: string;
}interface Environment {
  NAME: string;
  PORT: number;
  REDIS_HOST: string;
  REDIS_PORT: number;
  ARANGODB_HOST: string;
  ARANGODB_PORT: number;
}interface Config {
  timeouts: Timeouts;
  session: Session;
}interface Session {
  resave: boolean;
  saveUninitialized: boolean;
  prefix: string;
  disableTTL: boolean;
  logErrors: boolean;
  secureCookie: boolean;
  httpOnly: boolean;
  maxAge: string;
  hashFunction: string;
  digest: string;
}interface Timeouts {
  configCache: string;
}interface Biomes {
  polarIce: PolarIce;
  polarDesert: PolarIce;
  rainTundra: PolarIce;
  wetTundra: PolarIce;
  moistTundra: PolarIce;
  dryTundra: PolarIce;
  borealRainForest: PolarIce;
  wetBorealForest: PolarIce;
  moistBorealForest: PolarIce;
  dryBrushwood: PolarIce;
  borealDesert: PolarIce;
  wetFoliageForest: PolarIce;
  foliageForest: PolarIce;
  steppe: PolarIce;
  middleWarmTropicalForest: PolarIce;
  thornForest: PolarIce;
  brushwoodDesert: PolarIce;
  hotDesert: PolarIce;
  tropicalForest: PolarIce;
  saltDesert: PolarIce;
  vulcan: PolarIce;
}interface PolarIce {
  temp: number[];
  hum: number[];
  color: string;
}