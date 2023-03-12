export const removeHTMLTags = (content: string): string => {
  const regex = /(<p>|<\/p>|<b>|<\/b>|<i>|<\/i>)/gi;
  return content.replace(regex, '');
};
