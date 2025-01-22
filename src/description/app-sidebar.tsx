import {
  BookTextIcon,
  CircleDotIcon,
  CircleUserRoundIcon,
  CreditCardIcon,
  Ellipsis,
  InfoIcon,
  LoaderCircleIcon,
  LoaderIcon,
  MousePointerClickIcon,
  NotebookTabsIcon,
  RectangleHorizontalIcon,
  Route,
  Rows3Icon,
  SeparatorHorizontalIcon,
  SlidersHorizontalIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  Table2Icon,
  TextCursorInputIcon,
  ToggleRightIcon,
  TriangleAlertIcon,
} from "lucide-react";

export const componentsMap = {
  accordion: {
    title: "Accordion",
    url: "/components/accordion",
    icon: SquareChevronUpIcon,
    blockName: "accordion",
    columns: 2,
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
  },
  alert: {
    title: "Alert",
    url: "/components/alert",
    icon: TriangleAlertIcon,
    blockName: "alert",
    columns: 3,
    description: "Displays a callout for user attention.",
  },
  avatar: {
    title: "Avatar",
    url: "/components/avatar",
    icon: CircleUserRoundIcon,
    blockName: "avatar",
    columns: 3,
    description: "An image element with a fallback for representing the user.",
  },
  badge: {
    title: "Badge",
    url: "/components/badge",
    icon: RectangleHorizontalIcon,
    blockName: "badge",
    columns: 3,
    description: "Displays a badge or a component that looks like a badge.",
  },
  breadcrumb: {
    title: "Breadcrumb",
    url: "/components/breadcrumb",
    icon: Route,
    blockName: "breadcrumb",
    columns: 3,
    description:
      "Displays the path to the current resource using a hierarchy of links.",
  },
  button: {
    title: "Button",
    url: "/components/button",
    icon: MousePointerClickIcon,
    blockName: "button",
    columns: 3,
    description: "Displays a button or a component that looks like a button.",
  },
  card: {
    title: "Card",
    url: "/components/card",
    icon: CreditCardIcon,
    blockName: "card",
    columns: 3,
    description: "Displays a card with header, content, and footer.",
  },
  checkbox: {
    title: "Checkbox",
    url: "/components/checkbox",
    icon: SquareCheckIcon,
    blockName: "checkbox",
    columns: 3,
    description:
      "A control that allows the user to toggle between checked and not checked.",
  },
  input: {
    title: "Input",
    url: "/components/input",
    icon: TextCursorInputIcon,
    blockName: "input",
    columns: 3,
    description:
      "Displays a form input field or a component that looks like an input field.",
  },
  pagination: {
    title: "Pagination",
    url: "/components/pagination",
    icon: Ellipsis,
    blockName: "pagination",
    columns: 3,
    description: "Pagination with page navigation, next and previous links.",
  },
  progress: {
    title: "Progress",
    url: "/components/progress",
    icon: LoaderCircleIcon,
    blockName: "progress",
    columns: 3,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  "radio-group": {
    title: "Radio Group",
    url: "/components/radio-group",
    icon: CircleDotIcon,
    blockName: "radio-group",
    columns: 3,
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  },
  select: {
    title: "Select",
    url: "/components/select",
    icon: Rows3Icon,
    blockName: "select",
    columns: 3,
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
  },
  separator: {
    title: "Separator",
    url: "/components/separator",
    icon: SeparatorHorizontalIcon,
    blockName: "separator",
    columns: 3,
    description: "Visually or semantically separates content.",
  },
  slider: {
    title: "Slider",
    url: "/components/slider",
    icon: SlidersHorizontalIcon,
    blockName: "slider",
    columns: 3,
    description:
      "An input where the user selects a value from within a given range.",
  },
  spinner: {
    title: "Spinner",
    url: "/components/spinner",
    icon: LoaderIcon,
    blockName: "spinner",
    columns: 3,
    description: "Informs users about the status of ongoing processes.",
  },
  switch: {
    title: "Switch",
    url: "/components/switch",
    icon: ToggleRightIcon,
    blockName: "switch",
    columns: 3,
    description:
      "A control that allows the user to toggle between checked and not checked.",
  },
  table: {
    title: "Table",
    url: "/components/table",
    icon: Table2Icon,
    blockName: "table",
    columns: 2,
    description: "A responsive table component.",
  },
  tabs: {
    title: "Tabs",
    url: "/components/tabs",
    icon: NotebookTabsIcon,
    blockName: "tabs",
    columns: 3,
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  textarea: {
    title: "Textarea",
    url: "/components/textarea",
    icon: TextCursorInputIcon,
    blockName: "textarea",
    columns: 3,
    description:
      "Displays a form textarea or a component that looks like a textarea.",
  },
  // {
  //   title: "Toast",
  //   url: "/components/toast",
  //   icon: PictureInPicture2Icon,
  //   blockName: "toast",
  // },
  tooltip: {
    title: "Tooltip",
    url: "/components/tooltip",
    icon: InfoIcon,
    blockName: "tooltip",
    columns: 3,
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
};

export const components = Object.values(componentsMap);

export const groups = [
  {
    label: "Get Started",
    items: [
      {
        title: "Introduction",
        url: "/components/introduction",
        icon: BookTextIcon,
      },
    ],
  },
  {
    label: "Components",
    items: components,
  },
];
