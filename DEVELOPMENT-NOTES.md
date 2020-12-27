# General

`package.yaml` is used instead of `package.json` during development. `package-yaml-to-json` script is used to convert
`package.yaml` to `package.json` whenever it is necessary.


# Requirements

* `yq`
    * https://kislyuk.github.io/yq/
* Run on Save extension for creating `package.json` from `package.yaml` automatically on save command.
    * https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave


# One-liners

Create markdown descriptions from `package.yaml` for `README.md`:
```sh
cat package.yaml | yq -r '.contributes.configuration.properties | to_entries[] | "* `\(.key)`, (default `\(.value.default)`) \(.value.description // .value.markdownDescription)"' | sed -r '/^$/d'
```

Create a markdown command table skeleton from `package.yaml`:
```sh
cat package.yaml | yq -r '"| \(.contributes.menus.touchBar[].command) |  |  |"'
```