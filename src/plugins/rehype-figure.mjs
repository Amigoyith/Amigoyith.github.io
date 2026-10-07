// Turns a paragraph holding only an image into a <figure>, using the
// image's alt text as the caption. Lets project pages stay plain Markdown:
//   ![Logic analyzer capture of one SPI read](./images/spi-single.jpg)
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
      if (kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'img') {
        const img = kids[0];
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
    }
    visit(child);
    return child;
  });
}
