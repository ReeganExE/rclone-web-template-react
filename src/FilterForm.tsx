/* eslint-disable jsx-a11y/anchor-is-valid */
import debounce from 'lodash.debounce';
import { useMemo, useRef, useState } from 'react';

export function FilterForm({ onChange }: { onChange(value: string): void; }) {
  const [term, setTerm] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceChange = useMemo(() => {
    return debounce(onChange, 300);
  }, [onChange]);

  const setValue = (v: string) => {
    setTerm(v);
    debounceChange(v);
  };

  return (
    <div className='filter-wrapper'>
      <form>
        <input
          ref={inputRef}
          autoFocus
          type='text'
          placeholder='Filter'
          id='filter'
          value={term}
          onChange={(e) => setValue(e.target.value)} />
        <a
          href='#'
          onClick={(e) => {
            e.preventDefault();
            setValue('');
            inputRef.current?.focus();
          }}
        >
          Clear filter
        </a>
      </form>
    </div>
  );
}
