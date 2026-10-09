// Turns a paragraph holding only an image into a <figure>, using the
// image's alt text as the caption. Lets project pages stay plain Markdown:
//   ![Logic analyzer capture of one SPI read](./images/spi-single.jpg)
// Several images in one paragraph become a side-by-side row of figures.
export default function rehypeFigure() {
  return (tree) => visit(tree);
}

function visit(node) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    if (child.type === 'element' && child.tagName === 'p') {
      const kids = child.children.filter(
        (c) => !(c.type === 'text' && c.value.trim() === ''),
      );
      const allImages = kids.length > 0 && kids.every((c) => c.type === 'element' && c.tagName === 'img');
      if (allImages && kids.length === 1) return figure(kids[0]);
      if (allImages) {
        return { type: 'element', tagName: 'div', properties: { className: ['figure-row'] }, children: kids.map(figure) };
      }
    }
    visit(child);
    return child;
  });
}

function figure(img) {
  const caption = img.properties?.alt;
  return {
    type: 'element',
    tagName: 'figure',
    properties: {},
    children: caption
      ? [img, { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: caption }] }]
      : [img],
  };
}
