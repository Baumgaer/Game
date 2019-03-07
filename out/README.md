# Output

Here are all files stored which must **NOT** be compiled and will be executed at runtime. No code change happens here directly but indirectly via a hard link.

Out files are all files which are **NOT**:

* typescript
* less files
* single asset files like textures or iconpacks

Directories which has no corresponding directory in the source directory will be hard linked to source except the css directory in client because it is not necessary to see the compiled css when working in less.
