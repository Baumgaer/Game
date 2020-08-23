export interface IConfig {
  server: Server;
  client: Client;
}interface Client {
  biomes: Biomes;
  config: Config2;
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
  databases: Databases;
  passwords: Passwords;
  paths: Paths;
  ports: Ports;
  spec: Spec;
}interface Spec {
  aBooleanTest: boolean;
}interface Ports {
  redis: number;
  arangoDB: number;
  gameServer: number;
  webServer: number;
}interface Paths {
  views: string;
  staticFiles: string;
  routes: string;
  resolvers: string;
  bdoConfig: string;
  clientConfig: string;
  serverConfig: string;
  apiEntryPoint: string;
}interface Passwords {
  sessionSecretSeed: string;
}interface Databases {
  redis: Redis;
  arangodb?: any;
}interface Redis {
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