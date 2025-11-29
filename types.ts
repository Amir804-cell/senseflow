import React from 'react';

export interface ComponentPart {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ViewState {
  ASSEMBLED,
  EXPLODED
}