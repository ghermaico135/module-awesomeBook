import { DateTime } from './lexon.js';

const showDate = () => {
  const now = DateTime.now();
  let content = '';
  const customDateFormat = {
    ...DateTime.DATE_FULL,
    ...DateTime.TIME_WITH_SECONDS,
  };
  content += `
<div id="current-date" class="px-2 float-end">
${now.toLocaleString(customDateFormat)}
</div>
`;
  return content;
};

export default showDate;
