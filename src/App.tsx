import { useCallback, useState } from 'react';
import { FilterForm } from './FilterForm';
import TableList from './TableList';

function App() {
  const [visibleItems, setVisibleItems] = useState<RCloneItem[]>(window.items);
  const onFilterChange = useCallback((term: string) => {
    setVisibleItems(
      window.items.filter((v) =>
        v.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  }, []);

  return (
    <div className='App'>
      <div>
        <FilterForm onChange={onFilterChange} />
        <TableList items={visibleItems} />
      </div>
    </div>
  );
}

export default App;
