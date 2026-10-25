const fs = require('fs');
// Fix Windows libuv bug where paths with a trailing quote (') fail in GetFinalPathNameByHandleW
fs.realpathSync.native = fs.realpathSync;
fs.realpath.native = fs.realpath;
