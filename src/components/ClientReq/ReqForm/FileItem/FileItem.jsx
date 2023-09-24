import './FileItem.css';

function FileItem({ name, size, onDelete }) {
  function sizeToString(bytes) {
    let res = parseFloat(bytes / 1024);
    if (res / 1024 > 1) {
      res = parseFloat(res / 1024).toFixed(0) + ' МБ';
    } else {
      res = res.toFixed(0) + ' КБ';
    }
    return res;
  }

  return (
    <div className='file-item'>
      <div className='file-item__name'>{name}</div>
      <div className='file-item__size'>({sizeToString(size)})</div>
      <div className='file-item__delete' onClick={() => onDelete(name)}></div>
    </div>
  );
}

export default FileItem;
