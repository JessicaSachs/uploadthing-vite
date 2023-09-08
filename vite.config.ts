import { defineConfig } from "vite";
import UploadThingPlugin from "./UploadThingPlugin";

export default defineConfig({
  // Simple: return a Plugin array that gets flattened
  plugins: [UploadThingPlugin()],

  // Better: More ergonomic, but you need to fork || inline the guy's env plugin
  // Now satisfies the type Plugin with a name and hooks for whenever you want to globally register things or whatever
  // plugins: [UploadThingPlugin()]
});
