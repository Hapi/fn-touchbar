# fn Touchbar README

fn Touchbar adds the most common function key commands directly to Touchbar. You can select your own subset of
buttons and by allowing groups all command buttons will be available.


## Features

Here are examples of how your Touchbar may look like.

This is default settings:
![fn Touchbar default](images/fn-touchbar-01.png)

Maximum number of tools (until you change the configuration of the right side of Touchbar):
![fn Touchbar max](images/fn-touchbar-02.png)

Other possible configurations and situations:
![fn Touchbar option](images/fn-touchbar-03.png)
![fn Touchbar option](images/fn-touchbar-04.png)
![fn Touchbar option](images/fn-touchbar-05.png)
![fn Touchbar option](images/fn-touchbar-06.png)

As you can see, you are able to disable Visual Studio Code default buttons to get more room for fn Touchbar buttons.


### Available commands

**Important** If `fnTouchbar.all.useToolGroups` is disabled then tool groups are not shown but only selected command
buttons are shown instead.

***⚠️* If too many command buttons are enabled none of them are shown in Touchbar** as they all do not fit to Touchbar
at the same time. To fix the problem disable enough command buttons so that the other buttons start to be visible
in Touchbar.


| No group command | Icon | Description |
|------------------|------|-------------|
| com.harrihalttunen.fnTouchbar.action.navigateBack | < | Navigate back, a replacement for `workbench.action.navigateBack` but with a smaller button |
| com.harrihalttunen.fnTouchbar.action.navigateForward | > | Navigate forward, a replacement for `workbench.action.navigateForward` but with a smaller button |


| Debug 🐞 | Icon | Description |
|----------|------|-------------|
| com.harrihalttunen.fnTouchbar.debug.start | ▶ | Debug, a replacement for `workbench.action.debug.start` but with smaller button |
| com.harrihalttunen.fnTouchbar.debug.run | ▷ | Run, a replacement for `workbench.action.debug.run` but with smaller button |
| editor.debug.action.toggleBreakpoint | ● | Toggle a breakpoint |
| editor.debug.action.addLogPoint | ♦ | Add a logpoint. Logs to console instead of stopping execution |
| workbench.view.debug | ◧🐞 | Show debug side bar |

| Navigation ⎈ | Icon | Description |
|--------------|------|-------------|
| editor.action.previousSelectionFindAction | ←🔍 | Find previous selection |
| editor.action.nextSelectionFindAction | 🔎→ | Find next selection |
| workbench.view.search | ◧🔎 | Show search side bar |
| editor.action.marker.prevInFiles | ←⚠ | Go to previous problem |
| editor.action.marker.nextInFiles | ⚠→ | Go to next problem |
| workbench.action.showErrorsWarnings | ⚠⬓ | Show errors and warnings panel |

| Definition ƒ() | Icon | Description |
|----------------|------|-------------|
| editor.action.revealDefinition | →ƒ() | Reveal definition |
| editor.action.goToReferences | ƒ()→ | Go to references |
| editor.action.peekDefinition | 👁ƒ() | Peek definition |
| references-view.findReferences | 🔎ƒ() | Find references |
| editor.action.revealDefinitionAside | ƒ()◨ | Reveal defintion aside |
| references-view.findImplementations | ƒ()⇶ | Find all implementations |

| Miscellaneous ⋯ | Icon | Description |
|-----------------|------|-------------|
| editor.action.rename | ✎… | Rename |
| workbench.action.splitEditor | ◫ | Split editor |
| workbench.action.togglePanel | ⬓ | Toggle panel |
| workbench.action.terminal.toggleTerminal | $>⬓ | Open integrated terminal |
| workbench.action.toggleZenMode | ▣ | Zen mode |
| workbench.action.showCommands | F1 | Show commands (⇧ ⌘ P) |



## Extension Settings

fn Touchbar allows you to enable each button individually no matter if groups are in effect or not. You are able
to disable Visual Studio Code default buttons to get more room for fn Touchbar buttons.

