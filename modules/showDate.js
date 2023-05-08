/** @format */
import { DateTime } from './lexon.js';

const showDate = () => {
  const now = DateTime.now();
  let content = '';
  content += `
<div id="current-date" class="p-2 float-end">
<h3 class="text-dark">${now}</h3>
</div>
`;
  return content;
};

export default showDate;
