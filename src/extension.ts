import * as vscode from 'vscode';
import { Disposable } from 'vscode';


const NAME = "fnTouchbar";
const NS = "com.harrihalttunen";
const QNAME = NS + "." + NAME + ".";
const CONTEXT = QNAME + "context.";
const MAIN_GROUPS = CONTEXT + "mainGroups";
const DEBUG_TOOLS = CONTEXT + "debugTools";
const NAVIGATION_TOOLS = CONTEXT + "navigationTools";
const DEFINITION_TOOLS = CONTEXT + "definitionTools";
const MISC_TOOLS = CONTEXT + "miscTools";


export function activate(this: any, context: vscode.ExtensionContext)
{
	updateToolGroups();
	context.subscriptions.push(
		vscode.workspace.onDidChangeConfiguration(updateToolGroups, this),
		registerGroupCommand(
			DEBUG_TOOLS,
			"DebugTools"
		),
		registerGroupCommand(
			NAVIGATION_TOOLS,
			"NavigationTools"
		),
		registerGroupCommand(
			DEFINITION_TOOLS,
			"DefinitionTools"
		),
		registerGroupCommand(
			MISC_TOOLS,
			"MiscTools"
		),
		vscode.commands.registerCommand(QNAME + 'action.navigateBack', () => {
			vscode.commands.executeCommand('workbench.action.navigateBack')
		}),
		vscode.commands.registerCommand(QNAME + 'action.navigateForward', () => {
			vscode.commands.executeCommand('workbench.action.navigateForward')
		}),
		vscode.commands.registerCommand(QNAME + 'debug.start', () => {
			vscode.commands.executeCommand('workbench.action.debug.start')
		}),
		vscode.commands.registerCommand(QNAME + 'debug.run', () => {
			vscode.commands.executeCommand('workbench.action.debug.run')
		})
	);
}

function updateToolGroups(): vscode.WorkspaceConfiguration
{
	const settings = vscode.workspace.getConfiguration(NAME);

	if (settings.all.useToolGroups) {
		showToolGroup(MAIN_GROUPS);
		hideAllToolGroups();
	} else {
		hideToolGroup(MAIN_GROUPS);
		showAllToolGroups();
	}

	return settings;
}

function registerGroupCommand(
	currentToolGroup: string,
	commandGroupName: string
): { dispose(): any }
{
	let retVal: any[] =
		[
			vscode.commands.registerCommand(QNAME + "show" + commandGroupName, () => {
				const settings: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration(NAME);
				if(settings.all.useToolGroups) {
					hideAllToolGroups(currentToolGroup);
					showToolGroup(currentToolGroup);
					hideToolGroup(MAIN_GROUPS);
				} else {
					showAllToolGroups(currentToolGroup);
					showToolGroup(currentToolGroup);
					hideToolGroup(MAIN_GROUPS);
				}
			}),
			vscode.commands.registerCommand(QNAME + "hide" + commandGroupName, () => {
				hideToolGroup(currentToolGroup);
				showToolGroup(MAIN_GROUPS);
			})
		];
	return <any>retVal;
}

function hideToolGroup(toolGroupToHide: string, skippedToolGroup: string = ""): void
{
	if(toolGroupToHide !== skippedToolGroup)
		vscode.commands.executeCommand("setContext", toolGroupToHide, false);
}

function hideAllToolGroups(skippedToolGroup: string = ""): void
{
	hideToolGroup(NAVIGATION_TOOLS, skippedToolGroup);
	hideToolGroup(DEFINITION_TOOLS, skippedToolGroup);
	hideToolGroup(DEBUG_TOOLS, skippedToolGroup);
	hideToolGroup(MISC_TOOLS, skippedToolGroup);
}

function showToolGroup(toolGroupToShow: string, skippedToolGroup: string = ""): void
{
	if(toolGroupToShow !== skippedToolGroup)
		vscode.commands.executeCommand("setContext", toolGroupToShow, true);
}

function showAllToolGroups(skippedToolGroup: string = ""): void
{
	showToolGroup(NAVIGATION_TOOLS, skippedToolGroup);
	showToolGroup(DEFINITION_TOOLS, skippedToolGroup);
	showToolGroup(DEBUG_TOOLS, skippedToolGroup);
	showToolGroup(MISC_TOOLS, skippedToolGroup);
}


export function deactivate()
{
	// Does nothing.
}
