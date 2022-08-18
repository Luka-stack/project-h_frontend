import type { Component } from 'solid-js';
import { clipboardList, cog, search, truck } from 'solid-heroicons/solid';
import { Dropdown } from './dropdown';

const clientsItems = [
  {
    icon: clipboardList,
    label: 'Opublikuj ofertę',
    onClick: () => console.log('Opublikuj ofert'),
  },
  {
    icon: cog,
    label: 'Jak to działa',
    onClick: () => console.log('Jak to działa'),
  },
  {
    icon: search,
    label: 'Znajdź zawód',
    onClick: () => console.log('Znajdź zawód'),
  },
];

const membersItems = [
  {
    icon: truck,
    label: 'Rejestracja',
    onClick: () => console.log('Trade Registration'),
  },
  {
    icon: cog,
    label: 'Jak to działa',
    onClick: () => console.log('Jak to działa'),
  },
  {
    icon: search,
    label: 'Znajdź ofertę',
    onClick: () => console.log('Znajdź ofertę'),
  },
];

export const Header: Component = () => {
  return (
    <div class="w-full h-14 bg-red-800">
      <header class="max-w-5xl flex justify-between h-full mx-auto">
        {/* Left Side - Logo */}
        <div
          class="relative text-white ml-4 cursor-pointer"
          onClick={() => console.log('Move to home page')}
        >
          <h1 class="absolute font-bold text-xl">Złota</h1>
          <h1 class="absolute font-bold text-xl top-6 left-6">Rączka</h1>
        </div>

        {/* Right Side - buttons */}
        <div class="mr-4 flex items-center h-[80%] my-auto space-x-1">
          <button class="inline text-white text-xl h-full px-2 hover:scale-105 border-2 border-white hover:bg-red-900">
            Opublikuj ofertę
          </button>
          <Dropdown label="Klienci" items={clientsItems} />
          <Dropdown label="Specjaliści" items={membersItems} />
          <button class="inline text-white text-xl bg-red-900 h-full px-2 hover:scale-105">
            Zaloguj
          </button>
        </div>
      </header>
    </div>
  );
};
