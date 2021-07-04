const path = require("path");
const fs = require("fs");

let FilesFull = new Map();

let BlackListFull = [
  "package-lock.json",
  "package.json",
  "yarn.lock",
  "node_modules",
  "webpack.config.js",
  ".git",
  "unused.json",
];

function ThroughDirectory(Directory) {
  fs.readdirSync(Directory).forEach((File) => {
    if (BlackListFull.indexOf(File) === -1) {
      const absolutPath = path.join(Directory, File);
      if (fs.statSync(absolutPath).isDirectory())
        return ThroughDirectory(absolutPath);
      else return FilesFull.set(absolutPath, null);
    }
  });
}

class UnusedFiles {
  constructor(BlackListSettings) {
    BlackListFull += BlackListSettings;
    //Получаем все пути в директории в одну коллекцию FilesFull
    ThroughDirectory("./");
  }
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap(
      "ModuleLogger",
      (normalModuleLogger) => {
        normalModuleLogger.hooks.module.tap("ModuleLogger", (_, createDate) => {
          FilesFull.delete(
            path.join(createDate.resourceResolveData.relativePath)
          );
        });
      }
    );
    compiler.hooks.done.tap("done", () =>
      fs.writeFile(
        "unused.json",
        JSON.stringify([...FilesFull.keys()]),
        (err) => {
          if (err) throw err;
        }
      )
    );
  }
}

module.exports = { UnusedFiles };
