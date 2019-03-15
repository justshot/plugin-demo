import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomTaskListComponent from './CustomTaskListComponent';

const PLUGIN_NAME = 'ThemePlugin';

export default class ThemePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    // override theme styles
    manager.updateConfig({colorTheme: { baseName: "DarkGrey"}})
    flex.MainHeader.defaultProps.logoUrl = "http://iconsetc.com/icons-watermarks/simple-ios-orange-gradient/foundation/foundation_compass/foundation_compass_simple-ios-orange-gradient_256x256.png";
  }
}