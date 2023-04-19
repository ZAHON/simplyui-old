import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '@simplyui/react/src';

export default {
  title: 'Data display/Table',
  component: Table,
  args: {
    children: <TableContent />,
    size: 'md',
    variant: 'simple',
    layout: 'auto',
    horizontalSpacing: 'xs',
    verticalSpacing: 'xs',
    captionSide: 'top',
    highlightOnHover: false,
    withColumnBorders: false,
    withRowBorders: true,
    withBorder: false,
    withHeadAccent: false,
    withFootAccent: false,
  },
  argTypes: {
    children: { control: false },
    size: { control: 'select' },
    variant: { control: 'select' },
    layout: { control: 'select' },
    horizontalSpacing: { control: 'select' },
    verticalSpacing: { control: 'select' },
    captionSide: { control: 'select' },
    wrapperProps: { control: false },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

export const HighlightOnHover = Template.bind({});
HighlightOnHover.args = {
  highlightOnHover: true,
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  withBorder: true,
};

export const WithColumnBorders = Template.bind({});
WithColumnBorders.args = {
  withColumnBorders: true,
};

export const WithHeadAccent = Template.bind({});
WithHeadAccent.args = {
  withHeadAccent: true,
};

export const WithFootAccent = Template.bind({});
WithFootAccent.args = {
  withFootAccent: true,
};

export const SimpleVariant = Template.bind({});
SimpleVariant.args = {
  variant: 'simple',
};

export const StripedOddVariant = Template.bind({});
StripedOddVariant.args = {
  variant: 'striped-odd',
};

export const StripedEvenVariant = Template.bind({});
StripedEvenVariant.args = {
  variant: 'striped-even',
};

export const AutoLayout = Template.bind({});
AutoLayout.args = {
  layout: 'auto',
};

export const FixedLayout = Template.bind({});
FixedLayout.args = {
  layout: 'fixed',
};

function TableContent() {
  return (
    <>
      <caption>Some elements from periodic table</caption>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>Helium</td>
          <td>He</td>
          <td>4.0026</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Carbon</td>
          <td>C</td>
          <td>12.011</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Nitrogen</td>
          <td>N</td>
          <td>14.007</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Magnesium</td>
          <td>Mg</td>
          <td>24.305</td>
        </tr>
        <tr>
          <td>19</td>
          <td>Potassium</td>
          <td>K</td>
          <td>39.0983</td>
        </tr>
        <tr>
          <td>29</td>
          <td>Copper</td>
          <td>Cu</td>
          <td>63.55</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </tfoot>
    </>
  );
}
