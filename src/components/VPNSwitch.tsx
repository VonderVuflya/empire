import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface Props {
  onToggle?: (checked: boolean) => void;
}

export default function VPNSwitch({ onToggle }: Props) {
  const [checked, setChecked] = useState(true);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);

    window.dispatchEvent(new CustomEvent('vpn-toggle', {
      detail: newChecked
    }));

    onToggle?.(newChecked);
  };

  return (
    <div className='flex flex-1 justify-end items-center space-x-2'>
      <Label htmlFor="vpn-switch" className='hover:cursor-pointer'>YouTube/VK</Label>
      <Switch
        id="vpn-switch"
        checked={checked}
        onCheckedChange={handleChange}
      />
    </div>
  );
}
