import { ComponentMeta, ComponentStoryObj } from '@storybook/react-native';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: { borderColor: 'darkgrey', borderWidth: 1, padding: 8, borderRadius: 4 },
});

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type something here',
  },
  parameters: {
    notes: 'Use this example to test the software keyboard related issues.',
  },
} as ComponentMeta<typeof TextInput>;

type TextInputStory = ComponentStoryObj<typeof TextInput>;

export const Basic: TextInputStory = {
  play: (_context) => {
    console.log('play!!');
  },
  args: {
    underlineColorAndroid: 'transparent',
    style: styles.input,
  },
};
