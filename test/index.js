/**
 * @license
 * Copyright 2022 MIT
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Plugin test.
 */

import * as Blockly from 'blockly';
import {toolboxCategories, createPlayground} from '@blockly/dev-tools';
import {Multiselect} from '../src/index';
import {Backpack} from '@blockly/workspace-backpack';
import {NavigationController} from '@blockly/keyboard-navigation';
import {shadowBlockConversionChangeListener} from '@blockly/shadow-block-converter';
import {ContentHighlight} from "@blockly/workspace-content-highlight";
import {DisableTopBlocks} from "@blockly/disable-top-blocks";

/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @returns {!Blockly.WorkspaceSvg} The created workspace.
 */
function createWorkspace(blocklyDiv, options) {
  const workspace = Blockly.inject(blocklyDiv, options);

  // Initialize backpack plugin.
  const backpack = new Backpack(workspace);
  backpack.init();

  // // KEYBOARD NAVIGATION PLUGIN (DONE) ============================================================
  // // Initialize plugin.
  //   const navigationController = new NavigationController();
  //   navigationController.init();
  //   navigationController.addWorkspace(workspace);
  // // Turns on keyboard navigation.
  //   navigationController.enable(workspace);

  // // SHADOW BLOCK CONVERTER PLUGIN (DONE) =========================================================
  workspace.addChangeListener(shadowBlockConversionChangeListener);

  // // CONTENT HIGHLIGHT PLUGIN (DONE) ==============================================================
  // // Initialize plugin.
  // const contentHighlight = new ContentHighlight(workspace);
  // contentHighlight.init();

  // // DISABLE TOP BLOCKS PLUGIN (DONE) ==============================================================
  // // The plugin must be initialized before it has any effect.
  // const disableTopBlocksPlugin = new DisableTopBlocks();
  // disableTopBlocksPlugin.init();

  // const multiselectPlugin = new Multiselect(workspace);
  // multiselectPlugin.init(options);
  return workspace;
}

document.addEventListener('DOMContentLoaded', function() {
  const defaultOptions = {
    toolbox: toolboxCategories,
    useDoubleClick: true,
    bumpNeighbours: false,
    multiFieldUpdate: true,
    multiselectIcon: {
      hideIcon: false,
      weight: 3,
      enabledIcon: 'media/select.svg',
      disabledIcon: 'media/unselect.svg',
    },
    multiSelectKeys: ['Shift'],
    multiselectCopyPaste: {
      crossTab: true,
      menu: true,
    },
    grid: {
      spacing: 25,
      length: 3,
      colour: '#ccc',
      snap: true,
    },
    move: {
      wheel: true,
    },
    zoom: {
      wheel: true,
    },
  };
  createPlayground(document.getElementById('root'), createWorkspace,
      defaultOptions);
});
