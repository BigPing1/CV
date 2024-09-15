import cssContacts from "./Contacts.module.css";

const Contacts = props => {
  return (
    <div>
      <h2 className={cssContacts.tytle}>Contacts</h2>
      <ul>
        <li>
          PhoneNum/WhatsApp :
          <a className={cssContacts.link} href='tel:+3530851946947'>
            +3530851946947
          </a>
        </li>
        <li>
          Email :
          <a className={cssContacts.link} href='mailto:deinehadanylo@gmail.com'>
            deinehadanylo@gmail.com
          </a>
        </li>
        <li>
          Instagram :
          <a
            className={cssContacts.link}
            href='https://www.instagram.com/__de.ine.ga___?igsh=MWUycGpqd3Bia3RrYQ=='
          >
            __de.ine.ga___
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
