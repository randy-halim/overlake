import { fusebox, sparky } from "fuse-box";

const runner = sparky(
  class {
    public context = fusebox({
      entry: "src/index.ts",
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
      distRoot: "build",
      app: {
        path: "index.js",
      },
    },
  });
});

runner.task("build", ({ context }) => {
  context.runProd({
    bundles: {
      distRoot: "build",
      app: {
        path: "index.js",
      },
    },
  });
});
