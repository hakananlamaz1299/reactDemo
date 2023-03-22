import appCss from './App.module.css'

import { Tab } from './Tab';


export const App =  function App() {
  return (
    <Tab activeTab="1">
      <Tab.Panel title="Home" panelColor="red">Panel 1</Tab.Panel>
      <Tab.Panel title="About" panelColor="magenta">Panel 2</Tab.Panel>
      <Tab.Panel title="Contact" panelColor="brown">Panel 3</Tab.Panel>
    </Tab>
  );
}
