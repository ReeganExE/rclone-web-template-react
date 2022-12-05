function TableList({ items }: { items: RCloneItem[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Actions</th>
          <th>Size</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>
            <a href='..'>Go up</a>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {items.map((item, idx) => (
          <tr key={item.url}>
            <td>{idx + 1}</td>
            <td className='name-cell'>
              <Icon item={item} />
              <span className='name'>
                <a
                  href={
                    item.isDir
                      ? item.url
                      : `iina://weblink?url=${
                          window.location.origin +
                          window.location.pathname +
                          item.url
                        }`
                  }
                >
                  {item.name}
                </a>
              </span>
            </td>
            <td className='actions'>
              {item.isDir ? null : (
                <div id='actions-wrapper'>
                  <a
                    href={
                      item.isDir
                        ? item.url
                        : `iina://weblink?url=${
                            window.location.origin +
                            window.location.pathname +
                            item.url
                          }`
                    }
                  >
                    <img
                      alt='Open with IINA'
                      title='Open with IINA'
                      width={24}
                      src='https://iina.io/images/iina-icon-60.png'
                    />
                  </a>
                  <a href={item.url}>
                    <i className='fa-sharp fa-solid fa-download'></i>
                  </a>
                </div>
              )}
            </td>
            <td>{item.isDir ? '--' : readableFileSize(item.size)}</td>
            <td>{item.modTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Icon({ item }: { item: RCloneItem }) {
  return (
    <span>
      <svg width='1rem' height='1.2rem' version='1.1' viewBox='0 0 317 259'>
        <use xlinkHref={item.isDir ? '#folder' : '#file'}></use>
      </svg>
    </span>
  );
}

function readableFileSize(size: string | number) {
  size = Number(size);
  var units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var i = 0;
  while (size >= 1024) {
    size /= 1024;
    ++i;
  }
  return size.toFixed(2) + ' ' + units[i];
}

export default TableList;
