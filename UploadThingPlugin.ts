import EnvironmentPlugin from "vite-plugin-environment";

export const UPLOAD_THING_DEFAULT_DEFINE_ON = ["import.meta.env", "process.env"] as const;
export const UPLOAD_THING_DEFAULT_PREFIX = "UPLOAD_THING_" as const;

export type UploadThingDefaultDefineOn = "import.meta.env" | "process.env";

export interface UploadThingViteEnvOptions {
  prefix?: typeof UPLOAD_THING_DEFAULT_PREFIX | string;
  readonly defineOn?: UploadThingDefaultDefineOn | UploadThingDefaultDefineOn[];
}

export default (config: UploadThingViteEnvOptions = {}) => {
  const { prefix = UPLOAD_THING_DEFAULT_PREFIX, defineOn = UPLOAD_THING_DEFAULT_DEFINE_ON } = config;
  const defineOnNormalized = Array.isArray(defineOn) ? defineOn : [defineOn];
  return defineOnNormalized.map((_defineOn) => {
    return EnvironmentPlugin("all", { prefix, defineOn: _defineOn as string });
  });
};
