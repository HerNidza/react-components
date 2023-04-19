import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "A1",
      label: "Can I use React on project",
      content: "You can use React on any project you want.",
    },
    {
      id: "A2",
      label: "Can I use JavaScript on project",
      content: "You can use JavaScript on any project you want",
    },
    {
      id: "A3",
      label: "Can I use CSS on project",
      content: "You can use CSS on any project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
