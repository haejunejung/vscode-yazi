import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "vscode-yazi.openYazi",
    openYazi
  );

  context.subscriptions.push(disposable);
}

async function openYazi() {
  if (!(await isYaziInstanceRunning())) {
    await createNewYaziInstance();
  }
}

async function isYaziInstanceRunning() {
  for (const openTerminal of vscode.window.terminals) {
    if (openTerminal.name === "yazi") {
      openTerminal.show();
      return true;
    }
  }
  return false;
}

async function createNewYaziInstance() {
  await vscode.commands.executeCommand(
    "workbench.action.terminal.newInActiveWorkspace"
  );

  const terminal = vscode.window.activeTerminal;

  const command = vscode.workspace
    .getConfiguration()
    .get<string>("yazi.command", "yazi && exit");

  if (!terminal) {
    return;
  }

  terminal.sendText(command);
  terminal.show();

  // Move the terminal to the editor area
  await vscode.commands.executeCommand(
    "workbench.action.terminal.moveToEditor"
  );

  // Move focus back to the editor view
  await vscode.commands.executeCommand(
    "workbench.action.focusActiveEditorGroup"
  );

  if (vscode.window.terminals.length > 1) {
    // Close the terminal if it's not the only one
    await vscode.commands.executeCommand("workbench.action.togglePanel");
  }
}

export function deactivate() {}
