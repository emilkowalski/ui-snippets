import rawCss from "@/styles";

const initialEffects = [
  {
    className: "borderLeftRight",
    category: "text",
    html: "Hover me"
  },
  {
    className: "donutSpinner",
    category: "animation"
  },
  {
    className: "pulseBtn",
    category: "button",
    html: "I'm pulsing"
  },
  {
    className: "siblingFade",
    category: "text",
    html: "<span>Item 1 </span><span>Item 2 </span>"
  },
  {
    className: "radiusPulse",
    category: "button"
  },
  {
    className: "pressDownButton",
    category: "button",
    html: "Hover me"
  },
  {
    className: "bouncingLoader",
    category: "animation",
    html: "<div></div>"
  },
  {
    className: "arrowFromLeft",
    category: "button",
    html:
      '<svg xmlns="http://www.w3.org/2000/svg" width="5.002" height="8.576" viewBox="0 0 5.002 8.576"><path d="M1.06,8.428a.5.5,0,0,1-.71,0l-.2-.2A.49.49,0,0,1,0,7.868V.708A.49.49,0,0,1,.15.348l.2-.2a.5.5,0,0,1,.71,0l3.79,3.79a.48.48,0,0,1,0,.7Z"/></svg><span>Hover me</span>'
  },
  {
    className: "borderFade",
    category: "text",
    html: "Hover me"
  },
  {
    className: "arrowBounce",
    category: "animation",
    html:
      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20"><path d="M7.5 0a.5.5 0 01.5.5v16.17l4.44-4.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71l-6.13 6.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22L.15 13.64a.5.5 0 010-.71l.7-.71a.49.49 0 01.7 0L6 16.67V.5a.5.5 0 01.5-.5z"/></svg>'
  },
  {
    className: "lineThrough",
    category: "text",
    html: "Hover me"
  },
  {
    className: "overlayLeftBtn",
    category: "button",
    html: "<span>Hover me</span>"
  },
  {
    className: "textTransformX",
    category: "text",
    html: "Hover me"
  },
  {
    className: "arrowScrollDown",
    category: "animation",
    html:
      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20"><path d="M7.5 0a.5.5 0 01.5.5v16.17l4.44-4.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71l-6.13 6.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22L.15 13.64a.5.5 0 010-.71l.7-.71a.49.49 0 01.7 0L6 16.67V.5a.5.5 0 01.5-.5z"/></svg>'
  },
  {
    className: "swingHorizontal",
    category: "text",
    html: "Hover me"
  },
  {
    className: "pulseAnim",
    category: "text"
  },
  {
    className: "visibleBorderLeftRight",
    category: "text",
    html: "Hover me"
  },
  {
    className: "slideUpBtn",
    category: "button",
    html: "<span>Hover me</span>"
  },
  {
    className: "circleScaleBtn",
    category: "button",
    html: "<span>Hover me</span>"
  },
  {
    className: "pushUpBtn",
    category: "button",
    html: "Hover me"
  },
  {
    className: "snapLeftBtn",
    category: "button",
    html: "<span>Hover me</span>"
  },
  {
    className: "magnifyBtn",
    category: "button",
    html: "Hover & click me"
  },
  {
    className: "magnifyText",
    category: "text",
    html: "Hover & click me"
  },
  {
    className: "magnifyBorder",
    category: "button",
    html: "Hover me"
  },
  {
    className: "borderMarker",
    category: "text",
    html: "<span>Hover me</span>"
  },
  {
    className: "buttonOverlay",
    category: "text",
    html: "<span>Hover me</span>"
  },
  {
    className: "horizontalOverlay",
    category: "text",
    html: "<span>Hover me</span>"
  }
];

const effects = initialEffects.map(effect => ({
  ...effect,
  css: rawCss[effect.className].default
}));

export default effects;
