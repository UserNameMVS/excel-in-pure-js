const ASCII_CODES = {
  A: 65,
  Z: 90,
}

function createRow(content) {
  return `
    <div class="row">
      ${content}
    </div>
  `
}

function createCell(className, content = '', isContenteditable) {
  return `
    <div class=${className} ${isContenteditable ? 'contenteditable' : ''}>${content}</div>
  `
}

export function renderRows(countRows = 50) {
  const TOTAL_COLUMNS = ASCII_CODES.Z - ASCII_CODES.A + 1;

  const generateRowData = isHeader => {
    return Array.from({ length: TOTAL_COLUMNS }, (_, colIndex) => {
      if (isHeader) {
        return createCell('column', String.fromCharCode(ASCII_CODES.A + colIndex), false);
      }
      return createCell('column', '', true);
    }).join('');
  };

  return Array.from({ length: countRows + 1 }, (_, index) => {
    const rowContent = [
      createCell('row-info', index === 0 ? '' : index),
      `<div class='row-data'>${generateRowData(index === 0, index)}</div>`
    ].join('');

    return createRow(rowContent);
  }).join('');
}
