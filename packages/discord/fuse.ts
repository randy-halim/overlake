import { fusebox, sparky } from "fuse-box";
import { resolve } from "path";

const runner = sparky(
  class {
    public context = fusebox({
      entry: resolve(__dirname, "src/index.ts"),
      sourceMap: true,
      dependencies: {
        serverIgnoreExternals: true,
      },
      target: "server",
    });
  }
);

runner.task("default", ({ context }) => {
  context.runDev({
    bundles: {
      distRoot: resolve(__dirname, "build"),
      app: {
        path: "index.js",
      },
    },
  });
});

runner.task("build", ({ context }) => {
  context.runProd({
    bundles: {
      distRoot: resolve(__dirname, "build"),
      app: {
        path: "index.js",
      },
    },
  });
});
