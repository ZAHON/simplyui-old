import React from 'react';
import { BookmarkIcon, WrenchkIcon, ExclamationTriangleIcon } from '../../icons';
import { Tabs, TabsList, TabsTrigger, TabsPanel } from '@simplyui/react/src';

export default {
  title: 'Navigation/Tabs',
};

export const Default = () => (
  <Tabs defaultValue="gallery">
    <TabsList>
      <TabsTrigger value="gallery">Gallery</TabsTrigger>
      <TabsTrigger value="messages">Messages</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
    </TabsList>
    <TabsPanel value="gallery">Gallery tab content</TabsPanel>
    <TabsPanel value="messages">Messages tab content</TabsPanel>
    <TabsPanel value="settings">Settings tab content</TabsPanel>
  </Tabs>
);

export const Sizes = () => (
  <div className="flex flex-col gap-y-8">
    <Tabs size="xs" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
    <Tabs size="sm" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
    <Tabs size="md" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
    <Tabs size="lg" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
    <Tabs size="xl" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
  </div>
);

export const Colors = () => (
  <div className="flex flex-col gap-y-8">
    <Tabs color="neutral" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs color="primary" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs color="secondary" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs color="info" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs color="success" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs color="warning" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs color="error" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
);

export const ChangeTabColors = () => (
  <Tabs color="info" defaultValue="color-info">
    <TabsList>
      <TabsTrigger value="color-info">Color info</TabsTrigger>
      <TabsTrigger color="warning" value="color-warning">
        Color warning
      </TabsTrigger>
    </TabsList>
    <TabsPanel value="color-info">
      First tab color is info color, it gets this value from context
    </TabsPanel>
    <TabsPanel value="color-warning">
      Second tab color is warning color, it gets this value from props, props have the priority and
      will override context value
    </TabsPanel>
  </Tabs>
);

export const WithDisabledTrigger = () => (
  <Tabs defaultValue="gallery">
    <TabsList>
      <TabsTrigger value="gallery">Gallery</TabsTrigger>
      <TabsTrigger value="messages">Messages</TabsTrigger>
      <TabsTrigger disabled value="settings">
        Settings
      </TabsTrigger>
      <TabsTrigger value="account">Account</TabsTrigger>
    </TabsList>
    <TabsPanel value="gallery">Gallery tab content</TabsPanel>
    <TabsPanel value="messages">Messages tab content</TabsPanel>
    <TabsPanel value="settings">Settings tab content</TabsPanel>
    <TabsPanel value="account">Account tab content</TabsPanel>
  </Tabs>
);

export const Variants = () => (
  <div className="flex flex-col gap-y-8">
    <Tabs variant="default" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
    <Tabs variant="pills" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
  </div>
);

export const TabOnTheOppositeSide = () => (
  <Tabs defaultValue="gallery">
    <TabsList>
      <TabsTrigger value="gallery">Gallery</TabsTrigger>
      <TabsTrigger value="messages">Messages</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
      <TabsTrigger value="account" className="ml-auto">
        Account
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

export const Positions = () => (
  <div className="flex flex-col gap-y-8">
    <Tabs defaultValue="gallery">
      <TabsList grow>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs defaultValue="gallery">
      <TabsList position="left">
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs defaultValue="gallery">
      <TabsList position="right">
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs defaultValue="gallery">
      <TabsList position="center">
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs defaultValue="gallery">
      <TabsList position="apart">
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
);

export const ActivationMode = () => (
  <div className="flex flex-col gap-y-8">
    <Tabs activationMode="automatic" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
    <Tabs activationMode="manual" defaultValue="gallery">
      <TabsList>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value="gallery">Gallery tab content</TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
  </div>
);

export const TriggerWithIcon = () => (
  <div className="flex flex-col gap-y-8">
    <Tabs defaultValue="bookmarks">
      <TabsList>
        <TabsTrigger value="bookmarks" leftSection={<BookmarkIcon size="1rem" />}>
          Bookmarks
        </TabsTrigger>
        <TabsTrigger value="alerts" leftSection={<ExclamationTriangleIcon size="1rem" />}>
          Alerts
        </TabsTrigger>
        <TabsTrigger value="settings" leftSection={<WrenchkIcon size="1rem" />}>
          Settings
        </TabsTrigger>
      </TabsList>
    </Tabs>
    <Tabs defaultValue="bookmarks">
      <TabsList>
        <TabsTrigger value="bookmarks" rightSection={<BookmarkIcon size="1rem" />}>
          Bookmarks
        </TabsTrigger>
        <TabsTrigger value="alerts" rightSection={<ExclamationTriangleIcon size="1rem" />}>
          Alerts
        </TabsTrigger>
        <TabsTrigger value="settings" rightSection={<WrenchkIcon size="1rem" />}>
          Settings
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
);
