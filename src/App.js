import appCss from './App.module.css'

import { Tab } from './Tab';


export const App =  function App() {
  return (
    <Tab activeTab="1">
      <Tab.Panel title="AnaSayfa" panelYazisi="kirmizi">Panel 1</Tab.Panel>
      <Tab.Panel title="Hakkımda" panelYazisi="mor">Panel 2</Tab.Panel>
      <Tab.Panel title="Contact" panelYazisi="kahverengi">Panel 3</Tab.Panel>
    </Tab>
  );
}
