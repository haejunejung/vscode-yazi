# yazi for VSCode

A VS Code extension that integrates [Yazi](https://github.com/sxyazi/yazi), a blazingly fast terminal file manager, directly into your editor.

## Features

- 🚀 **Quick Access**: Open Yazi with a simple keyboard shortcut (`Shift+Space Shift+Space`)
- 🎯 **Smart Terminal Management**: Automatically reuses existing Yazi terminal instances
- 📺 **Editor Integration**: Opens Yazi in the editor area for seamless workflow
- ⚙️ **Customizable**: Configure your own Yazi command
- 💨 **Blazingly Fast**: Navigate your file system faster than ever

## Requirements

- [Yazi](https://github.com/sxyazi/yazi) must be installed on your system
- VS Code version 1.85.0 or higher

## Usage

### Opening Yazi

1. Press `Shift+Space Shift+Space` (double tap)
2. Or use the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) and search for "yazi"

## Keyboard Shortcuts

| Command                | Keybinding                | Description                 |
| ---------------------- | ------------------------- | --------------------------- |
| `vscode-yazi.openYazi` | `Shift+Space Shift+Space` | Open or focus Yazi terminal |

You can customize the keybinding in your `keybindings.json`:

```json
{
  "command": "vscode-yazi.openYazi",
  "key": "ctrl+e",
  "mac": "cmd+e"
}
```

## Release Notes

### 0.0.1

Initial release of vscode-yazi

- Basic Yazi integration
- Keyboard shortcut support
- Terminal reuse functionality
- Customizable Yazi command

## License

See [LICENSE](./LICENSE) file for details.
