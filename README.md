# rclone web template react

> Render rclone HTTP web page as your own design with React

```
rclone serve http --template template.html drive:/path
```

## Usage

Download the latest template `template.html` from [releases](https://github.com/ReeganExE/rclone-web-template-react/releases/latest).

Then start `rclone` with:

```
rclone serve http --template template.html drive:/path
```


## Development

```sh
npm ci

# Patch react-scripts webpack.config.js
./patch.sh
```

Files and folders are available via `window.items` variable.

```ts
interface RCloneItem {
  name: string;
  url: string;
  isDir: boolean;
  modTime: string;
  size: string;
}
```

Edit [src/App.tsx](src/App.tsx) and add your own design.

By default, all compiled JS will be bundled to `index.html` output file but not css. If you want to add css, just add them to [public/index.html](public/index.html) or you could use [styled-components](https://github.com/styled-components/styled-components) (which is compiled to JS).

# LICENSE

AGPL-3.0 License

©Ninh Pham