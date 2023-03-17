import type { ReactNode } from 'react';

type GetIconArgs = {
  isChecked: boolean;
  icon: ReactNode | undefined;
  iconOn: ReactNode | undefined;
  iconOff: ReactNode | undefined;
};

export function getIcon(args: GetIconArgs) {
  const { isChecked, icon, iconOn, iconOff } = args;

  if (isChecked) {
    return iconOn ? iconOn : icon;
  }

  if (!isChecked) {
    return iconOff ? iconOff : icon;
  }
}
