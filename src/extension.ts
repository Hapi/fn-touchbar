// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext)
{
	console.log('Congratulations, your extension "fn-touchbar" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('extension.action.navigateBack', () => {
			vscode.commands.executeCommand('workbench.action.navigateBack')
		}),
		vscode.commands.registerCommand('extension.action.navigateForward', () => {
			vscode.commands.executeCommand('workbench.action.navigateForward')
		}),
		vscode.commands.registerCommand('extension.debug.start', () => {
			vscode.commands.executeCommand('workbench.action.debug.start')
		}),
		vscode.commands.registerCommand('extension.debug.run', () => {
			vscode.commands.executeCommand('workbench.action.debug.run')
		}),
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
