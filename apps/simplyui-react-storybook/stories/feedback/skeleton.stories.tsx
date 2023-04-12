import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from '@simplyui/react/src';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  args: {
    visible: true,
    animated: true,
    fitContent: false,
    speedSafe: 1500,
    speedReduce: 3000,
    rounded: undefined,
  },
  argTypes: {
    className: { control: false },
    style: { control: false },
    children: { control: false },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'h-10',
};

export const WithContent = Template.bind({});
WithContent.args = {
  children: (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus obcaecati amet doloremque, eum
      magnam quo, velit excepturi officia sequi iusto libero repudiandae officiis, esse et
      voluptates rem ducimus expedita nemo! Fugit tempore amet numquam ratione non consequuntur
      illum itaque. Accusantium sapiente at voluptatum nisi. Voluptatibus qui id quaerat, iste
      maiores laudantium ullam alias tempore delectus, quasi odit tempora! Repellendus error officia
      ipsum, similique deleniti optio sit eaque, reprehenderit facilis iusto itaque consequuntur
      molestiae aut numquam et vel alias nam debitis. Omnis, dignissimos. In veniam quaerat
      dignissimos doloremque nobis neque dicta qui voluptatibus. Itaque exercitationem ratione fugit
      aut asperiores quia velit praesentium porro, sint, officia aspernatur ab, cumque ex laboriosam
      adipisci ipsum quasi consectetur dicta voluptate impedit ea unde. Modi impedit debitis nobis
      harum temporibus praesentium labore sit itaque quam quasi quia, exercitationem fugiat
      reiciendis earum amet sunt esse nam. Similique at quas aut esse necessitatibus cupiditate
      suscipit ullam natus omnis aperiam! Vero quaerat odio veritatis magni consequatur iusto,
      dignissimos quia totam temporibus in mollitia quas placeat voluptate tenetur fugit blanditiis
      esse similique sapiente non nobis illum. Omnis, aliquam laboriosam officia rem unde laborum
      distinctio voluptas itaque necessitatibus explicabo nisi fugit alias est culpa nesciunt
      perferendis eos, sint ex placeat iure!
    </p>
  ),
};

export const WithCircleElementAsContent = Template.bind({});
WithCircleElementAsContent.args = {
  fitContent: true,
  rounded: 'full',
  children: (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://i.pravatar.cc/150"
      alt="User avatar"
      className="block h-20 w-20 rounded-full"
    />
  ),
};
