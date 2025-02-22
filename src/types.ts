import type { Component } from 'vue';

export interface Tab {
  key: string;
  label: string;
  component: Component;
}

export type TabKey = 'General' | 'Notifications' | 'Privacy';
