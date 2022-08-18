import { Component, For } from 'solid-js';
import { Icon } from 'solid-heroicons';
import { chevronDown } from 'solid-heroicons/outline';

export interface DropdownItem {
  icon: { path: () => Element | Element[] | string; outline: boolean };
  label: string;
  onClick: () => void;
}

interface Props {
  label: string;
  items: DropdownItem[];
}

export const Dropdown: Component<Props> = ({ label, items }) => {
  return (
    <div class="group h-full min-w-[11rem] relative">
      <button class="inline text-white text-xl bg-red-900 h-full px-2 hover:scale-105 w-full">
        {label}
        <Icon path={chevronDown} class="w-6 inline ml-3 stroke-2" />
      </button>

      <div class="hidden absolute group-hover:flex flex-col bg-gray-100 drop-shadow-lg rounded-lg before:h-1 w-full text-red-800 divide-y-2">
        <For each={items}>
          {(item) => (
            <p
              class="py-2 px-1 flex items-center hover:bg-gray-200 cursor-pointer rounded-lg"
              onClick={item.onClick}
            >
              <Icon path={item.icon} class="w-6 inline mr-1" />
              {item.label}
            </p>
          )}
        </For>
      </div>
    </div>
  );
};