* `fnTouchbar.all.useToolGroups`, (default `false`) Sets if the tool groups are enabled or not. If this is disabled then all the selected tools are visible simultaneously but the number of tools is limited about to 4 - 11 depending on other Touchbar settings. If none of tools are not shown star disabling command buttons till other command start to appear in Touchbar. If tool groups are enabled then more of the fn Touchbar tools (possibly all of them depending on other Touchbar settings) can be added to Touchbar and they are available behind group buttons. See also `#fnTouchbar.default.navigateBack#`, `#fnTouchbar.default.navigateForward#`, `#fnTouchbar.debug.start#` and `#fnTouchbar.debug.run#` settings to get out the most of fn Touchbar.
* `fnTouchbar.default.navigateBack`, (default `false`) Enables button < (Navigate back). This creates a little bit smaller button into the Touchbar thus giving more room for other buttons. This is recommened to be enabled if `workbench.action.navigateBack` is disabled from Touchbar (`#keyboard.touchbar.ignored#`) or vice versa.
* `fnTouchbar.default.navigateForward`, (default `false`) Enables button > (Navigate forward).  This creates a little bit smaller button into the Touchbar thus giving more room for other buttons. This recommened to be enabled if `workbench.action.navigateForward` is disabled from Touchbar (`#keyboard.touchbar.ignored#`) or vice versa.
* `fnTouchbar.debug.start`, (default `false`) Enables button ▶ (Debug). This creates a little bit smaller button into the Touchbar thus giving more room for other buttons. This recommened to be enabled if `workbench.action.debug.start` is disabled from Touchbar (`#keyboard.touchbar.ignored#`) or vice versa.
* `fnTouchbar.debug.run`, (default `false`) Enables button ▷ (Run). This creates a little bit smaller button into the Touchbar thus giving more room for other buttons. This recommened to be enabled if `workbench.action.debug.run` is disabled from Touchbar (`#keyboard.touchbar.ignored#`) or vice versa.
* `fnTouchbar.debug.toggleBreakpoint`, (default `true`) Enables button ● (Toggle breakpoint).
* `fnTouchbar.debug.addLogpoint`, (default `false`) Enables button ♦ (Add logpoint).
* `fnTouchbar.debug.debugView`, (default `false`) Enables button ◧🐞 (Show debug).
* `fnTouchbar.navigation.previousSelectionFindAction`, (default `true`) Enables button ←🔍 (Find previous selection).
* `fnTouchbar.navigation.nextSelectionFindAction`, (default `true`) Enables button 🔎→ (Find next selection).
* `fnTouchbar.navigation.searchView`, (default `false`) Enables button ◧🔎 (Show search).
* `fnTouchbar.navigation.prevInFiles`, (default `false`) Enables button ←⚠ (Go to previous problem).
* `fnTouchbar.navigation.nextInFiles`, (default `false`) Enables button ⚠→ (Go to next problem).
* `fnTouchbar.navigation.showErrorsWarnings`, (default `false`) Enables button ⚠⬓ (Show problems).
* `fnTouchbar.definition.revealDefinition`, (default `true`) Enables button →ƒ() (Reveal definition).
* `fnTouchbar.definition.goToReferences`, (default `false`) Enables button ƒ()→ (Go to references).
* `fnTouchbar.definition.peekDefinition`, (default `false`) Enables button 👁ƒ() (Peek definition).
* `fnTouchbar.definition.findReferences`, (default `false`) Enables button 🔎ƒ() (Find all references).
* `fnTouchbar.definition.revealDefinitionAside`, (default `false`) Enables button ƒ()◨ (Open definition to the side).
* `fnTouchbar.definition.findImplementations`, (default `false`) Enables button ƒ()⇶ (Find all implementations).
* `fnTouchbar.misc.rename`, (default `true`) Enables button ✎… (Rename).
* `fnTouchbar.misc.splitEditor`, (default `false`) Enables button ◫ (Split editor).
* `fnTouchbar.misc.togglePanel`, (default `false`) Enables button ⬓ (Toggle panel).
* `fnTouchbar.misc.toggleTerminal`, (default `false`) Enables button $>⬓ (Toggle integrated terminal).
* `fnTouchbar.misc.toggleZenMode`, (default `false`) Enables button ▣ (Toggle zen mode).
* `fnTouchbar.misc.showCommands`, (default `false`) Enables button F1 (Show command palette).


### Number of command buttons
Notice that the number of buttons that are able to be shown depends on other Touchbar settings. If default
Visual Studio Code settings are used then five (5) additional buttons can be added. In practice this means:

* without groups five (5) additional command buttons can be added
* with groups, each group can have maximum of four (4) command buttons per group

**⚠️ IMPORTANT!** If too many command buttons are enabled none of them are shown in Touchbar.


### Disabling Visual Studio Code default buttons

If more room for fn Touchbar command buttons are desired then you have an option to disable Visual Studio Code
default command buttons by adding the following settings to `settings.json`:

```json
    "keyboard.touchbar.ignored": [
        "workbench.action.navigateForward",
        "workbench.action.navigateBack",
        "workbench.action.debug.start",
        "workbench.action.debug.run"
    ],
```


## Recommended settings

### Maximum number of tools without groups
 1. Disable all Visual Studio Code default buttons (see above)
 2. Enable maximum of eleven (11) buttons (otherwise all buttons are hidden)
    * It is recommended to have these enabled:
        * `fnTouchbar.default.navigateBack`
        * `fnTouchbar.default.navigateForward`


### Enable all command buttons with groups

1. Disable Visual Code Studio debug buttons (Start and Run commands):
```json
    "keyboard.touchbar.ignored": [
        "workbench.action.debug.start",
        "workbench.action.debug.run"
    ],
```
2. Enable `fnTouchbar.all.useToolGroups`
3. Enable all command buttons



## Troubleshooting

If the command buttons are not shown you probably have enabled too many command buttons for the situation.
Try disabling additional command buttons.


## Known Issues

Not known at the moment.
