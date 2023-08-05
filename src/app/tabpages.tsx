// pages/TabPage.tsx
import Tab from '../../src/app/tab';

const TabPage: React.FC = () => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const content = [
    <div  key="tab1">Contenido de la pestaña 1</div>,
    <div key="tab2">Contenido de la pestaña 2</div>,
    <div  key="tab3">Contenido de la pestaña 3</div>,
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pestañas con contenido</h1>
      <Tab tabs={tabs} content={content} />
    </div>
  );
};

export default TabPage;



