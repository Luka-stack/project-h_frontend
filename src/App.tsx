import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';

import { Header } from './components/header';
import { HomePage } from './pages/home';

const App: Component = () => {
  return (
    <div class="h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
