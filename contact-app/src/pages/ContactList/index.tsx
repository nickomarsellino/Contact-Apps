interface ContactListProps {
  contactList?: string;
}

const ContactList = ({ contactList = "contact-list-compnent" }: ContactListProps) => {
  return <div>{contactList}</div>;
};

export default ContactList;
