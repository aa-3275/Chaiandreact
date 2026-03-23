function customRender(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children.join("");
  domElement.setAttribute("href", element.props.href);
  domElement.setAttribute("target", element.props.target);
  container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: ["Go to Google"],
};
const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);
