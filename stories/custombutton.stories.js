import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import CustomButton from '../src/components/CustomButton';

const stories = storiesOf('Custom Buttom', module);
stories.addDecorator(withKnobs);

stories.add('Primary Contained', () => {
  const label = text('Label', 'Hello Button');
  return (
    <CustomButton
      variant="contained"
      color="primary"
      onClick={action('Clicked')}
    >
      {label}
    </CustomButton>
  );
});
