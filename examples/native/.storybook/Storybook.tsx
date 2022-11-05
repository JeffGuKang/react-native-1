import { getStorybookUI } from '@storybook/react-native';

import './doctools';
import './storybook.requires';

const StorybookUIRoot = getStorybookUI({
  // initialSelection: { kind: 'TextInput', name: 'Basic' },
  shouldPersistSelection: true,
});

export default StorybookUIRoot;
