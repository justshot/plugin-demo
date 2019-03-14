import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomCRM from './CustomCRM';
import customThemeOverrides from './customThemeOverrides';

const PLUGIN_NAME = 'CustomCRM Plugin';

export default class CustomcrmPlugin extends FlexPlugin {
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
    manager.updateConfig({
      colorTheme: {
        baseName: "GreyDark",
        colors: {
          darkTextColor: "#e0e0e0",
        },
        overrides: customThemeOverrides
      }
    });

    manager.strings.TaskHeaderLine = "{{task.attributes.account_data.first_name}} {{task.attributes.account_data.last_name}}";
    manager.strings.TaskLineCallReserved = "SLA: {{task.attributes.account_data.service_level}}";
    flex.AgentDesktopView.Panel2.Content.remove("container")
    flex.AgentDesktopView.Panel2.Content.add(<CustomCRM key="custom_crm" manager={manager} />)
  }
}